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
  let check = arrList3.join(" - ");
  return check;
};
//console.log(solution2())

//What is the concat() method, and how can you combine two arrays using it?
//the concat() is use to add multiple arrarys together to form a new array

let arrList1 = ["morning", "afternoon", "evening", "midnight"];
const solution4 = () => {
  let check = arrList.concat(arrList1);
  return check;
};
//console.log(solution4())

//What is the difference between slice() and splice() in arrays?
// slice() is use to get a specific value, it have a start index and the end index: where you want the separator to stop
// splice() is use to add, remove or replace elements from an array

//How do you use the find() method, and what does it return if no element matches the condition?
// if no element is found it returns undefined
let numbers = [1, 2, 3, 4, 5];

const solution5 = () => {
  let check = numbers.find((value) => value % 2 == 0);
  return check;
};
//console.log(solution5())

//What is the difference between find() and findIndex()?
// find() returns only the first element that matches the condition
// findIndex() returns the index of the first element that matches the condition

//How does the filter() method work, and how can it be used to filter out even numbers from an array?
// filter() loop through the array and only returns the elements that matches the condition
const solution6 = () => {
  let check = numbers.filter((value, index) => {
    return value % 2 === 0;
  });
  return check;
};
//console.log(solution6())

//How do you use the map() method to create a new array where each element is doubled in value?
const solution7 = () => {
  let check = numbers.map((value, index) => value * 2);
  return check;
};
//console.log(solution7())

//*********What is the purpose of the reduce() method, and how can you use it to calculate the sum of an array?

//Explain how the every() method works and when it returns true or false.
// every() checks if the elements in a array meets a specific condition in a callback function and it
// makes sure each of the elements meets the condition before it return true else it returns false

//What is the difference between forEach() and map()?
// map() returns a new array and shows the result
// forEach() does not return a new array and do not show the result(undefined)

//How can you use the sort() method to sort an array of numbers in ascending order?
let list = [10, 2, 5, 1, 50, 3, 4, 8, 6, 7];
const solution8 = () => {
  let check = list.sort((n, m) => {
    return n - m;
  });
  let result = check.reverse();
  return result;
  return check;
};
//console.log(solution8())

//What does the reverse() method do, and how does it affect the original array?
// reverse() makes the array to be in descending order, it modifies an array

//Explain how the some() method is different from every() and provide an example of each.
// some() checks if it matches at least one condition and returns true
// every() check if it matches all the conditions and return true

//1. How would you use the reduce() method to flatten a multi-dimensional array into a one-dimensional array?
let dimensional = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let first = dimensional.reduce((accumulator, currentvalue) => {
  return [].concat([1, 2]);
}, []);
//console.log(first)
let second = dimensional.reduce((accumulator, currentvalue) => {
  return [1, 2].concat([3, 4]);
}, []);
let third = dimensional.reduce((accumulator, currentvalue) => {
  return [1, 2, 3, 4].concat([5, 6]);
});
//console.log(third)

//2. How can you use the reduce() method to create an object from an array of arrays (e.g., converting key-value pairs into an object)?
const keyValuePairs = [
  ["name", "Alice"],
  ["age", "25"],
  ["country", "USA"],
];

let arrfirst = keyValuePairs.reduce((accumulator, currentValue) => {
  const [key, value] = currentValue; // destructing assigning it to currentValue
  accumulator[key] = value; // making value a pair of key
  // accumulator[currentValue[0]] = currentValue[1];
  return accumulator;
}, {});

//console.log(arrfirst);

// const gope = {
// //   name: "Presh",
// };

// gope.name;
// gope["name"] = "Favour"

//How do entries(), keys(), and values() differ, and when would you use each one?
// entries() loops through an array and returns both the value and the value
// keys() loops through an array and returns only the key of the element
// value() loops through an array and returns only the value

//11. How do you empty an array in JavaScript?
let empty = ["name", "car", "review"];
empty.length = 0;
const jack = () => {
  let check = empty;
  return check;
};
//console.log(jack());

//1.Given the array let fruits = ["apple", "banana", "mango"];, how can you access the first and last elements of the array?
let fruits = ["apple", "banana", "mango", "lop", "uhu"];
const solution9 = () => {
  let first = fruits[0];
  let last = fruits[fruits.length - 1];
  return { first, last };
  //return [first,last]
};
//console.log(solution9());

//2.Add the fruit "orange" to the end of the array fruits and remove the first fruit from the array.

const solution10 = () => {
  fruits.push("orange");
  fruits.shift();
  return fruits;
};
//console.log(solution10())

//3.Write a for loop that prints each element of the array let numbers = [1, 2, 3, 4, 5];.
let numbersarr = [1, 2, 3, 4, 5];
for (i = 1; i <= numbersarr.length; i++) {
  //console.log(i);
}

//Use the .map() method to double each number in the array let numbers = [1, 2, 3, 4];.
let numbersa = [1, 2, 3, 4];
let doubleNumbers = numbersa.map((value, index) => {
  return value * 2;
});
//console.log(doubleNumbers)

//Use the .filter() method to return only even numbers from the array let numbers = [1, 2, 3, 4, 5, 6];
numbers = [1, 2, 3, 4, 5, 6];
const solution12 = () => {
  let check = numbers.filter((value, index) => {
    return value % 2 === 0;
  });
  return check;
};
//console.log(solution12())

//Given let arr = [10, 20, 30, 40, 50];, use the .find() method to return the first element greater than 25.
arrList = [10, 20, 30, 40, 50];
const solution13 = () => {
  let check = arrList.find((value, index) => {
    return value > 25;
  });
  return check;
};
//console.log(solution13())

//Write a function that concatenates two arrays: let arr1 = [1, 2]; let arr2 = [3, 4]; and returns a single array.
let arr1 = [1, 2];
let arr2 = [3, 4];
const solution14 = () => {
  let check = arr1.concat(arr2);
  return check;
};
//console.log(solution14())

//How can you empty the array let numbers = [1, 2, 3, 4];
numbers = [1, 2, 3, 4];
//numbers = []
numbers.length = 0;
//console.log(numbers)

//Given an array let arr = [1, 2, 2, 3, 4, 4, 5];, write code to remove duplicate values.
arr = [1, 2, 2, 3, 4, 4, 5];
let newArray = new Set([1, 2, 2, 3, 4, 4, 5]);
//console.log(newArray)

//Given the string let str = "hello";, how can you access the first and last characters of the string?
let str = "hello";
// let check = str[0]
// let check2 = str[4]
// console.log(check,check2)
let check = str.charAt(0);
let check2 = str.charAt(4);
//console.log(check,check2)

//Write a function that takes a string as input and returns the number of characters in the string.
let FunctionInput = "arrangement";
const solution17 = () => {
  return FunctionInput.length - 1;
};
//console.log(solution17())

//Given the string let sentence = "JavaScript is fun";, extract the word "JavaScript" using the .slice() method.
let sentence = "JavaScript is fun";
let extract = sentence.slice(0, 10);
//console.log(extract)

//How would you use the .includes() method to check if the string "Hello world" contains the word "world"?
let sentenceString = "Hello world";
let assess = sentenceString.includes("world");
//console.log(assess)

//Write a function that splits the string "apple,banana,orange" into an array of fruits using the .split() method.
let string = "apple,banana,orange";
const solution18 = () => {
  let check = string.split(",");
  return check;
};
//console.log(solution18())

//Write a function that takes the string "hello" and returns it reversed as "olleh".
let word = "hello";
const solution19 = () => {
  let string = word.split("");
  let change = string.reverse();
  let add = change.join("");
  return add;
};
//console.log(solution19())

//Convert the string "hello" to uppercase using the appropriate string method.
let convert = "hello";
let method = convert.toUpperCase();
//console.log(method)

//How would you remove whitespace from both ends of the string " Hello World "?
let text = "  Hello World   ";
let rank = text.trim();
//console.log(rank)

//Given the object let person = { name: "John", age: 25 };, how can you access the name and age properties?
let person = { name: "John", age: 25 };
let accessName = person.name;
//console.log(accessName)
let accessAge = person.age;
//console.log(accessAge);

//How can you add a new property gender to the object person with a value of "male"?
let access = (person.gender = "male");
//console.log(person)

//Remove the age property from the person object.
let accessdelete = delete person.age;
//console.log(person)
//console.log(accessdelete)

//Write a for...in loop to iterate over the properties of the object let car = { make: "Toyota", model: "Camry", year: 2020 };.
car = { make: "Toyota", model: "Camry", year: 2020 };
for (let key in car) {
  //console.log(key + ":" + car[key])
}

//Combine the two objects let obj1 = { a: 1 }; and let obj2 = { b: 2 }; into a single object.
obj1 = { a: 1 };
let obj2 = { b: 2 };
for (let key in obj1) {
  //console.log(key + ":" + obj1[key]);
}
for (let key in obj2) {
  //console.log(key + ":" + obj2[key]);
}
let spread = { ...obj1, ...obj2 };
//console.log(spread);

//Given let user = { name: "Alice", age: 30 };, use object destructuring to extract the name and age properties into variables.
let user = { name: "Alice", age: 30 };
let { name: firstName, age: FirstAge } = user;
//console.log(`Name:${firstName}, Age:${FirstAge}`)

//Write code to check if the property age exists in the object person.
let person1 = { name: "John", age: 25 };
if (person1.age) {
  //  console.log(true)
} else {
  //  console.log(false)
}

//Write a function that converts the object let person = { name: "John", age: 25 }; into an array of key-value pairs.
let person2 = { name: "John", age: 25 };
const solution20 = () => {
  let result = Object.entries(person2);
  return result;
};
//console.log(solution20())

//Given a nested array let arr = [1, [2, [3, 4], 5]];, use the .flat() method to create a flat array of [1, 2, 3, 4, 5].
let listArr = [1, [2, [3, 4], 5]];
const solution21 = () => {
  let check = listArr.flat(2);
  return check;
};
//console.log(solution21());

//Given an array of objects let users = [{ name: "John", age: 25 }, { name: "Jane", age: 22 }, { name: "Alex", age: 30 }];, write a function that sorts the users by their age property.
let ObjectUser = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Alex", age: 30 },
];
const solution22 = () => {
  return ObjectUser.sort((a, b) => a.age - b.age);
};
//console.log(solution22())

let users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Alex", age: 30 },
];

const sortByAge = (arr) => {
  return arr.sort((a, b) => b.age - a.age);
};
//console.log(sortByAge(users));

//Write a function that removes all falsy values (false, 0, null, undefined, NaN, "") from the array let arr = [0, 1, false, 2, "", 3];.
let arrValue = [0, 1, false, 2, "", 3];
const solution23 = () => {
  let check = arrValue.filter(Boolean);
  return check;
};
//console.log(solution23())

//Use the .reduce() method to sum all the numbers in the array let numbers = [1, 2, 3, 4, 5];.
let numbersList = [1, 2, 3, 4, 5];
let resultNow = numbersList.reduce((accumulator, currentValue) => {
  return 0 + 1;
}, 0);
//console.log(resultNow);
let resultNow2 = numbersList.reduce((accumulator, currentValue) => {
  return 1 + 2;
}, 0);
//console.log(resultNow2);
let resultNow3 = numbersList.reduce((accumulator, currentValue) => {
  return 3 + 3;
}, 0);
//console.log(resultNow3);
let resultNow4 = numbersList.reduce((accumulator, currentValue) => {
  return 6 + 4;
}, 0);
//console.log(resultNow4);
let resultNow5 = numbersList.reduce((accumulator, currentValue) => {
  return 10 + 5;
}, 0);
//console.log(resultNow5);

//Given an array let arr = [1, 2, 3, 3, 4, 5, 5];, write a function that returns an array with unique values (no duplicates).
let arrNo = [1, 2, 3, 3, 4, 5, 5];
const solution24 = () => {
  let set = new Set([1, 2, 3, 3, 4, 5, 5]);
  return set;
};
//console.log(solution24())

//Given two arrays let arr1 = [1, 2]; and let arr2 = [3, 4];, write a function that combines them without using .concat().
let arra = [1, 2];
let arrb = [3, 4];
const solution25 = () => {
  let combine = [...arra, ...arrb];
  return combine;
};

//Write a function that splits an array into chunks of a specific size. For example, chunk([1, 2, 3, 4, 5], 2) should return [[1, 2], [3, 4], [5]].
function chunk(array, size) {
  const chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index += size;
  }
  return chunkedArray;
}
//console.log(chunk([1, 2, 3, 4, 5], 2));

//Write a function that reverses each word in a given string. For example, "hello world" should become "olleh dlrow".
let data = "hello world"
const solution26 = () => {
    let check1 = data.split("")
    let check2 = check1.reverse()
    let check3 = check2.join("")
    return check3
}
//console.log(solution26())