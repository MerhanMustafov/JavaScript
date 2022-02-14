const Hotel = require("../models/HotelModel");

async function createHotel(hotelData) {
	const hotel = await new Hotel(hotelData);
	await hotel.save();
	return hotel;
}
async function getAllHotels() {
	const hotels = await Hotel.find({})
		.populate("owner")
		.populate("bookedRooms")
		.lean();
	return hotels;
}

async function getHotelById(id) {
	const hotel = await Hotel.findById(id)
		.populate("owner")
		.populate("bookedRooms")
		.lean();
	return hotel;
}
async function editHotel(id, hotelData) {
	const hotel = await Hotel.findById(id);
	hotel.name = hotelData.name;
	hotel.city = hotelData.city;
	hotel.imageUrl = hotelData.imageUrl;
	hotel.freeRooms = hotelData.freeRooms;
	await hotel.save();
	return hotel;
}

async function deleteById(id) {
	const hotel = await Hotel.findByIdAndDelete(id);
}

async function bookHotel(userId, hotelId) {
	const hotel = await Hotel.findById(hotelId);
	hotel.bookedRooms.push(userId);
	hotel.freeRooms -= 1;
	await hotel.save();
}
module.exports = {
	createHotel,
	getAllHotels,
	getHotelById,
	editHotel,
	deleteById,
	bookHotel,
};
