// Higher-order functions

function add(num1, num2) {
  return num1 + num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}

const devide = (num1, num2) => {
  return num1 / num2;
}

const calculator = (num1, num2, operator) => {
  return operator(num1, num2)
}

console.log(calculator(4, 5, multiply));