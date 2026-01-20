import { getDb } from '../config/db';
import { Cart } from '../models/cart.model';
import { ObjectId } from 'mongodb';

export async function createCart(cart: Cart) {
  const db = await getDb();
  const result = await db.collection<Cart>('carts').insertOne({
    ...cart,
    createdAt: new Date()
  });
  return { ...cart, _id: result.insertedId.toString() };
}

export async function getAllCarts() {
  const db = await getDb();
  return db.collection<Cart>('carts').find().toArray();
}

export async function getCartById(id: string) {
  const db = await getDb();
  return db
    .collection<Cart>('carts')
    .findOne({ _id: new ObjectId(id) });
}

export async function updateCart(id: string, cart: Partial<Cart>) {
  const db = await getDb();
  await db
    .collection<Cart>('carts')
    .updateOne({ _id: new ObjectId(id) }, { $set: cart });
  return getCartById(id);
}

export async function deleteCart(id: string) {
  const db = await getDb();
  await db
    .collection<Cart>('carts')
    .deleteOne({ _id: new ObjectId(id) });
}
