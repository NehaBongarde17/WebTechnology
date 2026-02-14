//activity1 - array function object
//activity2 - reverse number 
//check number palindrone,
//fiborachi series
//find largest element in array
//remove dulicate-
//find missing number-
//reverse string
//count vowel is string
//check palindrone
//check prime number-
//facorial number
//function to find even odd
//function to find sum of array

//activity1 - array function object
console.log("Activity1 - array function object");
let arr = new Array(10,20,30,40,50)
console.log(`arr = ${arr}`)
for(i = 0 ;i<arr.length;i++){
    console.log(arr[i])
}

console.log("Function:")
function sum(a,b){
    let add = a + b
    console.log(`Add = ${add}`)
}
sum(20,10)

console.log("Object:");
const employee = {
    name : "Neha",
    age : 21,
    salary : 2000
}
console.log(employee.name)
console.log(employee,typeof(employee))

//activity2 - reverse number
console.log("Activity2 - reverse number");
let num = 123
let rev = 0
while(num>0){
    let digit = num%10
    rev =  rev * 10 + digit
    num = Math.floor(num /10)
}
console.log(rev)

//activity3 - check number is palindrom
console.log("Activity3 - check number is palindrone");
let num2 = 121
let original = num2
let rev2 = 0
while(num2>0){
    let digit = num2%10
    rev2 = rev2 * 10 + digit
    num2 = Math.floor(num2/10)
}

if(original == rev2){
    console.log(`${original} is the palindrom`)
}
else{
    console.log(`${original} is not palindrom`)
}

//activity4 - fiborachi series
console.log("Activity4 - fibonachi series");
let a = 1
let b = 1
console.log(a)
console.log(b)
for(i=0;i<10;i++){
    let c = a + b
    console.log(c)
    a = b
    b = c
}

//activity5 - find largest element in array
console.log("Activity5 - find largest element in array");
let arr1 = [1,2,3,4,5]
let largest = arr1[0]
for(i = 0;i<arr1.length;i++){
    if(arr1[i]>largest){
        largest = arr1[i];
    }
}
console.log("Largest : "+largest);

//activity6 - remove dulicate
console.log("Activity6 - remove dulicates");
let arr3 = [1,2,3,2,4,5,5,6]
let unique = []
for(i=0;i<arr3.length;i++){
    let isDuplicate = false

    for(j=0;j<unique.length;j++){
        if(arr3[i]===unique[j]){
            isDuplicate = true
            break;
        }
    }
    if(!isDuplicate){
        unique[unique.length] = arr3[i]
    }
}
console.log(unique);

//activity7 - find missing number in array
console.log("Activity7 - find missing number in array");
let arr2 = [1,2,4,5,6]
let large = arr2.length + 1
let totalSum = 0
let arrSum = 0
for(i=1;i<large;i++){
    totalSum += i
}
for(i=0;i<arr2.length;i++){
    arrSum += arr2[i]
}
console.log("Missing value is : "+(arrSum-totalSum));


//activity8 - reverse string
console.log("Activity8 - reverse string");
let str = "Neha"
let reverse = ""
for(i=str.length-1;i>=0;i--){
    reverse += str.charAt(i)
}
console.log("Reverse string : "+reverse);

//activity9 - count vowel is string
console.log("Activity9 - count vowel in string");
let str1 = "AeIou"
let count = 0
for(i=0;i<str1.length;i++){
    if(str1.charAt(i)=='a'|| str1.charAt(i)=='e'||str1.charAt(i)=='i'||str1.charAt(i)=='o'||str1.charAt(i)=='u'
        ||str1.charAt(i)=='A'||str1.charAt(i)=='E'||str1.charAt(i)=='I'||str1.charAt(i)=='O'||str1.charAt(i)=='U'){
        count++
    }
}
console.log("Count of vowels in string : "+count);

//activity10 - check palindrone
console.log("Activity10 - check palindrone");
let str2 = "neha"
let original_str = str2
let reversed = ""
for(i=str2.length-1;i>=0;i--){
    reversed += str2.charAt(i)
}
if(original_str == reversed){
    console.log(original_str + " is palindrone");
}
else{
    console.log(original_str + " is not palindrone"); 
}

//activity11 - check prime number
console.log("Activity11 - check prime number");
let num3 = 1
let isPrime = true

if(num3<=1){
    isPrime = false
}
else{
    for(i=2;i<=num3/2;i++){
        if(num3%i === 0){
            isPrime = false
            break;
        }
    }
}
if(isPrime){
    console.log(num3 + " is a prime number");   
}
else{
    console.log(num3 + " is NOT a prime number");
}

//activity12 - factorial number
console.log("Activity12 - factorial number");
let num4 = 4
let factorial = 1
while(num4>0){
    factorial = factorial * num4
    num4--
}
console.log("Factorial : "+factorial);

//activity13 - check even or odd
console.log("Activity13 - check odd or even");
function isEvenOdd(x){
    if(x%2===0){
        console.log(x + " is even number");    
    }
    else{
        console.log(x + " is odd number");
    }
}
isEvenOdd(6)

//activity14 - sum of array element
console.log("Activity14 - sum of array element"); 
function arraySum(arr2){
    let sum = 0
    for(i=0;i<arr2.length;i++){
        sum += arr2[i]
    }
    console.log("The sum of array : "+sum);
}

let arr4 = [2,3,4,1,2]
arraySum(arr4)





