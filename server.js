import http from 'http';

const PORT = 3000;

const rotas = {
    '/': 'Home - Curso Expresss API',
    '/sobre': 'Sobre',
    '/contato': 'Contato',
    '/blog': 'Blog'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(rotas[req.url]);
});

server.listen(PORT,() => {
    console.log('Server is running on port 3000');
})