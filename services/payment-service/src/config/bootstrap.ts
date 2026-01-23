import { pool } from './db';

export async function bootstrap() {
  await pool.query(`
    CREATE SCHEMA IF NOT EXISTS paymentsvc;
    CREATE TABLE IF NOT EXISTS paymentsvc.payments (
      id UUID PRIMARY KEY,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);
}
