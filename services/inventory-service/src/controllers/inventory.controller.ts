import { Request, Response } from 'express';
import * as service from '../services/inventory.service';

export async function create(req: Request, res: Response) {
  const { productId, quantity } = req.body;
  const inventory = await service.createInventory(productId, quantity);
  res.status(201).json(inventory);
}

export async function findAll(_req: Request, res: Response) {
  res.json(await service.findAll());
}

export async function findById(req: Request, res: Response) {
  const inventory = await service.findById(req.params.id);
  if (!inventory) {
    return res.status(404).json({ message: 'Inventory not found' });
  }
  res.json(inventory);
}

export async function update(req: Request, res: Response) {
  const inventory = await service.updateInventory(
    req.params.id,
    req.body.quantity
  );
  res.json(inventory);
}

export async function reserve(req: Request, res: Response) {
  const inventory = await service.reserveStock(
    req.params.id,
    req.body.amount
  );
  res.json(inventory);
}

export async function remove(req: Request, res: Response) {
  await service.remove(req.params.id);
  res.status(204).end();
}
