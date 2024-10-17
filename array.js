let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
//console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

let Kesman = numbers.map((number) => {
  return number * 2;
});
//console.log(Kesman)

let numberes = [1, 2, 3, 4, 5];
let doubledNumberes = numberes.map((number) => number * 2);
//console.log(doubledNumberes);  // Output: [2, 4, 6, 8, 10]
numberes.map(() => {});

let names = ["Alice", "Bob", "Charlie"];
let nameObjects = names.map(function (name) {
  return { name: name, length: name.length };
});
//console.log(nameObjects);

let numbes = [1, 2, 3, 4, 5];
let resultForEach = numbers.forEach(function (numbe) {
  return numbe * 2;
});
//console.log(resultForEach);

let resultFor = numbes.forEach((numbe) => {
  return numbe * 2;
});
//console.log(resultFor)

let codes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = codes.map((value, i) => {
  if (value % 2 == 0) {
    return value;
  }
});
//console.log(evenNumbers);

//filter()
let numbers2 = [5, 12, 8, 130, 44];

let filteredNumbers = numbers2.filter(function (number) {
  return number > 10;
});

let NO = [5, 12, 8, 130, 44];
let result = NO.filter((value, index) => {
  return value > 10;
});

let numbers3 = [5, 12, 8, 130, 44];
let filteredNumbers3 = numbers3.filter((number) => number > 10);
//console.log(filteredNumbers3);
//console.log(result);

let check = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers3 = check.filter(function (number) {
  return number % 2 === 0; // Check if the number is even
});
//console.log(evenNumbers3);

let working = check.filter((value, index) => value % 2 === 0);
//console.log(working)

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];

let adults = people.filter(function (person) {
  return person.age >= 18;
});

let arrange = people.filter((value, index) => value.age >= 18);
//console.log(arrange);

let numbers4 = [5, 12, 8, 130, 44];
let filteredNumbers4 = numbers4.filter(function (number) {
  return number > 10 && number % 2 === 0;
});
//console.log(filteredNumbers4);

let numbers5 = [1, 2, 3, 4, 5];

// Using forEach():
let filteredNumbers5 = [];
numbers5.forEach(function (number) {
  if (number > 3) {
    filteredNumbers5.push(number);
  }
});
//console.log(filteredNumbers5);  // Output: [4, 5]

// Using filter():
let filtered = numbers5.filter(function (number) {
  return number > 3;
});
//console.log(filtered);  // Output: [4, 5]

//filter() using index
let numbers6 = [10, 20, 30, 40, 50, 60];
let evenIndexNumbers = numbers6.filter(function (number, index) {
  return index % 2 === 0; // Keep only elements with even indexes
});
//console.log(evenIndexNumbers);

let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

let firstHalf = fruits.filter(function (fruit, index) {
  return index < fruits.length / 2; // Keep only the first half of the elements
});
//console.log(firstHalf);

let numbers7 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let everyThirdNumber = numbers7.filter(function (number, index) {
  return index % 3 === 0; // Keep elements at indexes 0, 3, 6, ...
});
//console.log(everyThirdNumber);

// join()
let fruites = ["apple", "banana", "orange"];
let fruitString = fruites.join(" - ");
//console.log(fruitString);

//find()
let numberss = [1, 2, 3, 4, 5];
let firstEven = numberss.find(function (number) {
  return number % 2 === 0; // Find the first even number
});
//
let firstEven1 = numberss.find((value) => value % 2 === 0);
//console.log(firstEven1);

//sort()
let numbers8 = [40, 100, 1, 5, 25];
numbers8.sort(function (a, b) {
  return a - b; // Sort numbers in ascending order
});

numbers8.sort((a, b) => a - b);
numbers8.sort();
//console.log(numbers8);  // Output: [1, 5, 25, 40, 100]

let fruitss = ["banana", "apple", "orange"];
fruitss.sort();
fruitss.reverse();
//console.log(fruitss);

//reduce
let numberList = [1, 2, 3, 4];
let product = numberList.reduce((acculator, currentvalue) => {
  return 1 + 1;
}, 1);
//console.log(product);
let product2 = numberList.reduce((acculator, currentvalue) => {
  return 2 + 2;
}, 1);
//console.log(product2);
let product3 = numberList.reduce((acculator, currentvalue) => {
  return 4 + 3;
}, 1);
//console.log(product3);
let product4 = numberList.reduce((acculator, currentvalue) => {
  return 7 + 4;
}, 1);
//console.log(product4);

let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let flatArray = nestedArray.reduce((accumulator, currentValue)=>{
//return accumulator.concat(currentValue)
return [].concat([1,2])
}, [])
//console.log(flatArray)
    let flatArray2 = nestedArray.reduce((accumulator, currentValue)=>{
        return [1,2].concat([3,4])
    },[1,2])
    //console.log(flatArray2)
    let flatArray3 = nestedArray.reduce(
      (accumulator, currentValue) => {
        return [1,2,3,4].concat([5, 6]);
      },
      [1, 2]
    );
    //console.log(flatArray3);

    // combining reduce(), filter(), map()
    //Double all the numbers.
    //Filter out only the numbers greater than 5.
    //Sum the resulting numbers.

    let arrNumbers = [1, 2, 3, 4, 5, 6];
    let firstMap = arrNumbers.map((value,index)=>{
        return value * 2
    })
    console.log(firstMap)
    let firstFilter = firstMap.filter((value,index)=>{
       return value > 5
    })
    console.log(firstFilter)
    let firstRuduce = arrNumbers.reduce((acculator, currentValue) => {
        //return acculator + currentValue
        return firstMap + firstFilter
    },0)
    console.log(firstRuduce)

