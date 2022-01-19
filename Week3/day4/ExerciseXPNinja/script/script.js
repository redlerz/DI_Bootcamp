// Exercise 1 : Age Difference
let person1 = 1963;
let person2 = 1992;

let now = new Date();

let person1age = now.getFullYear()-person1;
let person2age = now.getFullYear()-person2;

if ((person1age / 2) == person2age) {
        alert("Peron 1 age is double the age of person 2")
} else {

        alert("Person 1 age is not double the age of person 2")
}



// Exercise 2 : Zip Codes
let clientZipCode = prompt("Please enter your zip code");
while (clientZipCode.length !==5 || isNan(clientZipCode) == true) {
    alert("Please enter your zip code!")
    clientZipCode = prompt("What's your zip code");
};