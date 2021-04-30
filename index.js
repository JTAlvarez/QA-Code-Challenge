let fs = require('fs');

let file1 = fs.readFileSync('File1.txt', 'utf8');

let r = /[,.\s]+/;
let words = r.test(file1);
/* let file 1 = fs.read('File1.txt', utf8, function(err, data){
    console.log(file1); 
}
*/

console.log(file1);

console.log(words);


//RegExp.prototype.test()

//String.prototype.match()
