// Simple program tto show the usage of tempalte literals
//When you write something inside ${} in a template literal, its result will be
//computed, converted to a string, and included at that position.

//statement containing a template literal
console.log("What is half of a 100?");
console.log(`half of 100 is ${100 / 2}`);
console.log("\n");

//the typeof operator is a unary operator that returns the type of the datatype of a value and produces a string value naming the type of the value you give it
console.log("What is the datatype of the value 4.5?");
console.log(typeof 4.5);
console.log("\n");

// performing simple boolean comparison
console.log("Is 3 greater than 2?");
console.log(3 > 2);
console.log("\n");


//String comparison
console.log("Are apples and oranges equal?");
console.log("Apple" == "Orange");
console.log("\n");
console.log("\n"); //new-line operator

//logical operators 
//JavaScript supports three logical operators: and, or, and not
console.log("What are the results of applying logical operators on 1 and 0?");
console.log(" 1 AND O  =", 1 && 0);
console.log("\n");

console.log("\n");
console.log(" 1 OR O =", 1 || 0);
console.log("\n");

console.log(" Not 1  =", !1);
console.log("\n");

// Using the tenary operator 
//value on the left of the question mark “picks” which of the other two values will come out
// When it is true, it chooses the middle value, and when it is false, it chooses the value on the right.

console.log("Choose a value between 1 and 2");
console.log(true ? 1 : 2);