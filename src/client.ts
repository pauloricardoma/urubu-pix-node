import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
import { join } from 'path';
import { ok } from 'assert';

const env = process.env.NODE_ENV || 'test'
ok(env === 'prod' || env === 'test', 'a env é inválida, ou test ou prod')

const configPath = join(__dirname, '../', `.env.${env}`)
config({
  path: configPath
})

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    }
  }
});

export default prisma;
