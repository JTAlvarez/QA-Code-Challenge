const fs = require('fs');
const prompt = require('prompt-sync')();


// File reading
let file1 = fs.readFileSync('File1.txt', 'utf8');


// User input
let userInput = prompt("Enter your sentence : ");

let r = /[,.\s]+/;
//let words = r.test(file1);


let match = r.test(userInput)
/* let file 1 = fs.read('File1.txt', utf8, function(err, data){
    console.log(file1); 
}
*/

console.log(file1);

console.log(match);


//RegExp.prototype.test()

//String.prototype.match()
