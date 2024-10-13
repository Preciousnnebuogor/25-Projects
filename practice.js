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
  return {result3, result4}
};

//How do you count the number of words in a sentence using split()?
const solution5 = () => {
  let check3 = "JavaScript";  
  let result = check3.split("")
  return {result}
}

//Write a function that finds the first occurrence of the letter "e" in the string "hello there" using indexOf().
const solution6 = () => {
    let check4 = "hello there"; 
    let result5 = check4.indexOf("e")
    return result5
}

//How can you check if the word "cat" exists in the sentence "I have a cat and a dog" using includes()?
console.log(solution6());
