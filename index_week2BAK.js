const PORT = 3000; //establish a port

//const http = require('http'); //create variable http
import http from 'http'; // replace line 3 because of "type" : "module" in package.json

import {getAll, getItem} from './data.js';

const server = http.createServer( // create variable server
    (req, res) => { // when request is made -> send response
        const path = req.url.toLowerCase(); // path is url entered by user
        switch(path){ // like a if statement
            case '/': // if there is / after localhost:3000 then take user to home page
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('Hello there!\r\nWelcome to the home page.\r\nHere is our books data:\r\n'); //what will be on the page
                res.write(getAll());
                res.end();
                break;
            case '/about':
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('That is our about page.');
                res.end();
                break;
            case '/detail':
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write(getItem('1937'));
                res.end();
                break;
            default: // if anything else than / or /about is typed then display error page
                res.writeHead(504, {'Content-Type': 'text/plain'});
                res.end('404: Page not found.');
                break; 
        }
    }
)

server.listen(PORT, () => { 
    console.log('This server is running on port 3000') //display message on terminal when we run the server
});