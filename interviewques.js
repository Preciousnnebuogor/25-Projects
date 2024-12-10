const { Console } = require("console");

// What are the possible ways to create objects in JavaScriconst
const Property = {
  house: "building",
  car: "driving",
  money: "spending",
  Image: ["monday", "tuesday", "wednesday"],
  People() {
    return `this ${this.house} and ${this.Image.join(",")}`;
  },
};

//console.log(Property.People())

function introduce(greeting, punctuation) {
  // console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: "Alice" };

introduce.call(person, "Hello", "!");

//You can create a function which uses a chain of string methods such as charAt,
//toUpperCase and slice methods to generate a string with the first letter in uppercase.

// const Result = () => {
//   let word = "pretty";
// let check = word.charAt(0).toUpperCase() + word.slice(1)
// return check
// }
// console.log(Result())

const Result = () => {
  let word = "pretty";

  let firstLetterUpper = word.charAt(0).toUpperCase(); //p
  let arrOfWords = word.split("");

  const [a, ...restLetters] = arrOfWords;

  const finalWord = [firstLetterUpper, ...restLetters].join("");
  return finalWord;
};
//console.log(Result())

//Write a function that takes a string, splits it into words, and returns a frequency
//count of each word (how many times each word appears).

//let text = ""
const ArraryList = (text) => {
  let arrangeWords = text.split(" ");
  let frequency = {};

  arrangeWords.forEach((word) => {
    word = word.toLowerCase();

    if (frequency[word]) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  });

  return frequency;
};

let sentence = "Coming Back home for Home care place";
let result2 = ArraryList(sentence);
//console.log(result2);

function wordFrequency(text) {
  //let text = ""
  // Step 1: Split the string into words (using space as a separator)
  let arrayOfWords = text.split(" ");

  // Step 2: Create an empty object to store word counts
  let frequency = {};

  // Step 3: Loop through each word
  arrayOfWords.forEach((word) => {
    // Convert the word to lowercase for consistency
    word = word.toLowerCase();

    // Count the word by adding/updating its frequency
    if (frequency[word]) {
      // If the word is already in the object, increase its count by 1
      frequency[word]++;
      // frequency[word] = frequency[word] + 1;
    } else {
      // If the word is not in the object, add it with a count of 1
      frequency[word] = 1;
    }
  });

  return frequency; // Return the word frequency object
}

// Example usage
let textInput = "Hello world! Hello there world.";
let result = wordFrequency(textInput);
//console.log(result);

//Create a function that counts the number of vowels in a string using match().
const CountVowel = () => {
  let vowel = "The work aoney is us";
  let result = vowel.match(/[aeiou]/gi);
  return result;
};
//console.log(CountVowel())

//How can you extract domain names from a list of URLs using split() or match()?
let URLs = "https://www.example.com/path/to/page";
let resultSplit = URLs.split("//")[1]; // cuts it into 2 parts (0,and 1) and remove // and refers the first part
let domain = resultSplit.split("/")[0]; // remaove the / and returns only the first part
//console.log(domain)

//Write a function that checks if a string is a palindrome (reads the same forwards and backwards) using string methods.
const isPalindrome = (str) => {
  let normal = str.toLowerCase();
  let reverseStr = normal.split("").reverse().join("");
  return normal === reverseStr;
};
//console.log(isPalindrome('madam'))
//console.log(isPalindrome("racecar"));

// How would you write a function that takes a sentence and returns the longest word using split() and reduce()?
const sentencefun = () => {
  let sentence = "the federal government of Nigria";
  let result = sentence.split(" ");
  //console.log(result)
  let check = result.reduce((accumulator, currentValue) => {
    return currentValue.length > accumulator.length
      ? currentValue
      : accumulator;
  }, "");
  return check;
};
//console.log(sentencefun())

//Write a function that finds and replaces all occurrences of a word in a string (case insensitive)
//using a regular expression and replace().

const occurrences = () => {
  let animals = "dogs,goats,monkey,lion,dogs";
  let result = animals.replace("dogs", "elephants");
  return result;
};
//console.log(occurrences())

//How do you write a function that removes all the vowels from a string using replace() with a regular expression?

const VowelsStr = () => {
  let word = " all eggs is of utilize";
  let check = word.replace(/[aeious]/gi, "");
  return check;
};
//console.log(VowelsStr())

//Create a function that reverses a string using split(), reverse(), and join().
const ReverseWord = () => {
  let word = "uncomfortable";
  let result = word.split("").reverse("").join("");
  return result;
};
//console.log(ReverseWord())

//Write a function that capitalizes the first letter of every word in a string.
const capitalizes = () => {
  let letters = "word capital Country";
  let result = letters.split(" ").map((val) => {
    return val[0].toUpperCase() + val.split("").slice(1).join("");
  });
  return result;
};
//console.log(capitalizes());

const capitalizes2 = () => {
  let letters = "word capital Country";
  let result = letters
    .split(" ,")
    .map((letter) => {
      return letter.charAt(0).toUpperCase() + letter.slice(1);
    })
    .join("");
  return result;
};
//console.log(capitalizes2());

//How do you compare two strings (e.g., "apple" and "banana") to determine which comes first lexicographically using localeCompare()?

//	25. Write a function that removes spaces from the end of a string using trimEnd().

const Space = () => {
  let remove = "removespace         ";
  let result = remove.trimEnd();
  return result;
};
//console.log(Space())

//How can you trim only the spaces from the beginning of the string " hello world" using trimStart()?

const Space2 = () => {
  let remove = "                               removespace";
  let result = remove.trimStart();
  return result;
};
//console.log(Space2())

//Write a function that takes a string and returns its primitive value (non-object form) using valueOf().
const Primitive = () => {
  let strObject = new String("Precious");
  let result = strObject.valueOf();
  //console.log(typeof result)
  return result;
};
//console.log(Primitive())

//How do you repeat the string "abc" 5 times and create a new string using repeat()?
let word = "abc";
let repeat = word.repeat(5);
//console.log(repeat)

//How do you pad the string "5" with zeros (0) to make it "0005" using padStart()?
let pad = "5";
let check = pad.padStart(4, 0);
//console.log(check)

//Write a function that pads the string "hello" to a total length of 10 characters by adding * to the beginning, using padStart().
let pad2 = "hello";
let check2 = pad2.padStart(10, "*");
//console.log(check2)

//	How would you find all numbers in the string "I have 2 dogs and 3 cats" using match()?
let wordString = "I have 2 dogs and 3 cats";
let number = wordString.match(/[1234567890]/gi);
//console.log(number)

//Write a function that checks if the string "JavaScript is cool" contains
//the word "cool" using includes() and returns true or false.
const Contain = () => {
  let word = "JavaScript is cool";
  let result = word.includes("cool");
  return result;
};
//console.log(Contain())

//How can you check if the word "cat" exists in the sentence "I have a cat and a dog" using includes()?
let checkWord = "I have a cat and a dog";
let sentence2 = checkWord.includes("cat");
//console.log(sentence2)

//Write a function that finds the first occurrence of the letter "e" in the string "hello there" using indexOf().
const find = () => {
  let word = "hello there";
  let result = word.indexOf("e");
  return result;
};
// console.log(find())

//How do you count the number of words in a sentence using split()?
let sent = "i am doing well";
let cheek = sent.split("").length;
//console.log(cheek)

//Write a function that takes a CSV string (e.g., "name,age,city") and returns an array of the individual values.
const takes = () => {
  let word = "name,age,city";
  let result = word.split(",");
  return result;
};
// console.log(takes())

//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false

const equalValue = (word1) => {
  if (!word1.includes("o", "x")) {
    return true;
  }

  let stringArr = word1.split("");
  let obj = {};

  stringArr.forEach((letter) => {
    letter = letter.toLowerCase();

    if (obj[letter]) {
      obj[letter] = obj[letter] + 1;
    } else {
      obj[letter] = 1;
    }
  });
  // console.log(obj, stringArr);
  if (obj["x"] === obj["o"]) {
    // console.log(obj);
    return true;
  }

  return false;
};
// console.log("Expecting true", equalValue("ooxx"));
// console.log("Expecting false", equalValue("xooxx"));
// console.log("Expecting true", equalValue("ooxXm"));
// console.log("Expecting true", equalValue("zpzpzpp")); // when no 'x' and 'o' is present should return true
// console.log("Expecting false", equalValue("zzoo"));

//If the string's length is odd, return the middle character,If the string's length is even, return the middle 2 characters.
//"test" --> "es","testing" --> "t","middle" --> "dd","A" --> "A"
const strLeng = (s) => {
  // create a boolean variable to store if the str.length is an old/even nu
  if (s.length == 1) {
    return s;
  }
  let isOdd = s.length % 2 !== 0;
  if (isOdd) {
    // get the letter at the center
    const roundedNumber = Math.ceil(s.length / 2);
    return s[roundedNumber];
  } else {
    // get the two letters at the center
    const twice = s.length / 2;
    return s[twice - 1].concat(s[twice]);
  }
};
// console.log(strLeng("test"));
// console.log(strLeng("testing"));
// console.log(strLeng("middle"));
// console.log(strLeng("a"));

//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

const vowelRemoved = () => {
  let str = "This website is for losers LOL!";
  let result = str.replace(/[aeiou]/gi, "");

  return result;
};
//console.log(vowelRemoved())

//In this kata you will create a function that takes a list of non-negative
//integers and strings and returns a new list with the strings filtered out.
//filter_list([1,2,'a','b']) == [1,2]
//filter_list([1,'a','b',0,15]) == [1,0,15]
//filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
const kata = (list) => {
  let result = list.filter((value, index) => {
    return typeof value == "number";
  });
  return result;
};
// console.log(kata([1, 2, "a", "b"]));
// console.log(kata([1, "a", "b", 0, 15]));
// console.log(kata([1, 2, "aasf", "1", "123", 123]));

//Your task is to write a function maskify, which changes all but the last four characters into '#'.
//"4556364607935616" --> "############5616"
//     "64607935616" -->      "#######5616"
//               "1" -->                "1"
//                "" -->                 ""

const task = (cc) => {
  if (cc.length === 1) {
    return cc;
  } else if (cc.length === 0) {
    return "";
  } else {
    return cc.slice(0, -4).replace(/./g, "*") + cc.slice(-4);
  }
};
// console.log(task("4556364607935616"));
// console.log(task("64607935616"));
// console.log(task("1"));
// console.log(task(""));

(let = s1 = "xyaabbbccccdefww"), (s2 = "xxxxyyyyabklmopq");
const together = (s1, s2) => {
  let check = [...new Set(s1 + s2)].sort().join("");
  return check;
};
//console.log(together("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

//Complete the function that accepts a string parameter, and reverses each word in the string.
//All spaces in the string should be retained.
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

const accept = (str) => {
  let check = str
    .split(" ")
    .map((word) => {
      return word.split("").reverse().join("");
    })
    .join(" ");
  return check;
};
// console.log(accept("This is an example!"));
// console.log(accept("double  spaces"));

//n this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.
//Input = "The sunset sets at twelve o' clock."
//Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

const kate = (text) => {
  return text
    .toLowerCase()
    .split("")
    .map((word) => {
      if (word >= "a" && word <= "z") {
        return word.charCodeAt(0) - 96;
      }
      return "";
    })
    .join(" ");
};
//console.log(kate(`The sunset sets at twelve o' clock`))

//('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B'],('ABBCcAD')== ['A', 'B', 'C', 'c', 'A', 'D']
//([1,2,2,3,3])== [1,2,3]
const coword = (iterable) => {
  const array = typeof iterable === "string" ? [...iterable] : iterable; // Convert string to array
  return array.filter((value, index) => value !== array[index - 1]); // Remove sequential duplicates
};

// console.log(coword("AAAABBBCCDAABBB")); // ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(coword("ABBCcAD")); // ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(coword([1, 2, 2, 3, 3]));

//['a','b','c','d','f'] -> 'e'
//['O','Q','R','S'] -> 'P'

const letters = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
  return null;
};
// console.log(letters(["a", "b", "c", "d", "f"]));
// console.log(letters(['O','Q','R','S']))

//is_prime(1)  /* false */
//is_prime(2)  /* true  */
//is_prime(-1) /* false */

const isPrime = (num) => {
  // Prime numbers must be greater than 1
  if (num <= 1) {
    return false;
  }
  // Check divisors up to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true; // No divisors found, it's prime
};
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(-1));

//"Hey fellow warriors"  --> "Hey wollef sroirraw"
//"This is a test        --> "This is a test"
//"This is another test" --> "This is rehtona test"

const five = (string) => {
  let result = string.split(" ").map((value, index) => {
    if (value.length >= 5) {
      return value.split("").reverse().join("");
    } else {
      return value;
    }
  });
  return result.join(" ");
};
// console.log(five("Hey fellow warriors"))
// console.log(five("This is a test "));
// console.log(five("This is another test"));

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
const phone = (number) => {
  const phonenumber = `(${number.slice(0, 3).join("")})  ${number
    .slice(3, 6)
    .join("")} - ${number.slice(6).join("")}`;

  return phonenumber;
};
// console.log(phone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//The binary number returned should be a string.
//Examples:(Input1, Input2 --> Output (explanation)))
//1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
//5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

const number1 = (a, b) => {
  let total = a + b;
  return total.toString(2);
};
// console.log(number1(1,1))
// console.log(number1(5,9))

const solution = () => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += 1;
    }
  }
  return sum;
};
//console.log(solution(10));

//[]                                -->  "no one likes this"
//["Peter"]                         -->  "Peter likes this"
//["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

const likes = (names) => {
  if (names.length === 0) {
    return `no one likes this`;
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} likes this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]}, ${names[2]} likes this`;
  } else {
    return `${names[0]}, ${names[1]} , and  ${
      names.length - 2
    } others like this`;
  }
};
// console.log(likes([]))
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

//Complete the solution so that the function will break up camel casing, using a space between words.
//"camelCasing"  =>  "camel Casing"
//"identifier"   =>  "identifier"
//""             =>  ""

const breakCamelCase = (string) => {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
};
// console.log(breakCamelCase("camelCasing")); // "camel Casing"
// console.log(breakCamelCase("identifier")); // "identifier"
// console.log(breakCamelCase(""));

//If a value is present in b, all of its occurrences must be removed from the other:
//arrayDiff([1,2,2,2,3],[2]) == [1,3]

const press = (a, b) => {
  let result = a.filter((value) => !b.includes(value));
  return result;
};
//console.log(press([1, 2, 2, 2, 3], [2]));

//[1,2,2,3,3,3,4,3,3,3,2,2,1]
const numbers = (arr) => {
  const freqMap = {};

  arr.forEach((num) => {
    freqMap[num] = (freqMap[num] || 0) + 1;
  });

  for (let num in freqMap) {
    if (freqMap[num] % 2 !== 0) {
      return parseInt(num);
    }
  }
};
//console.log(numbers([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

//highAndLow("1 2 3 4 5"); // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"

// const higher = (numbers) => {
//   const result = numbers.split(' ').map((Number))
//   let highest = -infinity,
//   let lowest = Infinity;

//   result.forEach(number => {
//     if(number > highest) {
//       return highest
//     }
//     if(number < lowest) {
//       return lowerest
//     }
//   });
//   return (highest, lowerest)
// }
// console.log(numbers("1 2 3 4 5"))
// console.log(numbers("1 2 -3 4 5"))
// console.log(numbers("1 9 3 4 -5"))

const findHighAndLow = (str) => {
  let numbers = str.split(" "); // Split by spaces and convert to numbers
  let min = Math.min(...numbers); // Find the smallest number
  let max = Math.max(...numbers); // Find the largest number
  return `${max} ${min}`; // Format the result as a string
};

// console.log(findHighAndLow("1 9 3 4 -5")); // { highest: 9, lowest: -5 }
// console.log(findHighAndLow("10 20 30 5 1"));

//1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
//4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

const logs = (start, end) => {
  let numberCount = 0;
  for (let i = start; i <= end; i++) {
    let numString = i.toString();
    if (numString.includes("5")) {
      continue;
    }
    numberCount = numberCount + 1;
  }
  return numberCount;
};

//console.log(logs(1,9));
//console.log(logs(4,17));

//"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
const sort = (words) => {
  let numbers = words
    .split(" ")
    .sort((a, b) => a.match(/\d+/) - b.match(/\d+/))
    .join(" ");
  return numbers;
};
// )console.log(sort("is2 Thi1s T4est 3a"))
// console.log(sort("4of Fo1r pe6ople g3ood th5e the2")

//[1,2,3,4,5] --> [1,5]
//[2334454,5] --> [5,2334454]
//[1]         --> [1,1]
const go = (arr) => {
  return [Math.min(...arr), Math.max(...arr)];
};
// console.log(go([1, 2, 3, 4, 5]));
// console.log(go([2334454, 5]));
// console.log(go([1]));

function minMax(arr) {
  var min = (max = arr[0]);
  arr.forEach((x) => {
    if (x < min) min = x;
    if (x > max) max = x;
  });
  return (result = [min, max]);
}
// console.log(go([1, 2, 3, 4, 5]));
// console.log(go([2334454, 5]));
// console.log(go([1]));

// Input = ["Ryan", "Kieran", "Jason", "Yous"];
// Output = ["Ryan", "Yous"];

// Input = ["Peter", "Stephen", "Joe"];
// Output = [];

const output = (friends) => {
  let result = friends.filter((friend) => friend.length === 4);
  return result;
};
// console.log(output(["Ryan", "Kieran", "Jason", "Yous"]));
// console.log(output(["Peter", "Stephen", "Joe"]));

["Telescopes", "Glasses", "Eyes", "Monocles"];

const arrange = (array) => {
  let result = array.sort((a, b) => a.length - b.length);
  return result;
};
//console.log(arrange(["Telescopes", "Glasses", "Eyes", "Monocles"]));

//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false

const chec = (str, ending) => {
  let result = str.endsWith(ending);
  return result;
};
// console.log(chec('abc','bc'))
// console.log(chec("abc", "d"));

//"abcde" -> 0 # no characters repeats more than once
//"aabbcde" -> 2 # 'a' and 'b'
//"aabBcde" -> 2
const countDuplicates = (input) => {
  const lowerCased = input.toLowerCase();
  const charFrequency = {};

  // Count the frequency of each character
  for (let char of lowerCased) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Count characters with frequency > 1
  const duplicateCount = Object.values(charFrequency).filter(
    (count) => count > 1
  ).length;

  return duplicateCount;
};

// Test Cases
// console.log(countDuplicates("abcde")); // Output: 0
// console.log(countDuplicates("aabbcde")); // Output: 2 ('a' and 'b')
// console.log(countDuplicates("aabBcde")); // Output: 2 ('a' and 'b')
// console.log(countDuplicates("indivisibility")); // Output: 1 ('i')
// console.log(countDuplicates("Indivisibilities")); // Output: 2 ('i' and 's')
// console.log(countDuplicates("aA11")); // Output: 2 ('a' and '1')
// console.log(countDuplicates("ABBA")); // O

//[] --> []
//["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

var numberal = function (array) {
  return array.map(function (line, index) {
    return index + 1 + ": " + line;
  });
};
// console.log(numberal([]))
//console.log(numberal(["a", "b", "c"]))

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

const equal = (a, b) => {
  if (a === b) {
    return a;
  } else {
    return a + b;
  }
};
// console.log(equal(1,0))
// console.log(equal(1,2));
// console.log(equal(0,1));
// console.log(equal(1,1));
// console.log(equal(-1,0));
// console.log(equal(-1,2));

//'abc' =>  ['ab', 'c_']
//'abcdef' => ['ab', 'cd', 'ef']
const solve = (str) => {
  let pairs = []; // Step 1: Create an empty array to store the pairs
  for (let i = 0; i < str.length; i += 2) {
    let pair = str.slice(i, i + 2);
    if (pair.length < 2) {
      pair += "_";
    }
    pairs.push(pair);
  }
  return pairs;
};
// console.log(solve('abc'))
// console.log(solve('abcdef'));

// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

const input = (n) => {
  let str = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  let result = parseInt(str);
  return result;
};
// console.log(input(42145));
// console.log(input(145263));
// console.log(input(123456789));

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

const mono = (n) => {
  return Math.ceil(n / 5) * 5;
};
// console.log(mono(0))
// console.log(mono(2));
// console.log(mono(3));
// console.log(mono(12));
// console.log(mono(21));
// console.log(mono(30));
// console.log(mono(-2));
// console.log(mono(-5));

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
const come = (numbers) => {
  //return str.reduce((x, y) => x ^ y);
  return numbers.find(
    (num) => numbers.indexOf(num) === numbers.lastIndexOf(num)
  );
};
// console.log(come([1,1,2]))

//"hello case" --> "HelloCase"
//"camel case word" --> "CamelCaseWord"

const camel = (numbers) => {
  let result = numbers
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
  return result;
};
// console.log(camel('hello case'))
// console.log(camel('camel case word'))

//"foefet" is an anagram of "toffee"
//"Buckethead" is an anagram of "DeathCubeK"

const isAnagram = function (test, original) {
  const isValid =
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("");

  return isValid;
};
// console.log(isAnagram("Foefet", "toffee"));
// console.log(isAnagram("Buckethead", "DeathCubeK"));

//aba => {'a': 2, 'b': 1}
const count = (str) => {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
};
// console.log(count('aba'))
// console.log(count(''))

// Input: [1,2,3,4,5], output = [2,3,4,5]
// Input: [5,3,2,1,4], output = [5,3,2,4]
// Input: [2,2,1,2,1], output = [2,2,2,1]
const workup = (numbers) => {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
};
// console.log(workup([1, 2, 3, 4, 5]));
// console.log(workup([5, 3, 2, 1, 4]));
// console.log(workup([2, 2, 1, 2, 1]));

//"www.codewars.com#about" --> "www.codewars.com"
//"www.codewars.com?page=1" -->"www.codewars.com?page=1"
const websit = (url) => {
  return url.replace(/#.*/gi, "");
};
// console.log(websit('www.codewars.com#about'))
// console.log(websit('www.codewars.com?page=1'))

//"String" => "StRiNg"
//"Weird string case" => "WeIrD StRiNg CaSe"

const worddy = (string) => {
  let result = string
    .match(/[aeiou]/gi)
    .toLowerCase()
    .join("")
    .toUpperCase();
  return result;
};
//console.log(worddy('String'))

//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.

const vowel2 = (str) => {
  return (str.match(/[aeiou]/gi) || "").length;
  //return str.replace(/[^aeiou]/gi, '').length
};
//console.log(vowel2('abcdefr'))

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

const numbs = (a, b, operator) =>
  ({
    add: a + b,
    subtract: a - b,
    divide: a % b,
    multiply: a * b,
  }[operator]);
// console.log(numbs(5, 2, 'add'));        // 7
// console.log(numbs(5, 2, 'subtract'));   // 3
// console.log(numbs(5, 2, 'divide'));     // 2.5
// console.log(numbs(5, 2, 'multiply'));

//"the-stealth-warrior" gets converted to "theStealthWarrior"
//"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

const uppercase = (str) => {
  let result = str
    .split(/[-_]/gi)
    .map((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    })
    .join("");
  return result;
};
// console.log(uppercase("the-stealth-warrior"));

const transformToCamelCase = (str) => {
  return str
    .split(/[-_]/) // Split the string by "-" or "_"
    .map(
      (word, index) =>
        index === 0
          ? word.toLowerCase() // Keep the first word lowercase
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize subsequent words
    )
    .join(""); // Join words without delimiters
};

// console.log(transformToCamelCase("the-stealth-warrior")); // "theStealthWarrior"
// console.log(transformToCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"
// console.log(transformToCamelCase("The_Stealth-Warrior")); // "TheStealthWarrior"

//"1234"   -->  true
//"12345"  -->  false
//"a234"   -->  false

// const checked = (str) => {
//   if (str.toString().includes("-")) {
//     return false;
//   }
//   let result = str.match(/[1234567890]/gi).join("");
//   if (result.length == 4) {
//     return true;
//   } else if (result.length == 6) {
//     return true;
//   } else {
//     return false;
//   }
// };

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
//   console.log(validatePIN("1234"));
//  console.log(validatePIN("12345"));
//  console.log(validatePIN("a234"));
// console.log(validatePIN("-1234"));

function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}

//[1, 2, 10, 8] --> [8, 10]
//[1, 5, 87, 45, 8, 8] --> [45, 87]
//[1, 3, 10, 0] --> [3, 10]
function twoOldest(age) {
  let result = age.sort((a, b) => a - b).slice(-2);
  return result;
}
// console.log(twoOldest([1, 2, 10, 8]));
// console.log(twoOldest([1, 5, 87, 45, 8, 8]));
// console.log(twoOldest([1, 3, 10, 0]));

// Given a two-dimensional array of integers, return the flattened version of the array with
// all the integers in the sorted (ascending) order.
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

const sorted = (arr) => {
  let result = arr.flat().sort((a, b) => a - b);
  return result;
};
// console.log(sorted([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);
// console.log(binaryArrayToNumber([0, 0, 0, 1]));
// console.log(binaryArrayToNumber([0, 0, 1, 0]));
// console.log(binaryArrayToNumber([1, 0, 0, 1]));
// console.log(binaryArrayToNumber([0, 0, 1, 0]));
// console.log(binaryArrayToNumber([0, 1, 1, 0]));

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]
const set = (even) => {
  let check = even.filter((value) => {
    return value % 2 == 0;
  });
  return check;
};
//console.log(set([2, 4, 5, 6]));

const getEvenNumbers = (numbersArray) =>
  numbersArray.filter((num) => num % 2 == 0);
//console.log(getEvenNumbers([2, 4, 5, 6]));

//([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
//([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
//([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
const numArr = (arr, number) => {
  let result = arr.filter((item) => item % 2 == 0).slice(-number);
  return result;
};
// console.log(numArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// console.log(numArr([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
// console.log(numArr([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));

//Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

const removeDouble = (letters) => {
  // let result = letters
  //   .split(" ")
  //   .filter((word, index, array) => array.indexOf(word) === index)
  //   .join(" ");
  // return result;

  let result = [...new Set(letters.split(' '))].join(' ')
  return result
};
// console.log(
//   removeDouble(
//     "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//   )
// );
//const removeDuplicateWords = (s) => [...new Set(s.split(" "))].join(" ");


// const upperWord = (string) => {
//   let word = string.split(' ').map((char,index)=>{
//    index % 2 === 0 ? char.toUpperCase() : char.toLowerCase() 
//   }).join('')
// }

function toWeirdCase(string) {
  return string
    .split(" ") // Split the string into words
    .map(
      (word) =>
        word
          .split("") // Split each word into characters
          .map((char, index) =>
            index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
          ) // Alternate uppercase and lowercase
          .join("") // Rejoin the characters into a word
    )
    .join(" "); // Rejoin the words into a single string
}
//console.log(toWeirdCase("stringuuu"));

const numbersLine = (a,b) => {
  let result = a.
}

