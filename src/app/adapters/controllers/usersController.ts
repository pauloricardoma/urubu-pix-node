import { Request, Response } from 'express';
import { Create } from '../../usecases/users/create';
import { User } from '../../model/user';
import { UsersRepository } from '../repositories/user_repository';
class UsersController {
  async create(request: Request, response: Response) {
    try {
      const user_repository = new UsersRepository();
      const result = await new Create(request.body, User, user_repository).call();

      return response.status(200).json(result);

    } catch (error: any) {
      return response.status(404).json({error: {
        message: error.message,
      }});
    }
  }
}

export default UsersController;
