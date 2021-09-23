const http2 = require('http2')
const fs = require('fs');
// site example : https://nodejs.org/api/http2.html
const port = 8080

const server = http2.createSecureServer({
    key: fs.readFileSync('./modulos/certs/private-privkey.pem'),
    cert: fs.readFileSync('./modulos/certs/public-crt.pem')
})

server.on('error', (err) => console.log(err))

server.on('stream', (stream, headers) => {
    // stream is a Duplex
    stream.respond({
        'content-type': 'text/html; charset=utf-8',
        ':status': 201
    });
    stream.end('<h1>Hola mundo con http2 ssl</h1>');
});

server.listen(port);