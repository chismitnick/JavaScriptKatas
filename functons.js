// simple program to demonstrate the operations of functions in jajvascript
//the enable us to write reusable code 


function myfunction() {

    console.log("This message was printed from within the function");

}

function otherFunction() {
    console.log("printed from inside function 2");
}

//function with paramrters
function arithmetic(a, b) {
    console.log(a * b);
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
}

//funtion call
myfunction();
otherFunction();
arithmetic(10, 5);