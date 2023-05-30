import { Router } from 'express';
import usersController from './app/adapters/controllers/usersController';

export const router = Router();

const newUsersController = new usersController();

// create User
router.post('/users', newUsersController.create);

// auth login
// router.post('/login', Authcontroller.authenticated);
