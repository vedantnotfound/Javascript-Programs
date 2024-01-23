// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "    vedant";

console.log(firstName.length); // 10 output with space
firstName = firstName.trim(); // -> it will remove all spaces
console.log(firstName) // 
console.log(firstName.length);
// firstName = firstName.toUpperCase(); // -> It will Convert letters into UPPERCASE
// firstName = firstName.toLowerCase(); // -> It Will Convert letters into lowercase
// console.log(firstName);

// start index 
// end index

let newString = firstName.slice(2); // -> it Will SLice/ Remove Elemest form start eg 2 -> ve will remove , you can entered two values start and end

console.log(newString);