// typeof operator 

//  These Are the types of Data types
// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let age = 22; 
let firstName = "harshit";

console.log(typeof age); //-> It Will Print ( number )

//* 22 -> "22"
// convert number to string. 
age = age + "";
console.log(typeof(age)); //"22" string


// convert string to number. 

let myStr = +"34"; // Use + Operator Before String Number +"34"
console.log(typeof myStr); // number

let anotherAge = "18"; 
anotherAge = Number(anotherAge); // Use nuber function tu convert Str to Int
console.log(typeof anotherAge);