const bookrepo = require('../repo/bookRepo')
async function getAllBooks(req,res){
try {
    let data = await bookrepo.getAllBooks();
    console.log(data)
    res.send(data)
} catch (error) {
    console.log(error.message)
}
}

async function createBook(req,res) {
    try {
        let book = req.body;
        let result = await bookrepo.createBook(book);
            res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}


async function updateBook(req,res) {
    try {
        let book = req.body;
        let result = await bookrepo.updateBook(book.id,book)
            res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}


async function deleteBook(req,res) {
    try {
        let book = req.body;
        let result = await bookrepo.deleteBook(book.id)
            res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}


async function getBooksByAuthor(req,res) {
    try {
        let book = req.body;
        let result = await bookrepo.getBooksByAuthor(book.author)
            res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}





module.exports = {getAllBooks,createBook,getBooksByAuthor,updateBook,deleteBook}