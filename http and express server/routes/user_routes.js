let user  = [
    {
        name:'',email:'',password:""
    },
    {
        name:'',email:'',password:""
    },
    {
        name:'',email:'',password:""
    }
];
let express  = require('express')
let userRouter = express.Router();

userRouter.get('/',function(req,res){
    res.json(user)
})


module.exports = userRouter;