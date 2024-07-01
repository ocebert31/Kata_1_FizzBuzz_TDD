// 100 premiers nombres
// multiple 3 => fizz
// multiple 5 => buzz
// multiple 3 ET 5 => fizzbuzz

// Restriction : Un seul if par fonction

function assert(label, test) {
    if(test()) {
        console.log(`${label} ✔`)
    } else {
        console.log(`${label} ❌`)
    }
}

function allFizzBuzz() {
    let numbers = [];
    for (let i = 0; i < 100; i ++) {
        fizzBuzz(numbers, i);
        fizz(numbers, i);
        buzz(numbers, i);
        defaultNumber(numbers, i);
    }
    return numbers;
}

function fizzBuzz(numbers, i) {
    if (i === 15) {
        numbers.push('FizzBuzz');
    }
}

function fizz(numbers, i) {
    if (i % 3 === 0 && i !== 15) {
        numbers.push('Fizz');
    }
}

function buzz(numbers, i) {
    if (i % 5 === 0 && i % 3 !== 0) {
        numbers.push('Buzz');
    }
}

function defaultNumber(numbers, i) {
    if (i % 3 !== 0 && i % 5 !== 0 && i !== 15) {
        numbers.push(i);
    }
}

assert('show first 100 numbers', () => {
    console.log(allFizzBuzz().length)
    console.log(allFizzBuzz())
    return allFizzBuzz().length === 100;
});

assert('3 become Fizz', () => {
    return allFizzBuzz()[3] === 'Fizz';
});

assert('6 become Fizz', () => {
    return allFizzBuzz()[6] === 'Fizz';
});

assert('5 become Buzz', () => {
    return allFizzBuzz()[5] === 'Buzz';
});

assert('10 become Buzz', () => {
    return allFizzBuzz()[10] === 'Buzz';
});

assert('15 become FizzBuzz', () => {
    return allFizzBuzz()[15] === 'FizzBuzz';
});