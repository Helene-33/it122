import { expect } from "chai";
import * as book from "../data.js";

//let result = {title : "Little Women", author : "Louisa May Alcott", year : 1868, genres : ["Novel", "Fiction", "Children's literature"]}


const getItem = (item) => {
    return {title : "Little Women", author : "Louisa May Alcott", year : 1868, genres : ["Novel", "Fiction", "Children's literature"]}
}


describe('test deep equality', () => {
    //get a book
    it('getItem returns correct the correct book', () => {
        let result = getItem("Little Women");
        expect(result).to.deep.equal(
            {title : "Little Women", author : "Louisa May Alcott", year : 1868, genres : ["Novel", "Fiction", "Children's literature"]}
        )   
    });
   
    it('error - the book was not found', () => {
        let result = book.getItem("failed");
        expect(result).to.be.undefined;
      });

      //add a book
      it('addItem creates succesfully a book', () => {
        let result = getItem(req.query.title);
        expect(result).to.deep.equal(
            {title: req.query.title, author : req.query.author, year : req.query.year, genres : req.query.genres}
        )   
    });
   
    it('error - we could not create this item', () => {
        let result = book.addItem("failed");
        expect(result).to.be.undefined;
      });


      //delete a book
    it('deleteItem removed the book', () => {
        let result = deleteItem("Little Women");
        expect(result).to.deep.equal(
            {title : "Little Women", author : "Louisa May Alcott", year : 1868, genres : ["Novel", "Fiction", "Children's literature"]}
        )   
    });
   
    it('error - the book was not deleted', () => {
        let result = book.deleteItem("failed");
        expect(result).to.be.undefined;
      });

});

