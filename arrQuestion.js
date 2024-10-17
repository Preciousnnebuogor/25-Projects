//How do you access the first and last elements of an array?
let arrList = ["mango", "apple", "watermelon", "carrot"];
let firstElement = arrList[0];
// console.log(firstElement)

let lastElement = arrList[arrList.length - 1];
// console.log(lastElement)

//What does the push() method do in an array?
//the push() in an array adds a value at the end of an array

//What is the difference between push() and unshift()?
// push() adds element to the end of an array
// unshift() adds elements at the beginning of an array

//How does pop() differ from shift() in arrays?
// pop() removes an element from the end of an array
// shift() removes an element from the beginning of an array

//What does the indexOf() method do, and how is it used?
// indexof() enables us to know the position of an element in an array and it returns the position of the element

let arrList1 = ["mango", "apple", "watermelon", "carrot"];

const Indexo = () => {
  let check = arrList1.indexOf("mango");
  return check;
};
//console.log(Indexo())

let arrList2 = ["mango", "apple", "watermelon", "carrot"];
let index = arrList2.indexOf("mango");
//console.log(index)

//How do you check if an array contains a certain value using the includes() method?
const solution1 = () => {
  let check = arrList1.includes("apple");
  return check;
};
console.log(solution1());
