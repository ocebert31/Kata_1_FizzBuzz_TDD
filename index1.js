// 100 premiers nombres
// multiple 3 => fizz
// multiple 5 => buzz
// multiple 3 ET 5 => fizzbuzz

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
        if (i === 3) {
            numbers.push('Fizz')
        } else {
            numbers.push(i);
        }
    }
    return numbers;
}

assert('show first 100 numbers', () => {
    return fizzBuzz().length === 100;
})

assert('3 become Fizz', () => {
    return fizzBuzz()[3] === 'Fizz';
})