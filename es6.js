var a = 6; // function scope
let b = 7; // block scope

function aFunction() {
  var i = 5;
  for (let j = 0; j < 10; j++) {
    let j = 8;
  }
}

const c = 10; // constant
const obj = {
  name: "Duc"
};

obj = { name: "Not Duc" }; // Throw error
obj.name = "Not Duc";

function sayHello() {
  console.log("Hello");
}

const anotherSayHello = function() {
  console.log("Hello");
};

const printANumber = function(number) {
  console.log(number);
};

const addNumbers = (a, b) => a + b;

const arrowPrintNumber = number => console.log(number);

const addTen = number => number + 10;
const addEight = number => number + 8;

const addElevent = createAddFunction(11);

// Currying
const createAddFunction = number1 => number2 => number1 + number2;
// middleware

const username = "VAT";
const string1 = "Hello" + username + ", today is a nice day!";
const string2 = `Hello2 ${username}, today is a nice day!`;
const age = 29;
console.log(`You are ${age > 30 ? "old" : "young"}`); // ternary operator
// Big 3 function
// map()
// filter()
// reduce()
const numbers = [1, 3, 4, 7];
// var doubles = [];
// for (var i = 0; i < numbers.length; i++) {
//   doubles.push(numbers[i] * 2);
// }

const doubles = numbers.map(number => number * 2);
const playlist = ["Lac Troi", "Em cua ngay hom qua"];

const display = playlist.map(song => <Text>{song}</Text>);
const fav = playlist.filter(song => song.includes("Troi"));
const sum = numbers.reduce((sum, number) => number + sum);
// (0, 1) => 1+0
// (1, 3) => 3+1
// (4, 4) => 4+4
// (8, 7) => 8+7
// sum == 15;
