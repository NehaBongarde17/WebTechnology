//Get user to input a number using prompt("Enter a number : ").Check if the number is a multiple of 5 or not
//alert("Hello!")// one time alter 

// let name = prompt("Hello!");
// console.log(name);

// let num = prompt("Enter a number : ");

// if(num % 5 === 0){
//     console.log(num + " is multiple of 5")
// }else{
//     console.log(num + " is not multiple of 5")
// }

//Write code which give grade to student
let score = 50;
let grade;

if(score <= 100 && score >= 90){
    grade = 'A';
}
else if(score <= 89 && score >= 70){
    grade = 'B';
}
else if(score <= 69 && score >= 60){
    grade = 'C';
}
else if(score <= 59 && score >= 50){
    grade = 'D';
}
else{
    grade = 'F';
}
console.log("According to your score, your grade was : " + grade);



