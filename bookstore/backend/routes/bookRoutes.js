let express = require('express')
let router = express.Router();
let bookController = require('../controller/bookController');
router.get('/',bookController.getAllBooks);
router.get('/getbyauthor',bookController.getBooksByAuthor);
router.post('/addbook',bookController.createBook);
router.post('/updatebook',bookController.updateBook);
router.post('/delete',bookController.deleteBook);
module.exports = router;