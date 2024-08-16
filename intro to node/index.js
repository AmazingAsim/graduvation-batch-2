
let fs = require('fs');
fs.appendFileSync('data.txt','hello world \n');
fs.appendFile('data.txt','welcome here',function(err){
    if(err) throw err;
    console.log('data saved successfully')
})