// 100 premiers nombres
// multiple 3 => fizz
// multiple 5 => buzz
// multiple 3 ET 5 => fizzbuzz

function fizzBuzz() {
  const numbers = [];
  for (let i = 0; i < 100; i ++ ) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.push('fizzbuzz');
    } else if (i % 3 === 0) {
      numbers.push('fizz');
    } else if (i % 5 === 0) {
      numbers.push('buzz');
    } else {
      numbers.push(i);
    }
  }
  return numbers;
}

module.exports = fizzBuzz;