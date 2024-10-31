// src/controllers/bookController.test.ts

import request from 'supertest';
import express from 'express';
import { getAllBooks, addBook } from './bookController';
import { BookRepository } from '../repositories/bookRepository';

jest.mock('../repositories/bookRepository');

const app = express();
app.use(express.json());
app.get('/books', getAllBooks);
app.post('/books', addBook);

describe('Book Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return all books', async () => {
    (BookRepository.prototype.getAllBooks as jest.Mock).mockResolvedValue([{ id: 1, title: 'Livro A', author: 'Autor A', price: 10 }]);

    const response = await request(app).get('/books');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, title: 'Livro A', author: 'Autor A', price: 10 }]);
  });

  test('should add a new book with valid data', async () => {
    (BookRepository.prototype.addBook as jest.Mock).mockResolvedValue({ id: 1, title: 'Livro A', author: 'Autor A', price: 10 });

    const response = await request(app)
      .post('/books')
      .send({ title: 'Livro A', author: 'Autor A', price: 10 });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ id: 1, title: 'Livro A', author: 'Autor A', price: 10 });
  });

  test('should return an error for invalid book title', async () => {
    const response = await request(app)
      .post('/books')
      .send({ title: 'AB', author: 'Autor A', price: 10 });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('O título deve ter pelo menos 3 caracteres.');
  });

});