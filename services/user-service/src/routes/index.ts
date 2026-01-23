import { Router } from 'express';
import * as c from '../controllers/user.controller';

const r = Router();
r.post('/user', c.create);
r.get('/user', c.findAll);
r.get('/user/:id', c.findById);
r.delete('/user/:id', c.remove);
export default r;
