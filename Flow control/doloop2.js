// Do loop to force user to enter non empty string

let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName)