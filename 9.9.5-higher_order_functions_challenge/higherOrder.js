let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,2";

let challenge = myString
  .split("_")
  .join(" ")
  .split(",")
  .filter(function (el) {
    return isNaN(parseInt(el));
  })
  .map(function (el) {
    return el.length > 1 ? el.charAt(0) : el;
  })
  .map(function (el) {
    return el === "w" ? el.toUpperCase() : el === "s" ? el.toUpperCase() : el;
  })
  .reduce(function (acc, curr) {
    return acc + curr;
  });
console.log(challenge);

// another soloution :
let challenge2 = myString
  .split(",")
  .join("")
  .split("")
  .filter(function (el) {
    return isNaN(parseInt(el));
  })
  .map(function (el) {
    return el === "w" ? el.toUpperCase() : el === "s" ? el.toUpperCase() : el;
  })
  .reduce(function (acc, curr) {
    return acc === curr ? acc : acc + curr;
  })
  .split("_")
  .join(" ");
console.log(challenge);
