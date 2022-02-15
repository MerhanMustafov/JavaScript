const Course = require("../models/CourseModel");

async function createCourse(courseData) {
	const course = await new Course(courseData);
	await course.save();
	return course;
}

async function getAllCourses() {
	const courses = await Course.find({}).populate("enrolledUsers").lean();
	return courses;
}
async function getCourseById(id) {
	const course = await Course.findById(id)
		.populate("enrolledUsers")
		.populate("creator")
		.lean();
	return course;
}

async function enrollUser(userId, courseId) {
	const course = await Course.findById(courseId);
	await course.enrolledUsers.push(userId);
	await course.save();
}

async function editCourse(id, courseData) {
	const course = await Course.findById(id);
	course.title = courseData.title;
	course.description = courseData.description;
	course.imageUrl = courseData.imageUrl;
	course.duration = courseData.duration;
	await course.save();
}

async function deleteCourse(id) {
	await Course.findByIdAndDelete(id);
}

async function searchByWord(word) {
	const pattern = new RegExp(`${word}`, "i");
	const course = await Course.find({ title: { $regex: pattern } }).lean();
	return course;
}
module.exports = {
	createCourse,
	getAllCourses,
	getCourseById,
	enrollUser,
	editCourse,
	deleteCourse,
	searchByWord,
};
