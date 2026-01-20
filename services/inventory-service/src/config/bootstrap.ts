import { pool } from './db';

export async function bootstrap() {
  await pool.query(`
    CREATE SCHEMA IF NOT EXISTS inventorysvc;

    CREATE TABLE IF NOT EXISTS inventorysvc.inventories (
      id UUID PRIMARY KEY,
      product_id UUID NOT NULL,
      quantity INTEGER NOT NULL CHECK (quantity >= 0),
      reserved INTEGER NOT NULL DEFAULT 0 CHECK (reserved >= 0),
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
  `);
}
