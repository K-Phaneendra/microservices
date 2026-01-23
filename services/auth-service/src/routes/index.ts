import { Router } from 'express';
import * as c from '../controllers/auth.controller';

const r = Router();
r.post('/auth', c.create);
r.get('/auth', c.findAll);
r.get('/auth/:id', c.findById);
r.delete('/auth/:id', c.remove);
export default r;
