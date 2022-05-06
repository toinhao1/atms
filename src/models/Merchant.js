import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Creat Schema
const MerchantSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	balance: {
		type: Number,
		required: true,
		default: 0,
	},
});

const Merchant = mongoose.model('merchants', MerchantSchema);

export default Merchant;
