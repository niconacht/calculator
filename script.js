//basic calc operations
function add (a,b) {
  return a+b;
}

function subtract (a,b){
  return a-b;
}

function multiply (a,b){
  return a*b;
}

function divide (a,b){
  return a/b;
}

//choose mathematical operation depending on operator
function operate(a,b, operator) {
    if (operator ===plus) {
        return add(a,b);
    }
    else if (operator === minus){
        return subtract(a,b);
    }
    else if (operator ===mult) {
        return multiply(a,b);
    }
    else if (operator ===divid){
        return divide(a,b);
    }
}

// //which operator has been pressed
// let operator = function(){
//
// }
//
//
// //mathematical operation depending on operator
// switch (operator){
//     case "+":
//         add(a,b);
//         break;
//     case "-":
//         subtract(a,b);
//         break;
//     case "*":
//         multiply(a,b);
//         break;
//     case "/":
//         divide(a,b);
// }
