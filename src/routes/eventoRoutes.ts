import { Router } from 'express';
import {
  createEvento,
  getAllEventos,
  getEventoById,
  deleteEventoById
} from '../controller/eventoController';

const router = Router();

router.get('/', getAllEventos);
router.post('/', createEvento);
router.get('/:id', getEventoById);
router.delete('/:id', deleteEventoById);

export default router;