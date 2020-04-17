var buttons = document.querySelectorAll("button").length;
var valString = "";
var largeDisp = document.getElementById("result");
var smallDisp = document.getElementById("process");
for (let i = 0; i < buttons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", addValToString)
}
function addValToString(e){
  const val = e.target.value;

  if (val !== "=" && val !== "clear"){
  valString+=val;
  }

  smallDisp.textContent = valString;

  if (val === "=") {
    let result = parse(valString);
    smallDisp.textContent = "";
    largeDisp.textContent= result;
  }

  if (val == "clear") {
    valString = "";
        smallDisp.textContent = "";
        largeDisp.textContent = "0";
  }
}

//var reset = document.getElementById("clear").addEventListener("click", )



function parse(str) {
  return Function(`'use strict'; return (${str})`)()
}

// function resetDisp(e){
//   if(e.target.id === "clear"){
//     valString = "";
//     smallDisp.textContent = "";
//     largeDisp.textContent = "0";
//   }
// }




// //basic calc operations
// function add (a,b) {
//   return a+b;
// }
// function subtract (a,b){
//   return a-b;
// }
//
// function multiply (a,b){
//   return a*b;
// }
//
// function divide (a,b){
//   return a/b;
// }
//
// //choose mathematical operation depending on operator
// function operate(a,b, operator) {
//     if (operator ===plus) {
//         return add(a,b);
//     }
//     else if (operator === minus){
//         return subtract(a,b);
//     }
//     else if (operator ===mult) {
//         return multiply(a,b);
//     }
//     else if (operator ===divide){
//         return divide(a,b);
//     }
// }
