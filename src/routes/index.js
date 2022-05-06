import { Router } from 'express';

import userRouter from './users.js';
import shopRouter from './shops.js';

const router = Router();

router.use(userRouter);
router.use(shopRouter);

export default router;
