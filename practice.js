//Write a function that removes the first and last character from a string using slice().

const solution = () => {
  let prick = "money man";
  let check = prick.slice(0, 4);
  return check;
};

//How would you replace the word "brown" with "red" in the string "The quick brown fox" using replace()?
const solution2 = () => {
  let check = "brown";
  let result = check.replace("brown", "red");
  return result;
};

//Write a function that splits the string "apple,banana,grape" into an array of fruits using split().
const solution3 = () => {
  let check1 = "apple,banana,grape";
  let result2 = check1.split(",");
  return result2;
};

//Given a sentence "JavaScript is fun", split it into an array of words. How do you join the words back together using join()?
const solution4 = () => {
  let check2 = "JavaScript is fun";
  let result3 = check2.split(",");
  let result4 = result3.join();
  return { result3, result4 };
};

//How do you count the number of words in a sentence using split()?
const solution5 = () => {
  let check3 = "JavaScript";
  let result = check3.split("");
  return { result };
};

//Write a function that finds the first occurrence of the letter "e" in the string "hello there" using indexOf().
const solution6 = () => {
  let check4 = "hello there";
  let result5 = check4.indexOf("e");
  return result5;
};

//How can you check if the word "cat" exists in the sentence "I have a cat and a dog" using includes()?
const solutions7 = () => {
  let check5 = "I have a cat and a dog";
  let result6 = check5.includes("cat");
  return result6;
};

//Write a function that checks if the string "JavaScript is cool" contains the word "cool" using includes() and returns true or false.
const solution8 = () => {
  let check8 = "JavaScript is cool";
  let result8 = check8.includes("cool");
  return result8;
};
//How would you find all numbers in the string "I have 2 dogs and 3 cats" using match()?
const solution9 = () => {
  let check9 = "I have 2 dogs and 3 cats";
  let result9 = check9.match(/cats/);
  return result9;
};

//Write a function that pads the string "hello" to a total length of 10 characters by adding * to the beginning, using padStart().
const solution10 = () => {
  let check9 = "hello";
  let result9 = check9.padStart(10, "*");
  return result9;
};

//How do you pad the string "5" with zeros (0) to make it "0005" using padStart()?
const solution11 = () => {
  let check9 = "5";
  let result9 = check9.padStart(4, "0");
  return result9;
};

//Write a function that takes a string and repeats it 3 times using repeat().
const solution12 = () => {
  let check9 = "hello";
  let result9 = check9.repeat(3);
  return result9;
};

//How do you repeat the string "abc" 5 times and create a new string using repeat()?
const solution13 = () => {
  let check9 = "abc";
  let result9 = check9.repeat(5);
  return result9;
};

//Write a function that takes a string and returns its primitive value (non-object form) using valueOf().
const solution14 = () => {
  let check9 = "meaning";
  let result9 = check9.valueOf();
  return result9;
};

//How can you trim only the spaces from the beginning of the string " hello world" using trimStart()?
const solution15 = () => {
  let check9 = "    meaning";
  let result9 = check9.trimStart();
  return result9;
};
//	25. Write a function that removes spaces from the end of a string using trimEnd().
const solution16 = () => {
  let check9 = "startship                          ";
  let result9 = check9.trimEnd();
  return result9;
};

//How would you find the Unicode value of the character "A" using charCodeAt()?
const solution17 = () => {
  let check9 = "character";
  let result9 = check9.charCodeAt(2);
  return result9;
};
//How do you compare two strings (e.g., "apple" and "banana") to determine which comes first lexicographically using localeCompare()?

//Write a function that capitalizes the first letter of every word in a string.
const solution18 = () => {
  let check9 = "i am precious nnebuogor";
  let listOfStrings = check9.split(" ");
  let listOfCapitalizedStrings = listOfStrings.map((astring, i) => {

    if (astring.length == 1) {
      return astring.toUpperCase();
    }

    const [firstLetter, ...restLetters] = astring.split("");
    const arrayList = [firstLetter.toUpperCase(), ...restLetters];
    return arrayList.join("");
  });
  const formattedString = listOfCapitalizedStrings.join(" ");

  return formattedString;
};

//Create a function that reverses a string using split(), reverse(), and join().
const solution19 = () => {
    let check = "coward bitch"
    let result = check.split(" ")
    let result2 = result.reverse()
    let result3 = result2.join()
    return result2
}

let body = "i am okay"
let stringObject = new String("Hello");

//object
let person = {
  name: "Precious",
  greet: function() {
    //console.log("Hello, my name is " + this.name);
  }
};

person.greet(); 

//Array
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  //console.log(fruits[i]);
}

let arr = new Array(3);
//console.log(arr)

//forEach
let fruites = ["apple", "banana", "orange"];

fruits.forEach(function (fruit) {
  //console.log(fruit); // Prints each fruit
});

//for loop
let fruits1 = ["apple", "banana", "orange"];

for (let i = 0; i < fruits1.length; i++) {
  //console.log(fruits1[i]); 
}

let numbers = [1,2,3,4,5,6,7]
for (let i=2; i < numbers.length; i++) {
    //console.log(numbers[i]*2)
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
   // console.log(i)
  }
}
let book = [1,2,3,4,5,6,7,8,9]
for (let i = 2; i <= book.length; i++) {
    if (i % 2 === 0) {      //modulus
   //     console.log(i)
    }
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
   // console.log(i + " is even");
  } else {
  //  console.log(i + " is odd");
  }
}

for (let i = 1; i <= 10; i++) {
  if (i % 4 === 0) {
    continue; // Skip the iteration if the number is divisible by 4
  }
  console.log(i); // Prints numbers but skips 4 and 8
}

//console.log(typeof stringObject);
