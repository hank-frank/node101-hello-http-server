const http = require ('http'); 

const server = http.createServer(function (request, response){
    console.log("recieved" + request.method + "request for" + request.url);

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end("Hello World");
});

server.listen(8080, 'localhost', null, function(){
    console.log("server is listening on localhost:8080")
});