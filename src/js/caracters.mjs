import { equalButtonClicked } from "./operations.mjs";
import {
  setResult,
  clearScreen,
  alterScreen,
  clearLastCaracter,
} from "./screen.mjs";

const CARACTERS = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "00",
  "/",
  "*",
  "+",
  "-",
  "=",
  "C",
  "CE",
];

export function createCaraters() {
  CARACTERS.forEach((caracter) => {
    let div = document.createElement("div");
    div.classList.add("digit");
    div.innerHTML = caracter;
    document.getElementById("digit-area").appendChild(div);
  });

  detectClickedCaracters();
}

function detectClickedCaracters() {
  const digits = document.getElementsByClassName("digit");
  for (const digit of digits) {
    digit.addEventListener("click", (evt) => {
      switch (evt.target.innerHTML) {
        case "=":
          setResult(equalButtonClicked());
          break;

        case "C":
          clearLastCaracter();
          break;

        case "CE":
          clearScreen();
          break;

        default:
          alterScreen(evt.target.innerHTML);
          break;
      }
    });
  }
}
