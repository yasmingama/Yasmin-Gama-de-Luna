import pool from '../config/database';

const migrationScripts = {
  createUsersTable: `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      passwordHash VARCHAR(255) NOT NULL
    );
  `,
  createBooksTable: `
    CREATE TABLE IF NOT EXISTS books (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      author VARCHAR(100) NOT NULL,
      price NUMERIC(10, 2) NOT NULL CHECK (price > 0)
    );
  `,
};

const createUsersTable = async () => {
  const client = await pool.connect();
  try {
    await client.query(migrationScripts.createUsersTable);
    console.log('Tabela "users" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela "users":', err);
  } finally {
    client.release();
  }
};

const createBooksTable = async () => {
  const client = await pool.connect();
  try {
    await client.query(migrationScripts.createBooksTable);
    console.log('Tabela "books" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela "books":', err);
  } finally {
    client.release();
  }
};

const runMigrations = async () => {
  await createUsersTable();
  await createBooksTable();
};

// Executa as migrações
runMigrations().then(() => process.exit(0));