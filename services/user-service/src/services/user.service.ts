import { pool } from '../config/db';
import { randomUUID } from 'crypto';

export async function create() {
  const id = randomUUID();
  await pool.query(
    'INSERT INTO usersvc.users (id) VALUES ()',
    [id]
  );
  return { id };
}

export async function findAll() {
  const r = await pool.query('SELECT * FROM usersvc.users');
  return r.rows;
}

export async function findById(id: string) {
  const r = await pool.query(
    'SELECT * FROM usersvc.users WHERE id=',
    [id]
  );
  return r.rows[0];
}

export async function remove(id: string) {
  await pool.query(
    'DELETE FROM usersvc.users WHERE id=',
    [id]
  );
}
