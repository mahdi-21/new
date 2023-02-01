/*Variables types:
1-string
2-number
3-array >> object
4-object
5-boolean
*/

console.log(typeof "Hello");
console.log(typeof 10);
console.log(typeof [1, 2, 3, 4, 5]);
console.log(typeof ["mahdi", "joli", "sam"]);
console.log(typeof { name: "mahdi", age: 22, country: "Sy" });
console.log(typeof true);
console.log(typeof false);

// JS is loosley typed language
var x = 5;
x = "mahdi";
console.log(x); // mahdi

//concatenation and difference in ecmaScript6 :
var a = "Hello";
var b = "my name is Mahdi";
var c = "nice to meet you";

console.log(a + "\n" + b + "\n" + c);

console.log(`${a} ${b} ${c}`);

// extra exapmle
var d = 7;
var e = 8;
var f = 3;
var Delta = f * f - 4 * (d * e);

console.log(`The Delta operator is : ${f * f} -(4*${d}*${e})`);
console.log(`The Delta equals: ${Delta}`);
