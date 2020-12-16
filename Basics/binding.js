/* A program to demonstrate the concept of bindings
To catch and hold values, JavaScript provides a mechanism called a binding, or variable:
The keywords let, var and const indicate that a statement is going to define a binding
*/

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log("The amount owed is",luigisDebt);

let one = 1,
    two = 2;
console.log(one + two);

//using var and const keywords to create bindings
var name = "Maximillian";
const greeting = "Hello ";
console.log(greeting,name);