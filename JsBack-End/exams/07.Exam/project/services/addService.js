const Add = require("../models/AddModel");
const User = require("../models/UserModel");

async function createAdd(addData) {
	const add = await new Add(addData);
	await add.save();
	return add;
}
async function searchAddByEmail(em) {
	// const pattern = new RegExp(`${em}`, "i");
	const add = await Add.find({}).populate("author").lean();
	const add1 = add.filter(
		({ author }) => author.email.toLowerCase() == em.toLowerCase()
	);
	return add1;
}

async function getAll() {
	const adds = await Add.find({})
		.populate("author")
		.populate("usersApplied")
		.lean();
	return adds;
}

async function addToUsersApplied(addId, userId) {
	const add = await Add.findById(addId);
	add.usersApplied.push(userId);
	await add.save();
}
async function getAddById(id) {
	const add = await Add.findById(id)
		.populate("author")
		.populate("usersApplied")
		.lean();
	return add;
}

async function deleteAdd(id) {
	await Add.findByIdAndDelete(id);
}
async function editAdd(addId, addData) {
	const add = await Add.findById(addId);
	add.headline = addData.headline;
	add.location = addData.location;
	add.companyName = addData.companyName;
	add.companyDescription = addData.companyDescription;
	await add.save();
}

module.exports = {
	createAdd,
	getAddById,
	getAll,
	deleteAdd,
	editAdd,
	addToUsersApplied,
	searchAddByEmail,
};
