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

import cors from 'cors';
app.use ('/api', cors());

// each app.get blocks are handlers, like switch in previous index.js versions

// return all the books
app.get('/', (req,res) => {
    Book.find({}).lean()
        .then((books) => {
            res.render('home_react.ejs', {books: JSON.stringify(books)});
        })
        .catch(err => next(err));
    });

app.get('/api/books', (req,res,next) => { //get All using api
    Book.find((err,results) => {
        if (err || !results) return next(err);
        res.json(results);
    });
});


app.get('/detail', (req,res) => {
    Book.findOne({title: req.query.title}).lean()
        .then((book) => {
            res.render('detail', {result: book});
        })
        .catch(err => next(err));
    });

app.get('/api/books/detail/:title', (req,res,next) => { //get one book using api
    Book.findOne({title: req.params.title}).lean()
        .then((book) => {
            res.json(book)
        })
        .catch(err => next(err));
    });


app.get('/delete', (req,res) => {
    Book.deleteOne({title:req.query.title}, (err, result) => {
        if (err) return next(err);
        let deleteItem = result.result.n !== 0; // n will be 0 if no books are deleted
        Book.count((err, total) => {
            res.render('delete', {title: req.query.title, deleted: result.result.n !== 0, total: total } );    
            });
        });
    });

app.get('/api/books/delete/:title', (req,res) => { //delete one item using api
    Book.deleteOne({title:req.params.title}, (err, result) => {
        if (err) return next(err);
            console.log(result)
            res.json({"message": "Book Deleted Successfully!", result})    
        });
    });



app.post('/api/books/add', (req,res,next) => { //creating one item using api - uses POST instead of GET request
    if (!req.body.title) {
        let book = new Book ({title:req.body.title, author:req.body.author});
            book.add((err, addBook) => {
                if (err) return next(err);
                console.log(addBook)
                res.json({updated:0, addBook});
        });
    } else {
        Book.updateOne({title:req.body.title, author:req.body.author}, req.body, {upsert:true}, (err, addBook) => {
            if (err) return next(err);
                console.log(addBook);
                res.json({"message": "New Book Added.", addBook})    
        });
    }
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

