const http = require('http'); // To create servers.

const server = http.createServer((req, res) => {
    console.log('Request made.');
});

server.listen(3000, 'localhost', () => {
    console.log("Listening for requests on port 3000.")
});

/* Ports are like different doors, different apps on your computer
have different ports */

