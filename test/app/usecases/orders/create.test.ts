import {
  describe, test
} from '@jest/globals';
import { Create as CreateUser } from '../../../../src/app/usecases/users/create';
import { User } from '../../../../src/app/model/user';
import { UserRepository } from '../../../../src/app/adapters/repositories/user_repository';
import { OrderRepository } from '../../../../src/app/adapters/repositories/order_repository';
import { Order } from '../../../../src/app/model/order';
import { Create as CreateOrder } from '../../../../src/app/usecases/orders/create';

let userId: number;

describe('Create Order Api Test Suite', () => {
  beforeAll(async () => {
    const user_repository = new UserRepository();
    const result = await new CreateUser(
      { name: 'John' },
      User,
      user_repository
    ).call();
    userId = result.id;
  })
  test('with order', async () => {
    const order_repository = new OrderRepository();
    const result = await new CreateOrder(
      { value: 100, userId },
      Order,
      order_repository
    ).call();
    expect(100).toStrictEqual(result.value);
    expect(userId).toStrictEqual(result.userId);
  })
});
