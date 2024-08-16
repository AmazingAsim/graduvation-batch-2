require('dotenv').config();
let dbConnection = require('./config/data')
let express = require('express');
let cors = require('cors')
let port = process.env.PORT || 8080
let app = express();
dbConnection();
app.use(cors({
    origin:'*',
    methods:['GET','POST','DELETE','PUT','PATCH'],
}))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('./views'))
let bookRouter = require('./routes/bookRoutes')

app.use('/books',bookRouter)


app.listen(port,function(){console.log('server is running on port '+port)})


// store the books
// add the books 
// remove the books 
// filter the books
// edit the books


