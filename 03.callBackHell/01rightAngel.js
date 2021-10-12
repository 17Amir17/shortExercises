function rightAngle(a, b, c) {
  return sqrt(a) + sqrt(b) === sqrt(c);
}

function sqrt(num) {
  return mult(num, num);
}

function mult(num1, num2) {
  return num1 * num2;
}

console.log(rightAngle(3, 4, 5));
console.log(rightAngle(4, 5, 6));
