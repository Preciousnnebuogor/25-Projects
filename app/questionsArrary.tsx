"use client";
//list of questions a beginner can use to practice string methods in JavaScript.

//Write a function that takes a string and returns the length of the string.
let Question1 = "money, car, house, school";
let check1 = Question1.length;
console.log(check1);

//How do you convert the string "hello" to uppercase and "WORLD" to lowercase?
let Question2 = "hello";
let check2 = Question2.toUpperCase();
console.log(check2);

//Write a function that takes a string and removes leading and trailing spaces using trim().
let Question3 = " learning       ";
let check3 = Question3.trim();
console.log(check3);

//Given a string "The quick brown fox", how do you find the position of the word "quick" using indexOf()?
let Question4 = "The quick brown fox";
let checked4 = Question4.indexOf("quick");
console.log(checked4);

//Write a function that checks if a string starts with the word "Hello" using startsWith().
let Question5 = "Hello from here";
let checked5 = Question5.startsWith("Hello");
console.log(checked5);

//How do you check if a string ends with the word "world!" using endsWith()?
let Question6 = "Hwllo World!";
let checked6 = Question6.endsWith("World!");
console.log(checked6);

//Write a function that extracts the first three characters of a string using substring().
let Question7 = "The quick brown fox";
let checked7 = Question7.substring(0, 4);
console.log(checked7);

//Write a function that removes the first and last character from a string using slice().
let Question8 = "Incredential work fail";
let checked8 = Question8.slice(0, 12);
let checked8b = Question8.slice(18, 22);
console.log(checked8);
console.log(checked8b);

//Write a function that removes the first and last character from a string using slice().

export default function Question() {
  const Question9 = "The book is gone";
  const checked9 = Question9.slice(0, 3);
  const checkedb = Question9.slice(12, 16);
  return (
    <div>
      {checked9}
      {checkedb}
    </div>
  );
}
