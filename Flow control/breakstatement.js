
// A loop can be brokrn out of using a break statement

// The for loop  does not have a part that checks for the
// end of the loop

//This means that the loop will never stop unless the break
//statement inside is executed
for(let currentNumber = 20; ;currentNumber = currentNumber += 1){

    if(currentNumber % 7 == 0){
        console.log(currentNumber);
        break;
    }
}