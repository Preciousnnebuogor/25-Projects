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


const Indexo = () => {
  let check = arrList.indexOf("mango");
  return check;
};
//console.log(Indexo())


let index = arrList.indexOf("mango");
//console.log(index)

//How do you check if an array contains a certain value using the includes() method?
const solution1 = () => {
  let check = arrList.includes("apple");
  return check;
};
//console.log(solution1());

//What does the join() method do? Can you give an example of how it's used?
// the join() returns an array and addes a seperator

let arrList3 = ["mango", "apple", "watermelon", "carrot"];
const solution2 = () => {
    let check = arrList3.join(" - ")
    return check;
}
//console.log(solution2())

//What is the concat() method, and how can you combine two arrays using it?
//the concat() is use to add multiple arrarys together to form a new array
 
let arrList1 = ["morning", "afternoon", "evening", "midnight"]
const solution4 = () => {
    let check = arrList.concat(arrList1)
    return check
}
//console.log(solution4())

//What is the difference between slice() and splice() in arrays?
// slice() is use to get a specific value, it have a start index and the end index: where you want the separator to stop
// splice() is use to add, remove or replace elements from an array

//How do you use the find() method, and what does it return if no element matches the condition?
// if no element is found it returns undefined
let numbers = [1, 2, 3, 4, 5];

const solution5 = () => {
    let check = numbers.find((value) => value % 2 == 0 )
    return check
}
//console.log(solution5())

//What is the difference between find() and findIndex()?
// find() returns only the first element that matches the condition
// findIndex() returns the index of the first element that matches the condition

//How does the filter() method work, and how can it be used to filter out even numbers from an array?
// filter() loop through the array and only returns the elements that matches the condition
const solution6 = () => {
    let check = numbers.filter((value,index) => {
      return value % 2 === 0})
        return check
}
//console.log(solution6())

//How do you use the map() method to create a new array where each element is doubled in value?
const solution7 = () => {
    let check = numbers.map((value,index) => value * 2)
    return check
}
//console.log(solution7())

//What is the purpose of the reduce() method, and how can you use it to calculate the sum of an array?

//Explain how the every() method works and when it returns true or false.


