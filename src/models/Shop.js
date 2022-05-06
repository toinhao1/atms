import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Creat Schema
const ShopSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	location: {
		type: {
			type: String,
			default: 'Point',
		},
		coordinates: [Number],
	},
	merchant: {
		type: String,
	},
});

ShopSchema.index({ location: '2dsphere' });

const Shop = mongoose.model('shops', ShopSchema);

export default Shop;
