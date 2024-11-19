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
  let result = letters.split(" ,").map(letter => {
    return letter.charAt(0).toUpperCase() + letter.slice(1)
  }).join('');
  return result;
};
//console.log(capitalizes2());

//How do you compare two strings (e.g., "apple" and "banana") to determine which comes first lexicographically using localeCompare()?

//	25. Write a function that removes spaces from the end of a string using trimEnd().

const Space = () => {
  let remove = "removespace         "
  let result = remove.trimEnd()
  return result
}
//console.log(Space())

//How can you trim only the spaces from the beginning of the string " hello world" using trimStart()?

const Space2 = () => {
  let remove = "                               removespace";
  let result = remove.trimStart();
  return result;
}
//console.log(Space2())

//Write a function that takes a string and returns its primitive value (non-object form) using valueOf().
const Primitive = () => {
  let strObject = new String("Precious")
  let result = strObject.valueOf()
  //console.log(typeof result)
  return result
}
//console.log(Primitive())

//How do you repeat the string "abc" 5 times and create a new string using repeat()?
let word = "abc"
let repeat = word.repeat(5)
//console.log(repeat)

//How do you pad the string "5" with zeros (0) to make it "0005" using padStart()?
let pad = "5"
let check = pad.padStart(4,0)
//console.log(check)

//Write a function that pads the string "hello" to a total length of 10 characters by adding * to the beginning, using padStart().
let pad2 = "hello"
let check2 = pad2.padStart(10,'*')
//console.log(check2)

//	How would you find all numbers in the string "I have 2 dogs and 3 cats" using match()?






