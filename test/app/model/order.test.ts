import {
  describe, test
} from '@jest/globals';
import { Create } from '../../../src/app/usecases/users/create';
import { User } from '../../../src/app/model/user';
import { UserRepository } from '../../../src/app/adapters/repositories/user_repository';
import { Order } from '../../../src/app/model/order';

let userId: number;

describe('Order Api Test Suite', () => {
  beforeAll(async () => {
    const user_repository = new UserRepository();
    const result = await new Create(
      { name: 'John' },
      User,
      user_repository
    ).call();
    userId = result.id;
  })
  test('with order', () => {
    const result = new Order(100, userId);
    expect(100).toStrictEqual(result.value);
    expect(userId).toStrictEqual(result.userId);
  })
});
