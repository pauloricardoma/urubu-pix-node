import {
  describe, test
} from '@jest/globals';
import { Create } from '../../../../src/app/usecases/users/create';
import { User } from '../../../../src/app/model/user';
import { UserRepository } from '../../../../src/app/adapters/repositories/user_repository';

describe('Create User Api Test Suite', () => {
  test('with user', async () => {
    const user_repository = new UserRepository();
    const result = await new Create(
      { name: 'John' },
      User,
      user_repository
    ).call();
    expect(result.name).toStrictEqual('John');
  })
});
