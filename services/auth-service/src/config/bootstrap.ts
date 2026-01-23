import { pool } from './db';

export async function bootstrap() {
  await pool.query(`
    CREATE SCHEMA IF NOT EXISTS authsvc;
    CREATE TABLE IF NOT EXISTS authsvc.auths (
      id UUID PRIMARY KEY,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);
}
