import { Router } from 'express';
import userController from './app/adapters/controllers/userController';
import OrderController from './app/adapters/controllers/orderController';

export const router = Router();

const newUserController = new userController();
const newOrderController = new OrderController();

// users routes
router.post('/users', newUserController.create);

// orders routes
router.post('/orders', newOrderController.create);
