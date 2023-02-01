let a = 100;
let b = 200.5;
let c = 1e2;
let d = 2.4;

console.log(Math.min(Math.trunc(a, b, c, d))); // 100

console.log(Math.pow(a, Math.trunc(d))); // 10.000

console.log(Math.round(d)); // 2
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(parseInt(d)); // 2

console.log((b / Math.ceil(d)).toFixed(2).toString());
console.log(Math.ceil(b / Math.ceil(d)));
