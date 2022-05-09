import { Router } from 'express';
import passport from 'passport';

import { list } from '../controllers/shops';

const shopRouter = Router();

shopRouter.get('/list', passport.authenticate('jwt', { session: false }), list);

export default shopRouter;
