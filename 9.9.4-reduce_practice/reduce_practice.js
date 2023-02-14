let sentence = ["mahdi", "sam", "ibraheem", "apple", "samsung", "three"];

let se = sentence.reduce(function (accumlutaor, current) {
  return accumlutaor.length < current.length ? current : accumlutaor;
});

console.log(se);

// Reduce + Filter(instead of the ready join function):

let removeChars = ["m", "@", "a", "@", "h", "@", "d", "i"];
let remove = removeChars
  .filter(function (element) {
    return element != "@";
  })
  .reduce(function (acc, curr) {
    return acc + curr;
  });
console.log(remove);
