// src/routes/bookRoutes.ts

import { Router } from 'express';
import { getAllBooks, addBook } from '../controllers/bookController'; // Verifique se o caminho está correto

const router = Router();

// Definindo as rotas
router.get('/', getAllBooks);
router.post('/', addBook);

// Exportando o roteador
export default router;