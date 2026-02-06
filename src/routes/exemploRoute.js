import express from 'express';
import * as controller from '../controllers/exemploController.js';

const router = express.Router();

router.post('/exemplos', controller.create);
router.get('/exemplos', controller.getAll);
router.get('/exemplos/:id', controller.getById);
router.put('/exemplos/:id', controller.update);
router.delete('/exemplos/:id', controller.remove);

export default router;