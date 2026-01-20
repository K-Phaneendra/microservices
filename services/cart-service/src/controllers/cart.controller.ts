import { Request, Response } from 'express';
import * as service from '../services/cart.service';

export async function create(req: Request, res: Response) {
  const cart = await service.createCart(req.body);
  res.status(201).json(cart);
}

export async function findAll(_req: Request, res: Response) {
  res.json(await service.getAllCarts());
}

export async function findById(req: Request, res: Response) {
  const cart = await service.getCartById(req.params.id);
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }
  res.json(cart);
}

export async function update(req: Request, res: Response) {
  const cart = await service.updateCart(req.params.id, req.body);
  res.json(cart);
}

export async function remove(req: Request, res: Response) {
  await service.deleteCart(req.params.id);
  res.status(204).end();
}
