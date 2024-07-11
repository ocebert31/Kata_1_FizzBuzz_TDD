const allFizzBuzz = require('../src/fizzbuzz');

test('display hundred frist numbers', () => {
  expect(allFizzBuzz().length).toBe(100);
});

test('3 become fizz', () => {
  expect(allFizzBuzz()[3]).toBe('fizz');
});

test('6 become fizz', () => {
  expect(allFizzBuzz()[6]).toBe('fizz');
});

test('5 become buzz', () => {
  expect(allFizzBuzz()[5]).toBe('buzz');
});

test('10 become buzz', () => {
  expect(allFizzBuzz()[10]).toBe('buzz');
});

test('15 become fizzbuzz', () => {
  expect(allFizzBuzz()[15]).toBe('fizzbuzz');
});

test('30 become fizzbuzz', () => {
  expect(allFizzBuzz()[30]).toBe('fizzbuzz');
});
