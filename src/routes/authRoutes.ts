// src/routes/authRoutes.ts

import { Router } from 'express';
import { register, login } from '../controllers/authController'; // Verifique se o caminho está correto

const router = Router();

// Definindo as rotas
router.post('/register', register);
router.post('/login', login);

// Exportando o roteador
export default router;