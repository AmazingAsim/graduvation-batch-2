let express  = require('express')
let app = express()
let uploads = require('./media')

app.use(express.static('./views'));

app.post('/uploadProfile',uploads.single('profile'),function(req,res){
   let file = req.file;
   if(!file){
      res.send('please select a file!')
   }
   res.send('file uploaded successfully')
})

app.listen(8080,function(){
    console.log('server is running on port 8080')
})