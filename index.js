import http from 'http';
import {getAll, getItem} from './data.js';
import {parse} from "querystring";
import express from 'express';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); // Parse URL-encoded bodies
app.use(express.json()); // parse JSON bodies
app.set('view engine', 'ejs');

// each app.get blocks are handlers, like switch in previous index.js versions
// send static file as response
app.get('/', (req,res) => {
    res.render('home', {getAll});
        });


/*app.get('/', (req,res) => { 
    res.render('home', { 
       books: [ {title : "Harry Potter and the Sorcerer's Stone", author : "J.K. Rowling"},
            {title : "1984", author : "George Orwell"},
            {title : "The Hobbit", author : "J.R.R Tolkien"},
            {title : "Little Women", author : "Louisa May Alcott"},
            {title : "Fahrenheit 451", author : "Ray Bradbury"}
        ]});
    });*/

app.get('/detail', (req,res) => {
    let result = getItem(req.query.title);
    res.render('detail', {title: req.query.title, result: result});
    console.log(req.query);
    });

/*app.get('/detail', (req,res) => {
    console.log(req.query);
    res.render('detail');
    res.end("Detail for " + req.query.title)
    });*/

// send plain text response
app.get('/about', (req,res) => {
    res.render('about.ejs')
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

