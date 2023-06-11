import {
  describe, test
} from '@jest/globals';
import supertest from 'supertest';
import app from '../../src/server';
import { Users } from '@prisma/client';

describe('Api e2e Test Suite', () => {
  test('POST /users - should create a new user', async () => {
    const response = await supertest(app)
      .post('/users')
      .send({ name: 'Mary' })

    const data = JSON.parse(response.text);
    expect(response.status).toStrictEqual(200);
    expect(data).toMatchObject({} as Users);
    expect(data.name).toStrictEqual('Mary');
  })
});