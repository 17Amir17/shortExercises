const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;
const equals = (n1, n2, callback) => callback(n1, n2);

export default {
  add,
  sub,
  multiply,
  divide,
  equals,
};
