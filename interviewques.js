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
  let check = str.split(" ").map((word) => {
  return  word.split('').reverse().join('')
  }).join(' ')
  return check;
};
// console.log(accept("This is an example!"));
// console.log(accept("double  spaces"));

//n this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.
//Input = "The sunset sets at twelve o' clock."
//Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

const kate = (text) => {
return text.toLowerCase().split('').map((word)=> {
 if (word >= 'a' && word <= 'z') {
 return word.charCodeAt(0) - 96;
 }
 return ''
}).join(' ')
}
console.log(kate(`The sunset sets at twelve o' clock`))