const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html'); // what type of content we are sending

    res.write('<p>Hello ninjas</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000')
});

// localhost is like a domain name that takes us to a loopback ip address that points back to our own computer