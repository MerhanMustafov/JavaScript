const Post = require("../models/PostModel");
const userService = require("../services/userService");

async function createPost(postData) {
	const pattern = new RegExp(`^${postData.title}$`);
	const existing = await Post.findOne({ title: { $regex: pattern } });
	if (existing) {
		throw new Error("Post with that title already exists");
	}
	const post = new Post(postData);
	await post.save();
	await userService.addPostToUser(post.author, post._id);

	return post;
}
async function getMyPosts(userId) {
	const posts = await Post.find({}).populate("author").lean();
	const myPosts = posts.filter((p) => p.author._id == userId);
	return myPosts;
}

async function deletePost(postId) {
	await Post.findByIdAndDelete(postId);
}

async function getAllPosts() {
	const foundPosts = await Post.find({})
		.populate("author")
		.populate("votes")
		.lean();
	return foundPosts;
}

async function vote(up = false, down = false, postId, userId) {
	const post = await Post.findById(postId)
		.populate("author")
		.populate("votes");
	post.votes.push(userId);
	if (up) {
		post.postRating += 1;
	} else if (down) {
		post.postRating -= 1;
	}
	await post.save();
}

async function getPostByPostId(postId, edit = false, postData = undefined) {
	let post;
	if (edit) {
		post = await Post.findById(postId).populate("author").populate("votes");
		post.title = postData.title;
		post.keyword = postData.keyword;
		post.location = postData.location;
		post.dataOfCreation = postData.dataOfCreation;
		post.image = postData.image;
		post.description = postData.description;
		await post.save();
	} else {
		post = await Post.findById(postId)
			.populate("author")
			.populate("votes")
			.lean();
	}
	return post;
}

async function getPostById(id) {
	const foundPost = await Post.findOne({ author: id })
		.populate("author")
		.lean();
	return foundPost;
}

module.exports = {
	createPost,
	getAllPosts,
	getPostById,
	deletePost,
	getPostByPostId,
	vote,
	getMyPosts,
};
