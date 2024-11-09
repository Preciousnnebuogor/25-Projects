// What are the possible ways to create objects in JavaScriconst
const Property = {
    house: "building",
    car: "driving",
    money: "spending",
    Image: [
    "monday", "tuesday", "wednesday"
    ],
     People () {
       return `this ${this.house} and ${this.Image.join(",")}`
     }
}

//console.log(Property.People())

function introduce(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: "Alice" };

introduce.call(person, "Hello", "!");

