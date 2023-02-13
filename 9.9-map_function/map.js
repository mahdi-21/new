/*map higher order function :
 map function accepts a function as a parameter and can return a function 
 it is common used when we want to edit an array , map can edit an array and return new edited one
 here's an example : */

let arr = [1, 2, 3, 4, 5, 6, 7];
let fun = arr.map(function (el, i, ar) {
  return `index : ${i} , element : ${el + el}`;
}, 10);
console.log(fun);

// Arrow :
let fun2 = arr.map((element) => element + element);
console.log(fun);

// external function :
let multi2 = (el) => el * el;

let multiply = arr.map(multi2);
console.log(multiply);
