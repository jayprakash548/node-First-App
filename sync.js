const fs = require('fs');

try{
    const data = fs.readFileSync(__dirname+'/dummy.txt', 'utf8');
    console.log(data.toString());
}catch(e){
    console.log(e);
}
console.log('This statement will be execute after the execution of readdirsync');