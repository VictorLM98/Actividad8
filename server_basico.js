const http = require('node:http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Respuesta a la petición');
});

server.listen(3000);