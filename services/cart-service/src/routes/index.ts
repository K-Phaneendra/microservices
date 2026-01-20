import { Router } from 'express';
import * as controller from '../controllers/cart.controller';

const router = Router();

router.post('/carts', controller.create);
router.get('/carts', controller.findAll);
router.get('/carts/:id', controller.findById);
router.put('/carts/:id', controller.update);
router.delete('/carts/:id', controller.remove);

export default router;
