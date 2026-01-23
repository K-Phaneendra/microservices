import * as svc from '../services/order.service';
import { Request, Response } from 'express';

export const create = async (_: Request, res: Response) =>
  res.status(201).json(await svc.create());

export const findAll = async (_: Request, res: Response) =>
  res.json(await svc.findAll());

export const findById = async (req: Request, res: Response) =>
  res.json(await svc.findById(req.params.id));

export const remove = async (req: Request, res: Response) => {
  await svc.remove(req.params.id);
  res.status(204).end();
};
