let http = require("http"); // Core Module for serving the requets

http.createServer = (req,res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Jay you can definetly do Man!!!');
}
console.log('Server running at 3000 Port'); // Console will Print the same output