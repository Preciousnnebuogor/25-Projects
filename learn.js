// Given an array Arrof size N, print second largest
// distinct element from an array
let result = [12, 15, 1, 10, 34, 1,35];
let result2 = [10, 5, 10];
 
const sortedArr = [...result].sort((a, b) => b - a);
const secondHighest = sortedArr[1];

console.log(secondHighest); 

const check = [...result2].sort((a,b) => b-a)
const copy = [...new Set(check)]
const second = copy[1]
console.log(second)
