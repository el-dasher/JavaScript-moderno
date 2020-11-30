"use strict"; // JavaScript fica mais chatinho

function sum(x, y) {
    return x + y;
}

// Anonymous function
const anomSum = function (x, y) {
    return x + y;
};

// Arrow function
const arrowSum = (x, y) => {
    return x + y;
};

// Arrow function reduzida
const ReducedArrowSum = (x, y) => x + y;

console.log(sum(1, 2));
console.log(anomSum(2, 3));
console.log(arrowSum(3, 4));
console.log(ReducedArrowSum(5, 6));

// Tempate literals
const name = "Dasher"

// Concatenating
let text_c = "Meu nome é " + name + " e eu sou top!";

// Templates
let text_t = `Meu nome é ${name} e eu sou top!`;

console.log(text_c);
console.log(text_t);

// Default parameters
const defaultSum = (a, b = 10) => a + b;

console.log(defaultSum(2));
