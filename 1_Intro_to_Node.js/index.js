const express = require('express'); 
const app = express(); //create express app
const port = 3000; //save port number

app.get('/', function(req, res) { //get a request to the root '/'
    res.sendFile('index.html', {root: __dirname}); //server response by sending the index.html file to the client's browser
});

app.listen(port, () => { //server listens for any attempts from a client to connect at port 3000
    console.log('Now listening on port ${port}');
});







/*
const http = require("http");
const fs = require("fs");
http.createServer((req,res) => {
    var path = req.url.toLowerCase();
    switch(path) {
        case '/':
            fs.readFile("home.html", (err, data) => {
             if (err) return console.error(err);
                res.writeHead(200, {'Content-Type': 'text/html'});
             res.end(data.toString());
            });
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
}).listen(process.env.PORT || 3000);
*/