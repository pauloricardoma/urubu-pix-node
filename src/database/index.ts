import { Client } from 'pg';
require('dotenv').config();

const client = new Client({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

client.connect();

exports.query = async (query: string, values: any[]) => {
  const { rows } = await client.query(query, values);
  return rows;
};
