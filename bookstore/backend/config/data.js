let mongoose = require('mongoose');

function dbConnection(){
    mongoose.connect('mongodb+srv://AmazingAsim:AmazingAsim3000@amazingasim.tqrgz.mongodb.net/books?retryWrites=true&w=majority&appName=AmazingAsim').then(res=>{console.log('db is connected')})
}

module.exports = dbConnection;