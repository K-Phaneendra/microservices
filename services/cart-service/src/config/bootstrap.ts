import { getDb } from './db';

export async function bootstrap() {
  const db = await getDb();
  await db.createCollection('carts');
}
