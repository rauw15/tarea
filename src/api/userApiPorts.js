import { Router } from "express";
import {
  login,
  register,
} from "../../core/aplication/userService";


const router = Router();

// Rutas relacionadas con la autenticación
router.post("/register", register);
router.post("/login", login);

export default router;
