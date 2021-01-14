//Simple demonstration of functions
//chismitnick@github.com Dec 2020
const power = function(base, exponent) {
    let res = 1;
    for (let count = 0; count < exponent; count++) {
        res *= base;

    }
    return res;
}

const square = function(x) {
    return x * x;
}

console.log("The value of the base square function is:");
console.log(square(7));


console.log("The value of the base exponent function is:");
console.log(power(3, 21));