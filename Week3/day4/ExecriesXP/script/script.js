// Exercise 1: Simple If/Else Statement

// Question 1

let x = 10;
let y = 5;

// Question 2

if (x > y) {
console.log('X is the bigger number')

};


// Exercise 2: Chihuahua

// Question 1

let newDog = "Chihuahua";

// Question 2

let letterCount = newDog.length;
console.log(`newDog letter count is ${letterCount}`);

// Question 3

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

// Question 4

if (newDog = "Chihuahua") {

    console.log('I love Chihuahuas, its my favorite dog breed')
} else {
    console.log('I dont care, I prefer cats')
};

// Exercise 3: Even Or Odd

// Question 1

let userPick = prompt('Please pick a number')

// Question 2

 if (userPick % 2 == 0) {

    alert(`${userPick} is an even number`)
 } else {

    alert(`${userPick} is a odd number`)
 };


//  Exercise 4: Group Chat

// Question 1

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

    if (users.length === 0) {
        console.log("No users are online")
    } else if (users.length === 1 ) {
        console.log(users[0] + " is online")
    } else if (users.length === 2) { 
        console.log(`${users[0]}, ${users[1]} are online`);
    } else {
        console.log(`${users[0]}, ${users[1]} and ${users.length-2} more are online`)
    }