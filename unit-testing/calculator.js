function sum(a, b) {
  const result = a + b;
  return result;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a-b
}

function multiply(a, b) {
  return a*b
}
// Im Browser/in Javascript: export default ...
// Wir sind hier aber in NodeJS!
module.exports.sum = sum;
module.exports.divide = divide;
module.exports.subract = subtract;
module.exports.multiply =multiply;
