// 100 premiers nombres
// multiple 3 => fizz
// multiple 5 => buzz
// multiple 3 ET 5 => fizzbuzz

function fizzBuzz() {
  const numbers = [];
  for (let i = 0; i < 100; i ++ ) {
    numbers.push(i);
  }
  return numbers;
}

module.exports = fizzBuzz;