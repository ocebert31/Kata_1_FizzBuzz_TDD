// 100 premiers nombres
// multiple 3 => fizz
// multiple 5 => buzz
// multiple 3 ET 5 => fizzbuzz

function allFizzBuzz() {
  const numbers = [];
  for (let i = 0; i < 100; i ++ ) {
    fizzBuzz(numbers, i);
    fizz(numbers, i);
    buzz(numbers, i);
    defaultNumber(numbers, i);
  }
  return numbers;
}

function fizzBuzz(numbers, i) {
  if (i % 3 === 0 && i % 5 === 0) {
    numbers.push('fizzbuzz');
  }
}

function fizz(numbers, i) {
  if (i % 3 === 0 && i % 5 !== 0) {
    numbers.push('fizz');
  }
}

function buzz(numbers, i) {
  if (i % 5 === 0 && i % 3 !== 0) {
    numbers.push('buzz');
  }
}

function defaultNumber(numbers, i) {
  if (i % 5 !== 0 && i % 3 !== 0) {
    numbers.push(i);
  }
}

module.exports = allFizzBuzz;