const mongoose = require('mongoose')

let booksSchema = mongoose.Schema({
    book_name:String,
    book_price:Number,
    author:String,
    edition:Number,
    image:String
})

let bookModel = mongoose.model('books',booksSchema);

module.exports = bookModel;