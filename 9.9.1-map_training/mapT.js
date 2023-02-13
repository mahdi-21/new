let swappingCase = "maHdI";
let invertNumber = [1, 32, -6, -43, 54, 70, -4];
let ignoreBoolean = "M2a3hd20i";

let swap = swappingCase
  .split("")
  .map(function (x) {
    return x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase();
  })
  .join("");

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
