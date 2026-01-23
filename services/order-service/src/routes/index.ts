import { Router } from 'express';
import * as c from '../controllers/order.controller';

const r = Router();
r.post('/order', c.create);
r.get('/order', c.findAll);
r.get('/order/:id', c.findById);
r.delete('/order/:id', c.remove);
export default r;
