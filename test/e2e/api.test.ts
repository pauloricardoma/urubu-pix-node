import {
  describe, test
} from '@jest/globals';
import supertest from 'supertest';
import app from '../../src/server';
import { Order, User } from '@prisma/client';

let userId: number;

describe('Api e2e Test Suite', () => {
  test('POST /users - should create a new user', async () => {
    const response = await supertest(app)
      .post('/users')
      .send({ name: 'Mary' })

    const data = JSON.parse(response.text);
    userId = data.id;

    expect(response.status).toStrictEqual(200);
    expect(data).toMatchObject({} as User);
    expect(data.name).toStrictEqual('Mary');
  })
  test('POST /orders - should create a new order', async () => {
    const response = await supertest(app)
      .post('/orders')
      .send({ value: 200, userId })

    const data = JSON.parse(response.text);

    expect(response.status).toStrictEqual(200);
    expect(data).toMatchObject({} as Order);
    expect(200).toStrictEqual(data.value);
    expect(userId).toStrictEqual(data.userId);
  })
});
