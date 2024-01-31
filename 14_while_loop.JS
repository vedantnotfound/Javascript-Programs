//* The While Loop
// The while loop loops through a block of code as long as a specified condition is true.

// Syntax
// while (condition) {
//   // code block to be executed
// }

// Example
// In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:

let i = 1

while (i <= 10) {
  console.log("The number is " + i);
  i++;
}

// Output

// The number is 1
// The number is 2
// The number is 3
// The number is 4
// The number is 5
// The number is 6
// The number is 7
// The number is 8
// The number is 9
// The number is 10

//* The Do While Loop
// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// Syntax
// do {
//   // code block to be executed
// }
// while (condition);

// Example
// The example below uses a do while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

// Example
let j = 1;

do {
  console.log("Using do while loop the number is " + j);
  j++;
}
while (j <= 10);