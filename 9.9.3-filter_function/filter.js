// Filter function :
/* syntax: (callBackfunction(element,index,array)) 
 it depends on a condition, if it was false it will be filtered */

let ignoreBoolean = "M2a3hd20i";
let ignore = ignoreBoolean
  .split("")
  .filter(function (x) {
    return isNaN(parseInt(x));
  })
  .join("");

console.log(ignore);
