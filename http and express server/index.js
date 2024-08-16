let express = require('express');
const userRouter = require('./routes/user_routes');
const productRouter = require('./routes/product_routes');

let app = express();


app.use(express.static('./views'));

app.use('/users',userRouter);
app.use('/products',productRouter)

app.get('*',function(req,res){
    res.send(`<h3 style="text-align:center;">404 not found</h3>`)
})

app.listen(8080,function(){console.log('server is running on port 8080')})