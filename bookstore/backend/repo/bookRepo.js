const bookModel = require('../modal/bookModel');


async function  getAllBooks() {
   try {
    let result = await bookModel.find();
    return result;
   } catch (error) {
      console.log(error.message)
   }
}


async function createBook(book) {
   try {
    let newBook  = new bookModel(book);
    await newBook.save();
    return newBook;
   } catch (error) {
    console.log(error.message)
   }
}


async function updateBook(id,body) {
     try {
        let result =await bookModel.findByIdAndUpdate(id,body,{new:true})
        return result
     } catch (error) {
        console.log(error.message)
     }
}


async function deleteBook(id) {
   try {
      let result = await bookModel.findByIdAndDelete(id)
      return result
   } catch (error) {
      console.log(error.message)
   }
}

async function getBooksByAuthor(author) {
   try {
      let result = await bookModel.find({author:author})
      return result
   } catch (error) {
      console.log(error.message)
   }
}

module.exports = {getAllBooks,createBook,getBooksByAuthor,deleteBook,updateBook};