import {
  describe, test
} from '@jest/globals';
import { User } from '../../../src/app/model/user';

describe('User Api Test Suite', () => {
  test('with user', () => {
    const user = new User('John');
    expect('John').toStrictEqual(user.name);
  })
})