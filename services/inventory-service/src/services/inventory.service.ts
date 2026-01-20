import { pool } from '../config/db';
import { randomUUID } from 'crypto';

export async function createInventory(
  productId: string,
  quantity: number
) {
  const id = randomUUID();

  await pool.query(
    `
    INSERT INTO inventorysvc.inventories
      (id, product_id, quantity, reserved)
    VALUES ($1, $2, $3, 0)
    `,
    [id, productId, quantity]
  );

  return findById(id);
}

export async function findAll() {
  const r = await pool.query(
    'SELECT * FROM inventorysvc.inventories'
  );
  return r.rows;
}

export async function findById(id: string) {
  const r = await pool.query(
    'SELECT * FROM inventorysvc.inventories WHERE id = $1',
    [id]
  );
  return r.rows[0];
}

export async function updateInventory(
  id: string,
  quantity: number
) {
  await pool.query(
    `
    UPDATE inventorysvc.inventories
    SET quantity = $1,
        updated_at = NOW()
    WHERE id = $2
    `,
    [quantity, id]
  );

  return findById(id);
}

export async function reserveStock(
  id: string,
  amount: number
) {
  await pool.query(
    `
    UPDATE inventorysvc.inventories
    SET quantity = quantity - $1,
        reserved = reserved + $1,
        updated_at = NOW()
    WHERE id = $2 AND quantity >= $1
    `,
    [amount, id]
  );

  return findById(id);
}

export async function remove(id: string) {
  await pool.query(
    'DELETE FROM inventorysvc.inventories WHERE id = $1',
    [id]
  );
}
