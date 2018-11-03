const fs = require('fs');

// Async Method not wait till the result exection, It's jumps to next execution unless and untill text will read,
fs.readFile(__dirname+'/dummy.txt', 'utf8', (err, res) => {
    if(err) throw err;
    console.log(res.toString());
});
console.log('This is Asynchronius');