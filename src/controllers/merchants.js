import Merchant from '../models/Merchant';

export const updateBalance = async (req, res) => {
	try {

    const updatedMerchant = await Merchant.findOneAndUpdate

		res.json({ success: true, newBalance: closestShops });
	} catch (err) {
		console.log(err);
		res.status(400).json({ error: err });
		throw new Error(err);
	}
};