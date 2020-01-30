//Program to demonstrate global scope of varaiables in a javascript program

//variable has global scope
var myGlobal = 10;

function fun1() {
    //If this variable is declared using the 'var' keyword 
    //its scope is limited to the function else its scope is global
    //and the compiler gives "ReferenceError: oopsGlobal is not defined"

    oopsGlobal = 5;
}


function fun2() {
    var output = "";

    if (typeof myGlobal != "undefined") {
        output += "myGlobal:" + myGlobal;
    }

    if (typeof oopsGlobal != "undefined") {
        output += "\n" + "oopsGlobal:" + oopsGlobal;

    }
    console.log(output);
}
// function calls
fun1();
fun2();