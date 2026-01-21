console.log("hello gulab hussain");
const fs = require("fs");

let a=5;
let b=9;

let sum = a +b;
let product = a*b;

let data =`sum=${sum}\nproduct=${product}`;
console.log(data);

fs.writeFile("output.txt", data , (err) => {
    if (err) throw err;
    console.log("data written to file");

}); 
