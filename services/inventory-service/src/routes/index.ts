import { Router } from 'express';
import * as controller from '../controllers/inventory.controller';

const router = Router();

router.post('/inventories', controller.create);
router.get('/inventories', controller.findAll);
router.get('/inventories/:id', controller.findById);
router.put('/inventories/:id', controller.update);
router.post('/inventories/:id/reserve', controller.reserve);
router.delete('/inventories/:id', controller.remove);

export default router;
