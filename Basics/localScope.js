//variables declared within a function have local scope

function localScope() {
    var myVar = 5;
    console.log("the value of local variable is:" + myVar);

}

//usin return statements

function bweza() {

    var myClothings = "Cardigan"

    return myClothings;
}





localScope();
console.log("I am wearing a",bweza());