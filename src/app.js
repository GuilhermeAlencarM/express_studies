import express from 'express';
import dbConnect from './config/dbConnect.js';

const app = express();

const connection = await dbConnect();

connection.on('error', (erro) => {
  console.log('Erro ao conectar ao banco de dados', erro);
});

app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: 'O Senhor dos Anéis',
  },
  {
    id: 2,
    titulo: 'Harry Potter',
  },
  {
    id: 3,
    titulo: 'As Crônicas de Nárnia',
  },
];

function buscaLivro(id) {
  return livros.findIndex(livro => livro.id === Number(id));
}

app.get('/', (req, res) => {
  res.status(200).send('Home - Curso Express API');
});

app.get('/livros', (req, res) => {
  res.json(livros);
});

app.get('/livros/:id', (req, res) => {
  const livroIndex = buscaLivro(req.params.id);
  if (livroIndex === -1) {
    res.status(404).send('Livro não encontrado');
    return;
  }
  res.json(livros[livroIndex]);
});

app.put('/livros/:id', (req, res) => {
  const livroIndex = buscaLivro(req.params.id);
  if (livroIndex === -1) {
    res.status(404).send('Livro não encontrado');
    return;
  }
  livros[livroIndex].titulo = req.body.titulo;
  res.status(200).send('Livro atualizado com sucesso');
});

app.post('/livros', (req, res) => {
  const novoLivro = req.body;
  livros.push(novoLivro);
  res.status(201).send('Livro criado com sucesso');
});

app.delete('/livros/:id', (req, res) => {
  const livroIndex = buscaLivro(req.params.id);
  if (livroIndex === -1) {
    res.status(404).send('Livro não encontrado');
    return;
  }
  livros.splice(livroIndex, 1);
  res.status(200).send('Livro removido com sucesso');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
