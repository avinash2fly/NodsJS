var fs = require("fs");

//without callback
var data  = fs.readFileSync('input.txt');

console.log(data.toString());

console.log('program ended');

//with callback
fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log('program ended2');
