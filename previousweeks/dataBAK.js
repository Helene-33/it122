let books  = [
    { title : "Harry Potter and the Sorcerer's Stone", author : "J.K. Rowling", year : 1997, genres : ["Novel", "Children's literature", "Fantasy"] },
    { title : "1984", author : "George Orwell", year : 1949, genres : ["Science fiction", "Political fiction", "Social science fiction", "Dystopian fiction"] },
    { title : "The Hobbit", author : "J.R.R Tolkien", year : 1937, genres : ["Novel", "Children's literature", "Fantasy"] },
    { title : "Little Women", author : "Louisa May Alcott", year : 1868, genres : ["Novel", "Fiction", "Children's literature"] },
    { title : "Fahrenheit 451", author : "Ray Bradbury", year : 1953, genres : ["Novel", "Science fiction", "Dystopian fiction", "Political fiction"] },
]

const getAll = () => {
    return books;
}

const getItem = (title) => {
    return books.find((book) => { // . filter pulls all the ones matching the year / .find only takes the first one out
        return book.title === title;
    });
} 

export {getAll, getItem};