// get elements and assign them to variables :
let myFirstUser = document.getElementById("first");
let myLastUser = document.getElementById("last");

// anonymous function on click :
document.forms[0].onsubmit = function (e) {
  let firstValid = false;
  let lastValid = false;
  // first's condition :
  if (myFirstUser.value !== "" && myFirstUser.value.length <= 10) {
    firstValid = true;
  }
  // last's condition :
  if (myLastUser.value !== "" && myFirstUser.value.length <= 10) {
    lastValid = true;
  }
  // prevent default :
  if (firstValid === false || lastValid === false) {
    e.preventDefault();
  }
};
// prevent link from access
document.links[0].onclick = function (e) {
  e.preventDefault();
  console.log(e);
};
