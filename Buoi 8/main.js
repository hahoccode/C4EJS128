/*
// const list = [10,'Hello world', true, false]
const list = [10,20,30,40,50,60,70,80];
            // 0 1  2   3  4  5  6 7  < 8
console.log('length',list.length);
// for( let i = 0; i<= list.length-1; i++  ){

// }
let sum = 0;
for(let i = 0; i<list.length; i++){
  sum+= list[i];
}
console.log('sum',sum);
*/

// let fruits = ["Apples", "Pear", "Orange"];

// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// console.log(fruits);

let a = 10; // string, number, boolean, ... float, double
let b = a; // gía trị 

console.log(a,b);

a = 20 
console.log(a,b);

let fruits = ["Apples", "Pear", "Orange"]; // array, object 
// fruits chứa địa chỉ 
let shoppingCart = fruits; // địa chỉ 

let demoCopyArray = [...fruits]; // destructoring javascript

demoCopyArray.push("Banana");

console.log('fruits',fruits);
console.log('demoCopyArray',demoCopyArray);
