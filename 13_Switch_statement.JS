// Switch Statement 

// Use the switch statement to select one of many code blocks to be executed.

//* Syntax
// switch(expression) {
//   case x:
//      code block
//     break;
//   case y:
//      code block
//     break;
//   default:
//      code block
// }

// This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

let num = 4;

switch(num){
    case 4:
        console.log("Number Matched");
        break;
    default:
        console.log(num);
}