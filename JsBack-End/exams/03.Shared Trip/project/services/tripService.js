const Trip = require("../models/TripModel");
const User = require("../models/UserModel");

async function createTrip(tripData, userId) {
	const trip = await new Trip(tripData);
	const user = await User.findById(userId);
	user.tripsHistory.push(trip._id);
	await user.save();
	await trip.save();
	return trip;
}

async function getAllTrips() {
	const trips = await Trip.find({}).lean();
	return trips;
}

async function getTripById(id) {
	const trip = await Trip.findById(id)
		.populate("creator")
		.populate("buddies")
		.lean();
	return trip;
}

async function deleteTrip(id) {
	await Trip.findByIdAndDelete(id);
}

async function editTrip(id, tripData) {
	const trip = await Trip.findById(id);
	trip.start = tripData.start;
	trip.end = tripData.end;
	trip.date = tripData.date;
	trip.time = tripData.time;
	trip.carBrand = tripData.carBrand;
	trip.carImage = tripData.carImage;
	trip.seats = tripData.seats;
	trip.price = tripData.price;
	trip.description = tripData.description;

	const tr = await trip.save();
	return tr;
}

async function joinTrip(tripId, userId) {
	const trip = await Trip.findById(tripId).populate("creator");
	// const user = await User.findById(userId);
	// user.tripsHistory.push(tripId);
	trip.buddies.push(userId);
	trip.seats -= 1;
	// await user.save();
	await trip.save();
}

module.exports = {
	createTrip,
	getAllTrips,
	getTripById,
	deleteTrip,
	editTrip,
	joinTrip,
};
