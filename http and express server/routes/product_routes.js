let express = require('express')
let productRouter = express.Router();
let productData = require('../data/product.json')

productRouter.get('/',function(req,res){
    res.json(productData);
})

module.exports = productRouter