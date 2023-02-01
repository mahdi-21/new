let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 11 + 20 + 80 - 11 = 100
console.log(++a + -b + +c++ - -a++ + +a); // 11 + (-20) + 80 -10 + 10 = 94
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); //79 + 20 + 9*20 - 21*9 + 8 - 1 = 79 + 20 +180 -201 +8 -1 = 97

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// console.log(-d * e); //2000
// console.log(-d + -d - f + +g + g + +g); //173
