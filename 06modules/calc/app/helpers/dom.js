import myMath from "./math.js";

const screen = document.querySelector(".result");

const mathCallbacks = {
  "+": myMath.add,
  "-": myMath.sub,
  "/": myMath.divide,
  X: myMath.multiply,
};
let mathFunction;

export function handleButtonClicked(btnVal) {
  switch (btnVal) {
    case "Del":
      deleteLastChar();
      break;
    case "=":
      calculate();
      break;
    case "X":
    case "+":
    case "/":
    case "-":
      //   if (mathFunction) calculate();
      mathFunction = btnVal;
      addValue(` ${btnVal} `);
      break;
    default:
      addValue(btnVal);
      break;
  }
}

const deleteLastChar = () => {
  if (screen.value != "") screen.value = screen.value.slice(0, -1);
};

const addValue = (val) => {
  screen.value += val;
};

const setScreenValue = (value) => {
  screen.value = value;
  mathFunction = undefined;
};

const getNumbers = () => {
  const numbers = screen.value.split(` ${mathFunction} `);
  numbers[0] = Number(numbers[0].replace(/\s/g, ""));
  numbers[1] = Number(numbers[1].replace(/\s/g, ""));
  return numbers;
};

const calculate = () => {
  const callback = mathCallbacks[mathFunction];
  if (callback) {
    try {
      const numbers = getNumbers();
      console.log(numbers);
      const result = myMath.equals(numbers[0], numbers[1], callback);
      setScreenValue(result);
      return;
    } catch (error) {
      setScreenValue("Error");
    }
  }
  setScreenValue("Error");
};
