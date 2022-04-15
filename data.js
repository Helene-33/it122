// JavaScript array with at least 5 objects and 4 attributes per objects
// a getAll method to return all array items
// a getItem method that returns one single item
// export getAll and getItem methods from data.js module
// import data module into index.js module
// update default (home) route to return all array items on the web response
// create new detail route that returns data for a specific item on request


let books  = [
    { title : "Harry Potter and the Sorcerer's Stone", author : "J.K. Rowling", year : 1997, genres : ["Novel", "Children's literature", "Fantasy"] },
    { title : "1984", author : "George Orwell", year : 1949, genres : ["Science fiction", "Political fiction", "Social science fiction", "Dystopian fiction"] },
    { title : "The Hobbit", author : "J.R.R Tolkien", year : 1937, genres : ["Novel", "Children's literature", "Fantasy"] },
    { title : "Little Women", author : "Louisa May Alcott", year : 1868, genres : ["Novel", "Fiction", "Children's literature"] },
    { title : "Fahrenheit 451", author : "Ray Bradbury", year : 1953, genres : ["Novel", "Science fiction", "Dystopian fiction", "Political fiction"] },
]

export default books;

export const getItem = (value) => {
    return books.find((item) => {
        return item["title"] == value;
    })
}



//res.send(JSON.stringify(books))