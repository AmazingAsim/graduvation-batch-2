let mongoose = require('mongoose');

let friendSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true}
});

let friendModal = mongoose.model('friends',friendSchema);

module.exports = friendModal;