import myMath from './math.js';

const screen = document.querySelector('.result');

const mathCallbacks = {
  '+': myMath.add,
  '-': myMath.sub,
  '/': myMath.divide,
  '%': myMath.module,
  X: myMath.multiply,
};
let mathFunction;

const deleteLastChar = () => {
  if (screen.value !== '') {
    if (screen.value[screen.value.length - 1]) mathFunction = undefined;
    screen.value = screen.value.slice(0, -1);
  } else mathFunction = undefined;
};

const addValue = (val) => {
  screen.value += val;
};

const setScreenValue = (value) => {
  screen.value = value;
  mathFunction = undefined;
};

const getNumbers = () => {
  try {
    const numbers = screen.value.split(` ${mathFunction} `);
    numbers[0] = Number(numbers[0].replace(/\s/g, ''));
    numbers[1] = Number(numbers[1].replace(/\s/g, ''));
    return numbers;
  } catch (error) {
    return false;
  }
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
      setScreenValue('Error');
    }
  }
  setScreenValue('Error');
};

export function handleButtonClicked(btnVal) {
  switch (btnVal) {
    case 'Del':
      deleteLastChar();
      break;
    case '=':
      calculate();
      break;
    case 'X':
    case '/':
    case '+':
    case '%':
      if (mathFunction) calculate();
      mathFunction = btnVal;
      addValue(` ${btnVal} `);
      break;
    case '-':
      if (mathFunction && getNumbers()[1]) calculate();
      if (mathFunction || (!mathFunction && screen.value === '')) {
        addValue(btnVal);
      } else {
        addValue(` ${btnVal} `);
        mathFunction = btnVal;
      }
      break;
    default:
      addValue(btnVal);
      break;
  }
}
