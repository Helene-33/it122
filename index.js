import http from 'http';
import {getAll, getItem, addItem, deleteItem} from './data.js';
import { Book } from './models/Books.js';
import {parse} from "querystring";
import express from 'express';
import req from 'express/lib/request.js';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); // Parse URL-encoded bodies
app.use(express.json()); // parse JSON bodies
app.set('view engine', 'ejs');

// each app.get blocks are handlers, like switch in previous index.js versions

// return all the books
app.get('/', (req,res) => {
    Book.find({}).lean()
        .then((books) => {
            res.render('home.ejs', {books});
        })
        .catch(err => next(err));
    });

app.get('/detail', (req,res) => {
    Book.findOne({title: req.query.title}).lean()
        .then((book) => {
            res.render('detail', {result: book});
        })
        .catch(err => next(err));
    });

app.get('/delete', (req,res) => {
    Book.remove({title:req.query.title}, (err, result) => {
        if (err) return next(err);
        let deleteItem = result.result.n !== 0; // n will be 0 if no books are deleted
        Book.count((err, total) => {
            res.render('delete', {title: req.query.title, deleted: result.result.n !== 0, total: total } );    
            });
        });
    });

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

