import { Router } from 'express';

import userRouter from './users';
import shopRouter from './shops';
import merchantRouter from './merchats';

const router = Router();

router.use(userRouter);
router.use(shopRouter);
router.use(merchantRouter);

export default router;
