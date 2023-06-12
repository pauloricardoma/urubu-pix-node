import { Request, Response } from 'express';
import { Create } from '../../usecases/users/create';
import { User } from '../../model/user';
import { UserRepository } from '../repositories/user_repository';

class UserController {
  async create(request: Request, response: Response) {
    const user_repository = new UserRepository();
    const result = await new Create(request.body, User, user_repository).call();

    return response.status(200).json(result);
  }
}

export default UserController;
