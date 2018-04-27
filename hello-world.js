// console.log("Hello World!");
var a = 6;
// console.log(typeof a);
var b = null;
// console.log(typeof b);

var aString = "String 1";
var anotherString = "String 2";

// console.log(typeof aString);
// console.log(typeof anotherString);

var bool = true;
// typed value
console.log(typeof bool); // boolean
bool = "Hello";
console.log(typeof bool); // string

var anObject = {
  name: "My Object",
  size: 6
};
// console.log(anObject.name);

// Javascript Object Notation

var anArray = [4, 5, 6];
// console.log(anArray);
/*
  {
    "1" : 4,
    "2" : 5,
    "3" : 6,
    "4" : 7,
    length: 4
  }
*/
// console.log(anArray["1"]);

// console.log("helloWorld".toUpperCase());
// new String("helloworld").toUpperCase();
// console.log(new Date().toLocaleDateString());

anObject.saySomething = function() {
  console.log("Hey there!");
};
// First-class Function
// anObject.saySomething();
anObject.anotherSaySomething = anObject.saySomething;
// anObject.anotherSaySomething();

// callback
function wait1SecAndSay(callback) {
  setTimeout(callback, 1000);
}

// wait1SecAndSay(anObject.saySomething);
// wait1SecAndSay(function() {
//   console.log("Something");
// });

function waitAndCount(i, time) {
  setTimeout(function() {
    console.log(i);
  }, time * 1000);
}

function countDown(number) {
  for (var i = number; i >= 0; i--) {
    waitAndCount(i, number - i);
  }
}

countDown(6);

function countDown2(number) {
  console.log(number);
  
  if (number > 0) {
    setTimeout(function() {
      countDown2(number - 1);
    }, 1000);
  }
}

countDown2(6);
