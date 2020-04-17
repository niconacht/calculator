var buttons = document.querySelectorAll("button").length;
var valString = "";
var largeDisp = document.getElementById("result");
var smallDisp = document.getElementById("calculation");
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

//Create a function frojm string with global Function constructor, quick and dirty evaluation of the calculation
function parse(str) {
  return Function(`'use strict'; return (${str})`)()
}
