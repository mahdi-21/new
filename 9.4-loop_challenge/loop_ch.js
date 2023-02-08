let myAdmins = ["Ahmad", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Omar", "Othman", "Amany", "Samia"];

let adminCount = 0;

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] == "Stop") break;
  adminCount += 1;
}
document.write(`<div>We have ${adminCount} admins</div>`);
for (let j = 0; j < adminCount; j++) {
  document.write(`<div>`);
  document.write(`The Admin for team ${j + 1} is : ${myAdmins[j]}`);
  document.write(`</div>`);
  document.write(`<div>`);
  document.write(`<h3>Team Members :</h3>`);
  while (myAdmins[j] == "Ahmad") {
    let counter = 0;
    for (let k = 0; k < myEmployees.length; k++)
      if (myEmployees[k][0].charAt() == "A") {
        counter++;
        document.write(`<div>`);
        document.write(`<p>-${counter} ${myEmployees[k]}</p>`);
        document.write(`</div>`);
      }
    break;
  }
  while (myAdmins[j] == "Osama") {
    let counterO = 0;
    for (let k = 0; k < myEmployees.length; k++)
      if (myEmployees[k][0].charAt() == "O") {
        counterO++;
        document.write(`<div>`);
        document.write(`<p>-${counterO} ${myEmployees[k]}</p>`);
        document.write(`</div>`);
      }
    break;
  }
  while (myAdmins[j] == "Sayed") {
    let counterS = 0;
    for (let k = 0; k < myEmployees.length; k++)
      if (myEmployees[k][0].charAt() == "S") {
        counterS++;
        document.write(`<div>`);
        document.write(`<p>-${counterS} ${myEmployees[k]}</p>`);
        document.write(`</div>`);
      }
    break;
  }
  document.write(`</div>`);
}
// console.log(adminCount);

// console.log(typeof myAdmins[0][0].charAt());
