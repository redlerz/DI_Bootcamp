// Exercise 1 : Favorite Color
let me = ["my","favorite","color","is","blue"]
console.log(me.join(''));


// Exercise 2 : Mixup
// Part 1

let str1 = "Good";
let str2 = "Night";

// Part 2
str1NEW = str2.slice(0,2).concat(str1.slice(2,));
str2New = str1.slice(0,2).concat(str2.slice(2,));

// Part 3
let newWord = str1NEW.concat(' ', str2New);

// Part 4

console.log(newWord);


// Exercise 3 : Calculator
alert('Please insert 2 numbers to check their sum');
var x = prompt('Please insert the first number');
var num1 = parseInt(x);

var y = prompt('Please insert the second number');
var num2 = parseInt(y);

alert('The numbers sum is ${num1 + num2}');
