var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World')
})

.listen(8080, 'localhost', null, function() {
    console.log('Server is listening on localhost:8080');
});