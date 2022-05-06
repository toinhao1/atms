import Shop from '../models/Shop.js';

export const list = async (req, res) => {
	const {
		user: { currentLat, currentLong },
	} = req;
	try {
		const closestShops = await Shop.aggregate([
			{
				$geoNear: {
					near: { type: 'Point', coordinates: [+currentLong, +currentLat] },
					distanceField: 'dist.calculated',
					spherical: true,
				},
			},
		]).limit(10);

		// use https://github.com/googlemaps/google-maps-services-js 
		// for distance by car, walking, or transport
		// also need an api key

		res.json({ success: true, list: closestShops });
	} catch (err) {
		console.log(err);
		res.status(400).json({ error: err });
		throw new Error(err);
	}
};
