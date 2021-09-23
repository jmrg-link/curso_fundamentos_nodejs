const http = require('http')
const port = 3000


router = (req, res) => {
    console.log(' new request to: ' + req.url)
    switch (req.url) {
        case '/hi':
            res.write('hi , how are you?')
            res.end()
            break;

        default:
            res.write('err 404 : no found')
            res.end()
    }
    //res.writeHead(201, { 'Content-Type': 'text/plain' })
    //res.write('you response web is  : ' + req.url)
    //res.end()
}
http.createServer(router).listen(port)