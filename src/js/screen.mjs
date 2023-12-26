const caracters = ["/", "*", "+", "-", "="];
const resultDiv = document.getElementById("result");
const screen = document.getElementById("expression");
let fontSize = 50;

export function alterScreen(digitedValue) {
  if (
    isFirstCaracterZero(digitedValue) ||
    isFirstCaracterASign(digitedValue) ||
    isLastCaracterAnOperator(digitedValue)
  ) {
    return;
  }
  if (alterFontSize() === "stop") return;
  screen.innerHTML += digitedValue;
}

function alterFontSize() {
  let length = screen.innerHTML.trim().length;
  if (fontSize <= 20) return "stop";
  if (length >= 9 && length % 3 === 0) {
    fontSize -= 10;
    screen.style.fontSize = `${fontSize}px`;
  }
  return "continue";
}

function isFirstCaracterZero(digitedValue) {
  if (
    (digitedValue == 0 || digitedValue == "00") &&
    (screen.innerHTML == 0 || screen.innerHTML == "00")
  ) {
    screen.innerHTML = 0;
    return true;
  }
  if (screen.innerHTML == 0 || screen.innerHTML == "00") {
    screen.innerHTML = "";
  }
  return false;
}

function isFirstCaracterASign(digitedValue) {
  if (
    (screen.innerHTML == 0 || screen.innerHTML == "00") &&
    caracters.includes(digitedValue)
  ) {
    if (screen.innerHTML.trim().length === 0) {
      screen.innerHTML = 0;
    }
    return true;
  }
  return false;
}

function isLastCaracterAnOperator(digitedValue) {
  let text = screen.innerHTML;
  if (text.length > 0) {
    let lastCaracter = text[text.length - 1];
    if (caracters.includes(lastCaracter) && caracters.includes(digitedValue)) {
      return true;
    }
  }
  return false;
}

export function setResult(result) {
  if (result) {
    resultDiv.innerHTML = result;
  }
}

export function clearScreen() {
  screen.innerHTML = 0;
  resultDiv.innerHTML = "";
  screen.style.fontSize = "50px";
}

export function clearLastCaracter() {
  screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
  resultDiv.innerHTML = "";
  if (screen.innerHTML.trim().length === 0) {
    screen.innerHTML = 0;
  }
}
