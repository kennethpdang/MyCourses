const http = require('http'); // To create servers.
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('Request made.');

    // Set header content type:
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write();
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log("Listening for requests on port 3000.")
});

/* Ports are like different doors, different apps on your computer
have different ports */

