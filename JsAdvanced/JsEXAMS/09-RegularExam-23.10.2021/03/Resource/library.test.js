let library = require('./library')
let {assert} = require('chai')

describe("Tests libray", function() {
    describe(" test calcPriceOfBook …", function() {
        it("first if …", function() {
            assert.throw(() => library.calcPriceOfBook(1, 1), Error, "Invalid input")
            assert.throw(() => library.calcPriceOfBook("str", "str"), Error, "Invalid input")
            assert.throw(() => library.calcPriceOfBook(1, "str"), Error, "Invalid input")
            assert.throw(() => library.calcPriceOfBook([], 1), Error, "Invalid input")
        });
        it("else case …", function() {
            assert.equal(library.calcPriceOfBook('book', 1980),`Price of book is 10.00`)
            assert.equal(library.calcPriceOfBook("book", 1979), `Price of book is 10.00`)
        });
        it("else case …", function() {
            assert.equal(library.calcPriceOfBook('book', 1981),`Price of book is 20.00`)
            assert.equal(library.calcPriceOfBook("book", 1982), `Price of book is 20.00`)
        });
     });



     describe(" test findBook …", function() {
        it("first if …", function() {
            assert.throw(() => library.findBook([], 'str'), Error, "No books currently available")
            // assert.throw(() => library.calcPriceOfBook("str", "str"), Error, "Invalid input")
        });
        it("else if case …", function() {
            assert.equal(library.findBook(['book'], 'book'),"We found the book you want.")
            // assert.equal(library.findBook("book", 1979), `Price of book is 10.00`)
        });
        it("else case …", function() {
            assert.equal(library.findBook(['book'], 'BB'),"The book you are looking for is not here!")
            // assert.equal(library.findBook("book", 1982), `Price of book is 20.00`)
        });
     });





     describe(" test arrangeTheBooks …", function() {
        it("first if …", function() {
            assert.throw(() => library.arrangeTheBooks('str'), Error, "Invalid input")
            assert.throw(() => library.arrangeTheBooks(-1), Error, "Invalid input")
            // assert.throw(() => library.calcPriceOfBook("str", "str"), Error, "Invalid input")
        });
        it("else if case …", function() {
            assert.equal(library.arrangeTheBooks(1),"Great job, the books are arranged.")
            assert.equal(library.arrangeTheBooks(40),"Great job, the books are arranged.")
            // assert.equal(library.findBook("book", 1979), `Price of book is 10.00`)
        });
        it("else case …", function() {
            assert.equal(library.arrangeTheBooks(50),"Insufficient space, more shelves need to be purchased.")
            // assert.equal(library.findBook("book", 1982), `Price of book is 20.00`)
        });
        it("else case …", function() {
            assert.throw(() =>library.arrangeTheBooks(-1), Error, "Invalid input")
            // assert.equal(library.findBook("book", 1982), `Price of book is 20.00`)
        });

        it("else case …", function() {
            assert.equal(library.arrangeTheBooks(0),"Great job, the books are arranged.")
            // assert.equal(library.findBook("book", 1982), `Price of book is 20.00`)
        });
     });
     // TODO: …
});
