// const max = promt("enter the maximum number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess number");

// while (true) {
//     if (guess == "quit") {
//         console.log("user quit");
//         break;

//     }

//     if (gues == random) {
//         console.log("you are right !congrats! random number was", random);
//         break;
//     } else if (guess < random) {
//         guess = prompt(" hi your guess was too small ! try again");
//     } else {
//         guess = prompt("your guess was too large ! please try again")
//     }
// }
const max = prompt("Enter the maximum number:");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number:");

while (true) {
    if (guess === "quit") {
        console.log("User quit");
        break;
    }

    const numGuess = parseInt(guess);

    if (numGuess === random) {
        console.log("You are right! 🎉 Congrats! The random number was", random);
        break;
    } else if (numGuess < random) {
        guess = prompt("Too small! Try again or type 'quit' to stop:");
    } else if (numGuess > random) {
        guess = prompt("Too large! Try again or type 'quit' to stop:");
    } else {
        guess = prompt("Invalid input. Please enter a number or 'quit':");
    }
}