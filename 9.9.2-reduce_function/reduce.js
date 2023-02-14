// Reduce function defintion :
/* resulting in a single output value .
syntax : (callBackFunction(Accumulator,Current Value,Current Index ,Source Array){},InitialValue) */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let number = numbers.reduce(function (acc, current, index, array) {
  console.log(`Accumulator is : ${acc}`);
  console.log(`Current Value is : ${current}`);
  console.log(`Current index is : ${index}`);
  console.log(acc + current);
  console.log("########");
  return acc + current;
});
number;
