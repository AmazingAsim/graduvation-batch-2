// create a server
let http = require('http');

let server = http.createServer(function(req,res){
    let url = req.url;
    if(url=='/'){
        res.end('welcome to the dashboard')
    }
    else if(url=='/users'){
        res.end('welcome the the users screen')
    }
    else{
        res.end('404 not found')
    }
});

server.listen(8080,function(){console.log('server is runnig on port 8080')})
