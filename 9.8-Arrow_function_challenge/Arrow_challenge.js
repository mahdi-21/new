// Regular function :
let names1 = function (...name) {
  console.log("String " + "[" + name.join("], [") + "]" + " => done!");
};
names("mahdi", "sameer");

// Arrow function :
let names = (...name) => console.log(`String [${name.join("],[")}] => done !`);
names("mahdi", "sam");

// Arrow function :
let myNumbers1 = [20, 50, 10, 60];
let calc1 = (one, two, ...nums) => console.log(one + two + Number(nums));
console.log(calc(10, 20, 50)); //80

// Regular function :
let myNumbers = [20, 50, 10, 60];
let calc = function (one, two, ...nums) {
  return one + two + Number(...nums);
};
console.log(calc(10, 20, 50, 60, 90)); // 80

// sum operation using rest parameter :
let car = function (...num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += Number(num[i]);
  console.log(sum);
};
car(10, 50, 30);
