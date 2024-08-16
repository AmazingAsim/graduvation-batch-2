function middlewareFunction(req,res,next){
    console.log('blah blah');
    next();
}

function checkPassword(req,res,next){
    let password = req.params.password;

    if(password==123){
        next()
    }
    else{
        res.send('get out of here. wrong password')
    }
}

function commonMiddleware(req,res,next){
    console.log('I am everywhere')
    next()
}

module.exports = {middlewareFunction,checkPassword,commonMiddleware}