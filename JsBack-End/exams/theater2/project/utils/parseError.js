function parseError(err) {
	if (err.name == "ValidationError") {
		return Object.values(err.errors).map((err) => err.properties.message);
	} else {
		return [err.message];
	}
}
module.exports = { parseError };
