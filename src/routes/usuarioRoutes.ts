import { Router } from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  getUserByUsername,
  updateUserById,
  updateUserByUsername,
  deleteUserById,
  deleteUserByUsername,
  addEventToUser
} from '../controller/usuarioController';

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUserById);
router.get('/username/:username', getUserByUsername);
router.put('/:id', updateUserById);
router.put('/username/:username', updateUserByUsername);
router.delete('/:id', deleteUserById);
router.delete('/username/:username', deleteUserByUsername);

// nuevo: aÃ±adir evento a un usuario
router.put('/:id/addEvent', addEventToUser);

export default router;