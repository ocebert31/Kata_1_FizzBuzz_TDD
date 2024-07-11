const fizzBuzz = require('../src/fizzbuzz');

test('display hundred frist numbers', () => {
  expect(fizzBuzz().length).toBe(100);
});

test('3 become fizz', () => {
  expect(fizzBuzz()[3]).toBe('fizz');
});