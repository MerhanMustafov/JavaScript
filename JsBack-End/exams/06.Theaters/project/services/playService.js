const Play = require("../models/PlayModel");
const User = require("../models/UserModel");

async function createPlay(playData) {
	const play = await new Play(playData);
	await play.save();
	return play;
}

async function getBestThree() {
	const plays = await Play.find({ isPublic: true })
		.sort({ likes: -1 })
		.limit(3)
		.populate("creator")
		.lean();
	return plays;
}

async function getAll() {
	const plays = await Play.find({ isPublic: true })
		.sort({ createdAt: -1 })
		.populate("creator")
		.lean();
	return plays;
}
async function getPlayById(id) {
	const play = await Play.findById(id).lean();
	return play;
}

async function addLike(playId, userId) {
	const play = await Play.findById(playId);
	const user = await User.findById(userId);
	play.likedUsers.push(userId);
	play.likes += 1;
	user.likedPlays.push(playId);
	await user.save();
	await play.save();
}

async function deletePlay(id) {
	await Play.findByIdAndDelete(id);
}
async function editPlay(playId, playData) {
	const play = await Play.findById(playId);
	play.title = playData.title;
	play.description = playData.description;
	play.imageUrl = playData.imageUrl;
	play.isPublic = playData.isPublic;
	await play.save();
}

async function getSortedByDate() {
	const plays = await Play.find({ isPublic: true })
		.sort({ createdAt: 1 })
		.populate("likedUsers")
		.populate("creator")
		.lean();
	return plays;
}
async function getSortedByLikes() {
	const plays = await Play.find({ isPublic: true })
		.sort({ likes: -1 })
		.populate("likedUsers")
		.populate("creator")
		.lean();
	return plays;
}
module.exports = {
	createPlay,
	getBestThree,
	getPlayById,
	addLike,
	getAll,
	deletePlay,
	editPlay,
	getSortedByDate,
	getSortedByLikes,
};
