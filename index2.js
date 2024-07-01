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

function fizzBuzz() {
    let numbers = [];
    for (let i = 0; i < 100; i ++) {
        fizz(numbers, i)
        defaultNumber(numbers, i)
    }
    return numbers;
}

function fizz(numbers, i) {
    if (i % 3 === 0) {
        numbers.push('Fizz');
    }
}

function defaultNumber(numbers, i) {
    if (i % 3 !== 0) {
        numbers.push(i);
    }
}

assert('show first 100 numbers', () => {
    console.log(fizzBuzz())
    return fizzBuzz().length === 100;
});

assert('3 become Fizz', () => {
    return fizzBuzz()[3] === 'Fizz';
});

assert('6 become Fizz', () => {
    return fizzBuzz()[6] === 'Fizz';
});