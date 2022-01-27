const Play = require("../models/Play");

async function getAllPlays(orderedBy) {
	// console.log(orderedBy);
	let sort = { createdAt: -1 };
	if (orderedBy == "likes") {
		sort = { userLiked: "desc" };
	}
	return await Play.find({ isPublic: true }).sort(sort).lean();
}

async function getPlayById(id) {
	console.log(await Play.findById(id).populate("userLiked").lean());
	return await Play.findById(id).lean();
}

async function createPlay(playData) {
	const pattern = new RegExp(`^${playData.title}$`, "i");
	const existing = await Play.findOne({ title: { $regex: pattern } });
	if (existing) {
		throw new Error("A Play alreadiy exists!");
	}
	const play = new Play(playData);
	await play.save();

	return play;
}
async function editPlay(id, playData) {
	const play = await Play.findById(id);

	play.title = playData.title;
	play.description = playData.description;
	play.imageUrl = playData.imageUrl;
	play.isPublic = Boolean(playData.isPublic);
	return play.save();
}
async function deletePlay(id) {
	return Play.findByIdAndDelete(id);
}

async function likePlay(playId, userId) {
	const play = await Play.findById(playId);

	play.userLiked.push(userId);
	return play.save();
}
module.exports = {
	getAllPlays,
	getPlayById,
	createPlay,
	editPlay,
	deletePlay,
	likePlay,
};
