let job = "Developer";
let salary = 0;

// switch statement:

switch (job) {
  case "manager":
    salary = 5000;
    console.log(`The salary is : ${salary} $`);
    break;

  case "It":
  case "Support":
    salary = 6000;
    console.log(`The salary is : ${salary} $`);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(`The salary is : ${salary} $`);
    break;
  default:
    console.log("Unknown");
}

// if statement

let holidays = 3;
let money = 0;
if (holidays == 0) {
  money = 5000;
  console.log(console.log(`The salary is : ${money} $`));
} else if (holidays == 1 || holidays == 2) {
  money = 3000;
  console.log(console.log(`The salary is : ${money} $`));
} else {
  money = 2000;
  console.log(console.log(`The salary is : ${money} $`));
}
