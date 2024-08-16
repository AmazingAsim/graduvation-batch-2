require('dotenv').config()
let express = require('express');
let app = express();
let port = process.env.PORT || 8080
let {middlewareFunction,checkPassword,commonMiddleware} = require('./middlewares/dummy')

app.use(commonMiddleware);
app.use(express.urlencoded());
app.use(express.static('./views'))

app.get('/login/:password',checkPassword,function(req,res){
    res.send('welcome Asim')
})

app.post('/signup',function(req,res){
    let data = req.body;
    res.send(data)
})

app.listen(port,function(){console.log('server is running on port '+ port)})