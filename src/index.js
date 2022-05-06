import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';
import dotenv from 'dotenv';
import passportConfig from './config/passport.js';

import router from './routes/index.js';

dotenv.config();

// Connect to DB
const db = process.env.MONGODB_URI;
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('MongoDB Connected');
	})
	.catch((err) => {
		console.log(err);
	});

const app = express();
//Body parser middleware

app.use(passport.initialize());
//Passport Config
passportConfig(passport, process.env.JWT_SECRET);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);
// Set port and have server listen
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
