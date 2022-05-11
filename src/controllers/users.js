import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User';

export const register = async (req, res) => {
	const { email, name, password, lat, long } = req.body;
	User.findOne({ email: email }).then((user) => {
		if (user) {
			return res.status(400).json('Email already exists');
		} else {
			const newUser = new User({
				name: name,
				email: email,
				password: password,
				currentLat: lat,
				currentLong: long,
			});

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then((user) => res.json(user))
						.catch((err) => console.log(err));
				});
			});
		}
	});
};

export const login = async (req, res) => {
	const jwtSecret = process.env.JWT_SECRET;

	const { email, password } = req.body;

	// Find user by email
	User.findOne({ email }).then((user) => {
		// Check for user
		if (!user) {
			return res.status(404).json('User not found');
		}
		//Check Password
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (isMatch) {
				//User matched
				const payload = { id: user.id, name: user.name }; // Create Jwt payload

				// Sign Token
				jwt.sign(payload, jwtSecret, { expiresIn: 36000 }, (err, token) => {
					res.json({
						success: true,
						token: 'Bearer ' + token,
					});
				});
			} else {
				return res.status(400).json('Password incorrect');
			}
		});
	});
};
