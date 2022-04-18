import * as data from './data.js';
import books from './data.js';

/*console.log(books);

console.log(data.getItem("The Hobbit"));*/


/*app.getAll('/' (req, res) => {
    res.json(books);
});*/

/*app.getItem('/:title', (req, res) => {
    const booksTitle = Text(request.params.title);
    const getItem = books.find((book) => book.title == bookTitle);
}*/


import { parse } from "querystring";

import http from 'http'; // replace line 4 because of "type" : "module" in package.json
const PORT = 3000; //establish a port

const server = http.createServer( // create variable server
    (req, res) => { // when request is made -> send response
        const path = req.url.toLowerCase(); // path is url entered by user
        switch(path){ // like a if statement
            case '/': // if there is / after localhost:3000 then take user to home page
                //let allBooks = data.getAll();
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('Hello there!\r\nWelcome to the home page.\r\nHere is our books data:\r\n'); //what will be on the page
                res.end(JSON.stringify(books, undefined, 5));
                break;
            case '/about':
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('That is our about page.');
                res.end();
                break;
            case '/detail:':
                let url = req.url.split("?"); // separate route from query string
                let query = parse(url[1]); // convert query string to a JS object
                const booksTitle = Text(request.params.title);
                const getItem = books.find((book) => book.title === bookTitle);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write();
                res.end(data.getItem());
                break;
            default: // if anything else is typed then display error page
                res.writeHead(504, {'Content-Type': 'text/plain'});
                res.end('404: Page not found.');
                break; 
        }
    }
)

server.listen(PORT, () => { 
    console.log('This server is running on port 3000') //display message on terminal when we run the server
});


