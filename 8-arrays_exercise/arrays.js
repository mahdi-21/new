let a = ["mahdi", "fadi", "abdullah"];
let b = ["sandouk", "alashhab", "najjar"];

function sort() {
  let c = [];
  for (var i = 0; i < a.length; i++) c.push(a[i], b[i]);
  console.log(c);
}
console.log(sort());
