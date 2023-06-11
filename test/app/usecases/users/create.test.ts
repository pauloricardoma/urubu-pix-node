import {
  describe, test
} from '@jest/globals';
import { Create } from '../../../../src/app/usecases/users/create';
import { User } from '../../../../src/app/model/user';
import { UsersRepository } from '../../../../src/app/adapters/repositories/user_repository';

describe('Create User Api Test Suite', () => {
  test('with user', async () => {
    const user_repository = new UsersRepository();
    const result = await new Create(
      { name: 'John' }, 
      User, 
      user_repository
    ).call();
    expect(result.name).toStrictEqual('John');
  })
});