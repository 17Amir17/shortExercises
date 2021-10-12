const colors = ["red", "green", "blue", "black", "white"];
let changes = 0;

function changeColor(time, color, callBack, reject) {
  //Can be called Max 3 times
  changes++;
  if (changes > 3) return reject(changes);
  //Get a random number between 1 - 10
  const rand = random(10);
  //The number is greater than 5, change background color for atleasta second
  if (rand > 5) {
    console.log("Change color");
    changeBackgroundColor(color);
    //Call the callback in a delay
    setTimeout(() => {
      if (callBack) {
        //Call callback with same params but new random color
        callBack(time, randomColor(), changeColor, reject);
      }
    }, time);
  } else {
    //Reject color change randomly
    if (reject) reject(changes);
  }
}

function changeBackgroundColor(color) {
  console.log("Changing to " + color);
  document.body.style.backgroundColor = color;
}

function printReject(callBackNum) {
  console.log(`Your request was rejected (callback ${callBackNum})`);
}

const random = (max) => {
  return Math.round(Math.random() * max);
};

const randomColor = () => {
  return colors[random(colors.length - 1)];
};

changeColor(1000, randomColor(), changeColor, printReject);
