//a do loop always executes its body at least once, and it starts testing
//whether it should stop only after that first execution
let result = 1;
let counter = 0;

do {
    result = result * 2;
    counter = counter + 1;
} while (counter < 10);

console.log(result);