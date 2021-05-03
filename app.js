const fs = require('fs');
const prompt = require('prompt-sync')();


// File reading
let file1 = fs.readFileSync('File1.txt', 'utf8');
// let file1Words = file1.split(",");
let file1Words = file1.split(",").map((e) => "(?=.*" + e + ")");
// console.log(file1Words);

// User input
let userInput = prompt("Enter your sentence : ");

// Word Matching
let r = new RegExp(file1Words.join(""), "gi");
let match = r.test(userInput);

// Output 
// console.log(file1);
// console.log(r);
console.log("your result is "+match);
