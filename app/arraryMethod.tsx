"use client";

export default function ArraryMethod() {
  let csvData = "name,age,location";
  console.log(csvData.split(","));
  let result = csvData;

  //split()
  let date = "2024-10-10";
  console.log(date.split("-"));
  let parte = date;

  //trim()
  let text = "NoSpasHere";
  let space = text.trim();
  console.log(space);

  //startWith()
  let word = "Hello, world!";
  console.log(word.startsWith("Hello"));
  console.log(word.startsWith("world"));

  //repeat()
  let access = "Hi! ";
  let repeatedText = access.repeat(3);
  console.log(repeatedText);

  let stars = "*".repeat(5);
  console.log(stars);

  //match()
  let sentence = "The sun sets in the west sun sun.";
  let show = sentence.match(/sun/gi);
  console.log(show);

  let show2 = "John's phone number is 123-456-7890";
  let numbers = show2.match(/\d+/g); // finds all numbers
  console.log(numbers); // ["123", "456", "7890"]

//search()
  let come = "I love cats and dogs.";
  let index = come.search(/cats|dogs/);
  console.log(index); // 7 (position of "cats")

  let come1 = "Learning JavaScript is fun!";
  let index2 = come1.search("JavaScript");
  console.log(index2);

  //substring()
  let text2 = "JavaScript";
  let part = text2.substring(0, 4);
  console.log(part);

  //padStart
  let text3 = "Hello";
  let paddedText = text3.padStart(10);
  console.log(paddedText);

  let number = "5";
  let paddedNumber = number.padStart(3, "0");
  console.log(paddedNumber);

  //padEnd()
  let product = "Apple";
  let paddedProduct = product.padEnd(10, ".");
  console.log(paddedProduct);

  return <div>{parte.split("-")}</div>;
}
