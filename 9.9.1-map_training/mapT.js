let sawppingCase = "maHdI";
let invertNumber = [1, 32, -6, -43, 54, 70, -4];
let ignoreBoolean = "M2a3hd20i";

let swap = sawppingCase
  .split()
  .map(function (x) {
    if (x === x.toUpperCase()) x.toLocaleLowerCase();
    else x.toUpperCase();
    return x;
  })
  .join();

console.log(swap);

let invert = invertNumber.map(function (x) {
  return -x;
});
console.log(invert);

let ignore = ignoreBoolean
  .split("")
  .map(function (x) {
    return isNaN(parseInt(x)) ? x : "";
  })
  .join("");

console.log(ignore);
