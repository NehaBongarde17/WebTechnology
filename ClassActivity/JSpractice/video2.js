//Get user to input a number using prompt("Enter a number : ").Check if the number is a multiple of 5 or not


//Write code which give grade to student
let score = prompt("Enter the score : ");
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



