import Merchant from '../models/Merchant.js';

export const updateBalance = async (req, res) => {
	try {
		const updatedMerchant = await Merchant.findByIdAndUpdate();

		res.json({ success: true, updatedMerchant });
	} catch (err) {
		console.log(err);
		res.status(400).json({ error: err });
		throw new Error(err);
	}
};
