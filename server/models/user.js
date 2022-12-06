const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: ['true', "Please provide name of the institute"]
	},
	phoneNumber: {
		type: String,
		required: ['true', 'Please provide the contact number']
	},
	email: {
		type: String,
		validate: [validator.isEmail, "Please provide correct email id"],
		unique: true
	},
    password: {
        type: String,
        required: true
    }
});

userSchema.methods.getJwtToken = function () {
	return jwt.sign(
		{ tokenId: this._id },
		process.env.JWT_SECRET
	);
};

module.exports = mongoose.model('User', userSchema);