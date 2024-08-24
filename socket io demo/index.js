let express = require('express');
let app = express();
let http = require('http');
let server = http.createServer(app);
let socketIo = require('socket.io');
let io = socketIo(server);

app.use(express.static('./views'));

io.on('connection',function(socket){
    console.log('a user is connected');
    socket.on('disconnect',function(){
        console.log('a user is disconnected');
    });

    socket.on('register',function(userId){
        socket.join(userId);
        console.log(`A user joined with Id ${userId}`);
    })

    socket.on('message',function(msg){
        console.log(msg);
        io.emit('message','hello there I am backend server');
    });

    socket.on('pm',function(msg,to){
        io.to(to).emit('pm',msg);
    })

})

server.listen(8080,function(){console.log('server is runnig on port 8080')});