//Sample program to demonstarate handling of type conversions in Javascript
//csamiselo@github.com 2019 December

/*
When an operator is applied to the “wrong” type of value, JavaScript will
quietly convert that value to the type it needs
This is called 'type coercion'.
*/

//null will be converted to zero in this case 
console.log(8 * null);

// the string value 5 is converted to a number
console.log("5" - 1);

//The string value 5 is appended to 1 to ge a value of 51
console.log("5" + 1);

// this produces a vlaue of NaN or not a number
console.log("five" * 2);