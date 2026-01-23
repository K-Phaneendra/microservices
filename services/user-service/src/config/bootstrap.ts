import { pool } from './db';

export async function bootstrap() {
  await pool.query(`
    CREATE SCHEMA IF NOT EXISTS usersvc;
    CREATE TABLE IF NOT EXISTS usersvc.users (
      id UUID PRIMARY KEY,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);
}
