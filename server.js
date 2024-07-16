const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000')
});

// localhost is like a domain name that takes us to a loopback ip address that points back to our own computer