const fizzBuzz = require('../src/fizzbuzz');

test('display hundred frist numbers', () => {
  expect(fizzBuzz().length).toBe(100);
});

test('3 become fizz', () => {
  expect(fizzBuzz()[3]).toBe('fizz');
});

test('6 become fizz', () => {
  expect(fizzBuzz()[6]).toBe('fizz');
});

test('5 become buzz', () => {
  expect(fizzBuzz()[5]).toBe('buzz');
});

test('10 become buzz', () => {
  expect(fizzBuzz()[10]).toBe('buzz');
});

test('15 become fizzbuzz', () => {
  expect(fizzBuzz()[15]).toBe('fizzbuzz');
});

test('30 become fizzbuzz', () => {
  expect(fizzBuzz()[30]).toBe('fizzbuzz');
});