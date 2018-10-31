var http = require("http"); // Core Module for serving the requets

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Jay you can definetly do Man!!!');
}).listen(3000);
console.log('Server running at 3000 Port'); // Console will Print the same output