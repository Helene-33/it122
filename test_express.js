import http from 'http';
import {getAll, getItem} from './data.js';
import { parse } from "querystring";
import express from 'express';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); // Parse URL-encoded bodies
app.use(express.json()); // parse JSON bodies
app.set('view engine', 'ejs');

// send static file as response
app.get('/', (req,res) => { // each app.get blocks are handlers, like switch in previous index.js versions
    res.render('home');
    // res.type('text/html');
    // res.sendFile('./public/index.html');
    // res.render('index', {books: getAll()})
   });

app.post('/detail', (req,res) => {
    res.type('text/html');
    console.log(req.body);
    res.end("Detail for " + req.body.year) 
    });

/*app.get('/detail', (req,res) => {
    res.type('text/html');
    console.log(req.query);
    res.end("Detail for " + req.query["year"]) // can also be req.query.year
    });*/

// send plain text response
app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('This is our about page');
   });
   
// define 404 handler
app.use((req,res) => { // 404 = default = use app.use and not app.get and put it last
    res.type('text/plain');
    res.status(404);
    res.send('404 - Ohoh... This page is nowhere to be found.');
   });


app.listen(app.get('port'), () => {
    console.log('Express started on port 3000');
   });