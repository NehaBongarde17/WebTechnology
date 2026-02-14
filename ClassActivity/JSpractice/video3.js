// for(let i = 1; i <= 1000; i++){
//     console.log("Neha");
// }

//Print all even numbers from 0 to 100
// for(let i = 0;i<=100;i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//Create a game where you start with any random game number.Ask the user 
//to keep guessing the game number until the user enters correct value
// let gameNum = 25
// let userNum = prompt("Guess the game number : ")
// while(userNum != gameNum){
//     userNum = prompt("You entered wrong number. Guess again : ")
// }
// console.log("Congratulation, you entered the right number");


//Prompt the user to enter their full name .Generate a username for them based on the input start usernsme 
//with @,followed by their full name and ending with the fullname length
//e.g usernmae = "NehaBongarde",username should be "@NehaBongarde12"
let fullname = prompt("Enter the full name without spaces : ")
let username = "@"+fullname+fullname.length
console.log(username);

