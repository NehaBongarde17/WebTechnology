//arrays
//arrays are mutable   
//Strings are immutable
//for a given array with marks of students ->[85,97,44,37,76,60].Find the avg marks of the entire class.
let arr = [85, 97, 44, 37, 76, 60]
let sum = 0
for(let i=0;i<arr.length;i++){
    sum += arr[i]
}
console.log(`Sum of marks : ${sum}`);
let avg = sum /arr.length
console.log(`Avg marks of the class : ${avg}`);

//For a given array with prices of 5 items->[250,645,300,900,50].All items have an offer of 10% OFF on them.Change the array to store final price after applying offer
let items = [250,645,300,900,50];
let i = 0
// for(let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value after offer = ${items[i]}`);
//     i++;
// }

for(let i = 0; i <items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer
}
console.log(items);

//Array methods
/*
1.push()
2.pop
3.toString
4.concat
5.unshift
6.shift 
7.slice - slice(startidx,endidx)
8.splice - splice(startidx,delCount,newEl1...)
*/

/*
Create an array to store companies -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
a.Remove the first company from the array
b.Remove Uber & Add Ola in its place
c.Add Amazon at the end
*/
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon")
console.log(companies);






