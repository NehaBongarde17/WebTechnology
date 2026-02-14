//Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string

function vowelCount(str){
    let count = 0;
    for(let i = 0;i<str.length;i++){
        if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u'||
        str.charAt(i)=='A'||str.charAt(i)=='E'||str.charAt(i)=='I'||str.charAt(i)=='O'||str.charAt(i)=='U'){
            count++;
        }
    }
    return count;
}

let str1 = "Neha";
let countVowel = vowelCount(str1);
console.log("Count of vowel in string : "+countVowel);

//create an arrow function to perform same

let vowelCount1 = (str) =>{
    let count = 0;
    for(let i = 0;i<str.length;i++){
        if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u'||
        str.charAt(i)=='A'||str.charAt(i)=='E'||str.charAt(i)=='I'||str.charAt(i)=='O'||str.charAt(i)=='U'){
            count++;
        }
    }
    return count;
}
let str2 = "Darshan"
console.log("Count of vowel in string : "+vowelCount1(str2));


//for a given array of numbers,print the square of each value using the forEach loop
let arr = [1, 2, 3, 4, 5, 6, 7]
arr.forEach(element => {
    let result = element * element;
    console.log(result);
});

//we are given array of marks of student .Filter out of the marks of students that scored 90

//Take a number n as input from user.Create an array of number from 1 to n.
//use the reduce method to calculate sum of all numbers in the array
//use the reduce method to calculate product of all numbers in the array