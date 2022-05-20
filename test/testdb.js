import { Book } from "../data.js";

// return all records
Book.find({}).lean()
  .then((books) => {
    console.log(books);
  })
  .catch(err => next(err));