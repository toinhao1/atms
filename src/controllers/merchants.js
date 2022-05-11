import Merchant from '../models/Merchant.js';

export const updateBalance = async (req, res) => {
	try {
		const { id, amount } = req.params;

		const updatedMerchant = await Merchant.findByIdAndUpdate(
			id,
			{ balance: amount },
			{ new: true },
		);
		res.json({ success: true, updatedMerchant });
	} catch (err) {
		res.status(400).json({ error: err });
	}
};
