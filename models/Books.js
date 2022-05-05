import mongoose from 'mongoose';
import {connectionString} from '../credentials.js';
const { Schema } = mongoose;


mongoose.connect(connectionString, {
    dbName: 'sccprojects',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const bookSchema = new Schema({
 title: { type: String, required: true },
 author: String,
 year: String,
 genres: Array
});

export const Book = mongoose.model('Book', bookSchema, 'books');