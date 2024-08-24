let socket = io();

let userId = prompt('Enter your name');
socket.emit('register',userId);


function fire(){
    let msg = document.getElementById('message').value;
    let user = prompt('write a name to whom you want to send message');
    socket.emit('pm',msg,user);
}

socket.on('pm',(msg)=>{
    console.log(msg)
    let messageBox = document.getElementById('messagebox');
    let p = document.createElement('p');
    p.innerText = msg;
    messageBox.append(p);
})


function send(){
    socket.emit('message','hello there I am frontend server');
}

