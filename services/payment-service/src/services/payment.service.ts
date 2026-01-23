import { pool } from '../config/db';
import { randomUUID } from 'crypto';

export async function create() {
  const id = randomUUID();
  await pool.query(
    'INSERT INTO paymentsvc.payments (id) VALUES ()',
    [id]
  );
  return { id };
}

export async function findAll() {
  const r = await pool.query('SELECT * FROM paymentsvc.payments');
  return r.rows;
}

export async function findById(id: string) {
  const r = await pool.query(
    'SELECT * FROM paymentsvc.payments WHERE id=',
    [id]
  );
  return r.rows[0];
}

export async function remove(id: string) {
  await pool.query(
    'DELETE FROM paymentsvc.payments WHERE id=',
    [id]
  );
}
