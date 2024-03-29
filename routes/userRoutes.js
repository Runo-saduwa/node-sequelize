import { Router } from 'express';
import userController from '../controllers/userController.js';

const router = Router();

router.post('/', userController.createUser);

export default router;