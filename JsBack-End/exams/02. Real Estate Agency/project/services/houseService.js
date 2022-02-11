const Housing = require("../models/Housing");

async function createHouse(houseData) {
	const house = await new Housing(houseData);
	await house.save();
	return house;
}

async function getAll() {
	const houses = await Housing.find({}).sort({ createdAt: -1 }).lean();
	return houses;
}
async function deleteHouse(id) {
	await Housing.findByIdAndDelete(id);
}
async function editHouse(id, houseData) {
	const house = await Housing.findById(id);
	house.name = houseData.name;
	house.type = houseData.type;
	house.year = houseData.year;
	house.city = houseData.city;
	house.image = houseData.image;
	house.description = houseData.description;
	house.available = houseData.available;
	await house.save();
}
async function getHouseById(id, userId, rent) {
	let house;
	if (rent) {
		house = await Housing.findById(id).populate("owner").populate("rented");
		house.rented.push(userId);
		house.available -= 1;
		house.save();
	} else {
		house = await Housing.findById(id)
			.populate("owner")
			.populate("rented")
			.lean();
	}
	return house;
}

async function getLastThree() {
	const houses = await Housing.find({}).sort({ createdAt: -1 }).lean();
	const lastThree = houses.slice(0, 3);
	return lastThree;
}

async function search(search) {
	if (["apartment", "villa", "house"].includes(search.toLowerCase())) {
		const houses = await Housing.find({ type: search }).lean();
		return houses;
	} else {
		throw new Error("search for Apartment, Villa, House");
	}
}
module.exports = {
	createHouse,
	getAll,
	getHouseById,
	deleteHouse,
	editHouse,
	getLastThree,
	search,
};
