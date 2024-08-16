let Friend = require('./friends')

let mongoose = require('mongoose');

let url = 'mongodb://localhost:27017/ghost'

mongoose.connect(url).then(()=>{console.log('database is connected')});


 async function createData(){
    try {
        let friend = new Friend({
            name:"Asim",
            email:"Asim@gmail.com"
        });

        await friend.save();
        console.log(friend);
    } catch (error) {
        console.log(error.message)
    }
}

async function getData (){
   let data =await Friend.find();
   console.log(data)
}

async function deleteData (){
   let data =await Friend.findByIdAndDelete('66af91da8783ba0d4601cab7');
   console.log(data)
}

async function postFriends() {
    let data  = await Friend.insertMany([
        {name:"Asim",email:"asim@gmail.com"},
        {name:"kasim",email:"kasim@gmail.com"},
        {name:"sahil",email:"sahil@gmail.com"}
    ]);

    console.log(data);
}

async function getByName(){
    let data  = await Friend.where({name:"Asim"});
    data.name = 'Asim sheikh'
    console.log(data)
}

async function updateById(){
    let data  = await Friend.where({name:"Asim"});

   let updatedData = await Friend.findByIdAndUpdate('66af99126da0a0a4dd693d59',{name:"Asim sheikh"})
    console.log(updatedData)
}

updateById()
