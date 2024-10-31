// src/server.ts

import express from 'express';
import { json } from 'body-parser';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';
import { Pool } from 'pg';
import pool from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

// Conexão com o banco de dados (opcional, mas bom para verificar a conexão)
pool.connect()
  .then(() => console.log('Conectado ao banco de dados'))
  .catch(err => console.error('Erro ao conectar ao banco de dados', err));

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});