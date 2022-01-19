// Exercise 1 : Divisible By Three
let numbers = [123, 8409, 100053, 333333333, 7]

// Question 1 + 2 
numbers.forEach(number => {
    if (number % 3 === 0) {
    
    }    
console.log(`${number} true`)
});

// Exercise 2 : Attendance
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
};

// Question 1
let userName = prompt('What is your name please');

// Question 2
if (userName in guestList) {
    console.log(`Hi! I'm ${userName}, and I'm from ${guestList[userName]}`)
// Question 3
} else {
    console.log("Hi! I'm a guest")
};


// Exercise 3 : Playing With Numbers
let age = [20, 5, 12, 43, 98, 55];

// Question 1 - **Not sure


// Question 2
highestAge = 0;
for (i = 0; i < age.length; i++) {
    if (age[i] > highestAge) {
        var highestAge = age[i];
    }
};
console.log(highestAge);