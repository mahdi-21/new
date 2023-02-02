let a = 100;

// Normal Conditional Operartor:
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 to 40");
} else if (a > 40) {
  console.log(a + ">40");
} else console.log("unknown");

// Conditional Ternary Operator:
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log(a + ">40")
  : console.log("unkown");

let st = "Elzero Web School";

// The output must be good and the condition is st="34":

if ((st.length + st.length).toString().split().toString() === "34")
  console.log("good");
else console.log("bad");

// The output must be good and the condition is (st = "w") whatever we changed in 'st' the output stays good

if (
  st
    .charAt(Number(st.indexOf("W")))
    .toLowerCase()
    .toString() === "w"
)
  console.log("good");
else console.log("bad");

// The output must be good

if (st.length !== "string") console.log("good");

// The output must be good

if (typeof st.length === "number") console.log("good");

// The output must be good

if (st.substring(0, 6).toString().repeat(2) === "ElzeroElzero")
  console.log("good");
