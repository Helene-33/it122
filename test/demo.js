import { expect } from "chai";
import {getItem, addItem, deleteItem} from '../data.js';

describe("Book", () => {

    it('returns the correct book', () => { //test getting an item succeded
        let result = getItem('Little Women');
        expect(result).to.deep.equal(
            {title : "Little Women", author : "Louisa May Alcott", year : 1868, genres: ["Novel", "Fiction", "Children's literature"]});
    })

    it('this book is not in our database', () => { //test getting an item failed
        let result = getItem('Pride and Prejudice');
        expect(result).to.be.undefined;
    })

    it('a new book was succesfully added!', () => { //test adding an item succeded
        let result = addItem(
            {title: 'And Then There Were None', author: 'Agatha Christie', year: 1939, genres: ["Novel", "Mystery"]});
        expect(result).to.be.true;
    })

    it('we already have this book', () => { //test adding an item failed
        let result = addItem(
            {title : "Little Women", author : "Louisa May Alcott", year : 1868, genres: ["Novel", "Fiction", "Children's literature"]});
        expect(result).to.be.false;
    })

    it('this book was succesfully deleted', () => { //test deleting an item succeded
        let result = deleteItem("Little Women");
        expect(result).to.be.true;
    })

    it('we could not delete this book', () => { //test deleting an item failed
        let result = deleteItem("To Kill a Mockingbird");
        expect(result).to.be.false;
    })

})



