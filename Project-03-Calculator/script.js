// we can use the values in strings as a parameter
// console.log = to a function
let calculation = localStorage.getItem("calculation") || "";
function showResult(test) {
  const calculateResultElem = document.querySelector(".js-calculate-result");
  if (test === "|") {
    calculateResultElem.innerHTML = `${calculation + test}`;
  } else if (test === undefined) {
    calculateResultElem.innerHTML = `${calculation}`;
  }
}
showResult();
function calculate(parameter) {
  if (parameter !== "=") {
    calculation += parameter;
  } else {
    //this will convert a string mathh to a number
    calculation = String(eval(calculation));
  }

  localStorage.setItem("calculation", calculation);
  showResult();
}
