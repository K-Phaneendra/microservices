import { Router } from 'express';
import * as c from '../controllers/payment.controller';

const r = Router();
r.post('/payment', c.create);
r.get('/payment', c.findAll);
r.get('/payment/:id', c.findById);
r.delete('/payment/:id', c.remove);
export default r;
