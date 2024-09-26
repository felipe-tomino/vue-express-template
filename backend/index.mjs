import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import knex from 'knex';
import knexfile from './knexfile.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const bancoDeDados = knex(knexfile[ENVIRONMENT]);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao backend do projeto!');
});

app.listen(PORT, () => {
  console.log(`Pronto: O servidor está rodando na porta ${PORT}`);
});
