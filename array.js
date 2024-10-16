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
console.log(evenNumbers);

//filter()
let numbers2 = [5, 12, 8, 130, 44];

let filteredNumbers = numbers2.filter(function (number) {
  return number > 10;
});

let NO = [5,12,8,130,44]
let result = NO.filter((value,index) => {
    return value > 10
})

let numbers3 = [5, 12, 8, 130, 44];
let filteredNumbers3 = numbers3.filter((number) => number > 10);
console.log(filteredNumbers3);  
//console.log(result);

let evenNumbers3 = numbers.filter(function (number) {
  return number % 2 === 0; // Check if the number is even
});
console.log(evenNumbers3);  
