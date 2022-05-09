import { Router } from 'express';
import passport from 'passport';

import { updateBalance } from '../controllers/merchants';

const merchantRouter = Router();

merchantRouter.post(
	'/update/:id/:amount',
	passport.authenticate('jwt', { session: false }),
	updateBalance,
);

export default merchantRouter;
