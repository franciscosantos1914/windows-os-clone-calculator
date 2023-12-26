const caracters = ["/", "*", "+", "-"];
const screen = document.getElementById("expression");

const operations = {
  ["+"]: (num1, num2) => Number(num1) + Number(num2),
  ["-"]: (num1, num2) => Number(num1) - Number(num2),
  ["*"]: (num1, num2) => Number(num1) * Number(num2),
  ["/"]: (num1, num2) => Number(num1) / Number(num2),
};

export function equalButtonClicked() {
  if (/(\/|\*|\+|\-)/gi.test(screen.innerHTML)) {
    return calculate(screen.innerHTML);
  }
  return;
}

function calculate(params) {
  let result = "";
  let expression = String(params);
  for (const caracter of caracters) {
    let splitted = expression.split(caracter);
    if (splitted.length > 1) {
      let first = Number(splitted[0]);
      let second = Number(splitted[1]);
      if (isNaN(first)) {
        result = operations[caracter](calculate(splitted[0]), second);
      } else if (isNaN(second)) {
        result = operations[caracter](first, calculate(splitted[1]));
      } else {
        result = operations[caracter](first, second);
      }
    }
  }
  return result;
}
