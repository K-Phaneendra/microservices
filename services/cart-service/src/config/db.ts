import { MongoClient } from 'mongodb';

export const client = new MongoClient(
  process.env.MONGO_URI || 'mongodb://mongodb:27017'
);

export async function getDb() {
  await client.connect();
  return client.db('shop_carts');
}
