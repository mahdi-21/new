let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

let a = my.slice(zero, counter).reverse();
let c = a.unshift("Ahmed");
console.log(a);

let b = my.slice(zero, counter).reverse();
let d = b.pop();
console.log(b);

console.log(b[0][0] + b[0][1] + b[1][2] + b[1][3] + b[1][4] + b[1][5]);

console.log(b[1][4] + b[1][5].toUpperCase());
