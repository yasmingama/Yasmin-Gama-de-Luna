// src/controllers/authController.ts

import { Request, Response } from 'express';

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  // Lógica para registrar o usuário (exemplo simples)
  res.status(201).json({ message: 'Usuário registrado com sucesso!', user: { name, email } });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // Lógica para login do usuário (exemplo simples)
  res.status(200).json({ message: 'Usuário logado com sucesso!', email });
};