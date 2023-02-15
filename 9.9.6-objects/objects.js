let newObject = {
  car: "yellow",
  "name of": "maserati",
  age: 50,
  meth1: function () {
    return this.age;
  },
};
console.log(newObject);
console.log(newObject.meth1());

let anotherObject = new Object({
  motor: "Suzuki",
  "guitar color": "white blue",
});

console.log(anotherObject);

let finalObject = Object.assign(anotherObject, newObject);

newObject.age = 60;
console.log(newObject.meth1());
console.log(finalObject);
