var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World')
})

.listen(8080, '127.0.0.1');

console.log('Server is running at http://127.0.0.1:8080/');