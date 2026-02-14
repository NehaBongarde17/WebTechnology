//activities-
/*
1.diff between arrow function and simple function
2.what is use this keyword use in array func and simple func
3.why we not use this keyword in arrow func
4.write code for arrow function 3 ex
5.write a code for switch case
6.how o use truty and falsy value in js ex
7.write a code for how to use loops in arraywith ex
8.what is diff betn for of and for in with ex 1.forof loop is used for strings/arrays not for object
                                             -2.forin loop is used for object i return the keys in object
9.write a code for map and filter in js with 3 ex
10.how to use trenary opreator in js

*/


//1.diff between array function and simple function
//array function
function arrayFunc(arr1){
    let sum = 0;
    for(let i = 0; i<arr1.length;i++){
        sum += arr1[i];
    }
    return sum;
}
let arr = [2,3,1,4];
let sum = arrayFunc(arr);
console.log(`The sum of array element is ${sum}`);

//simple function
function diff(a,b){
    return a - b;
}
result = diff(4,3);
console.log(`The difference : ${result}`);


//2.what is use this keyword use in array func and simple func
/*
If simple function is declared inside object then the his keyword refer to that object

*/


//4.write code for arrow function 3 ex
let add = (a,b) => {
    let c = a + b; 
    console.log("Addition : "+ c);  
}
add(3,4)

let fact = (num) => {
    let f = 1;
    while(num>0){
        f = f*num;
        num--;
    }
    console.log(`Factorial is ${f}`);  
}
fact(2)

let mul = (a,b) =>{
    let c = a * b;
    console.log(`Multiplication: ${c}`);   
}
mul(4,5)

const obj = {
    name : "Neha",
    age : 21
}
function func1(obj){
    console.log(obj.name);
}
func1(obj)

function func2(obj2){
    console.log(`${obj2.name} and my age is ${obj2.age}`); 
}
func2(obj)

