// Nested If Else 

// Guess Number 

// Winning number =  17

// let guessNumber = prompt("Enter a Number"); //prompt will return string data type
let guessNumber = +prompt("Enter a Number"); // to convert string to int use +
console.log(guessNumber);
console.log(typeof guessNumber); //number

let winningNumber = 12;

if(winningNumber === guessNumber){
    console.log("Match Found You Won");
}
else{
    if (winningNumber < guessNumber) {
        console.log("You enter greater number than winning number");
    }
    else{
        console.log("You enter smaller number than winning number");
    }
}