import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Creat Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
	currentLat: {
		type: String,
	},
	currentLong: {
		type: String,
	},
});

const User = mongoose.model('users', UserSchema);

export default User;
