import { pool } from './db';

export async function bootstrap() {
  await pool.query(`
    CREATE SCHEMA IF NOT EXISTS ordersvc;
    CREATE TABLE IF NOT EXISTS ordersvc.orders (
      id UUID PRIMARY KEY,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);
}
