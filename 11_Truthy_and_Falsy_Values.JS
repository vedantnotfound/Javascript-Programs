//* Truthy and Falsy Values

// falsy Values
// - false
// - null
// - ""
// - 0
// - Undefined

// These are all falsy values

let firstname = "";
// let firstname = 0;
// let firstname = null;
// let firstname;
// let firstname = false;
if(firstname){
    console.log(firstname);
}
else{
    console.log("Firstname is empty");
}

// Output -> Firstname is empty

//* Truthy Values

// All except falsy values ​​are truthy values

// let truthy = 1;
let truthy = "abc";
if (truthy) {
    console.log(truthy);
}
else{
    console.log("Truthy is empty");
}

// Output = 1;