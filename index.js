const fs = require('fs');
const prompt = require('prompt-sync')();


// File reading
let file1 = fs.readFileSync('File1.txt', 'utf8');
let file1Words = file1.split(",");
console.log(file1Words);

// User input
let userInput = prompt("Enter your sentence : ");


/*let words = userInput.split(",")
console.log(words);
*/

// Word Matching
 let r = /(?=.*file1Words[0])(?=.*file1Words[1])/i
// let r = `/[${file1Words}]/`;
// let r = new RegExp(file1Words,'g');
//let words = r.test(file1);


let match = r.test(userInput)

// Output 
console.log(file1);

console.log(match);

/* let file 1 = fs.read('File1.txt', utf8, function(err, data){
    console.log(file1); 
}
*/

//RegExp.prototype.test()

//String.prototype.match()
