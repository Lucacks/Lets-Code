const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.write('Olá mundo!');
    res.end();
})

server.listen(8080);