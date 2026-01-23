import { client } from './db';

export async function bootstrap() {
  await client.connect();
  await client.db('shop_products').createCollection('products');
}
