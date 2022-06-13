import { Router } from "express";

// CONTROLLERS
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers";

// Init router
const router = Router();

router.get('/'      , getUsers);
router.get('/:id'   , getUser);
router.post('/'     , createUser);
router.put('/:id'   , updateUser);
router.delete('/:id', deleteUser);

export default router;