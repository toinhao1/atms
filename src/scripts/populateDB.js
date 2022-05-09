import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import dotenv from 'dotenv';

dotenv.config();
import Shop from '../models/Shop';
import Merchant from '../models/Merchant';

const db = process.env.MONGODB_URI;

mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('MongoDB Connected');
		populateDB()
			.then(() => {
				console.log('finished populating the DB');
				process.exit(0);
			})
			.catch((err) => console.log(err));
	})
	.catch((err) => {
		console.log(err);
	});

const populateDB = async () => {
	console.log('Starting To Populate the DB');
	for (let i = 0; i < 5; i++) {
		const newMerchant = new Merchant({
			name: faker.company.companyName(),
			balance: 1000,
		});

		await newMerchant.save();

		for (let i = 0; i < 50; i++) {
			const newShop = new Shop({
				name: faker.company.companyName(),
				merchant: newMerchant.id,
				location: {
					type: 'Point',
					coordinates: [faker.address.longitude(10, 6), faker.address.latitude(50, 45)],
				},
			});

			await newShop.save();
		}

		await Shop.ensureIndexes({ location: '2dsphere' });
	}
};
