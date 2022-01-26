// Exercise 1

// part 1
// Question 1

let infoAboutMe = () => {
    console.log("My name is Shachar and I am 37 yo. and I think I like to code.")
};
infoAboutMe();

// Part 2

let infoAboutPerson = (personName, personAge, personFavoriteColor) => {
    console.log(`Your Name is ${personName}, you are ${personAge} and your favorite color is ${personFavoriteColor}`)
};
infoAboutPerson("Michael", 22, "Orange");
infoAboutPerson("Haim", 72, "White");


// Exercise 2 

let calculateTip = () => {
    let  bill = parseInt(prompt('How much is the bill?'));

    let tip = 0;
    if (bill < 50) {
        tip = bill * 1.2
    } else if (bill > 50 && bill < 200) {
        tip = bill * 1.15
    } else {
        tip = bill * 1.1
    }
    return (`Tip is ${tip} and bill is{bill}`)
};
calculateTip();

// Exercise 3

let isDivisible = () => {
    let divisible = [];
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            divisible.push(i);
        }
    }

    return divisible
}

isDivisible();


// Exercise 4
let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

// // Question 2
// let shoppingList = ['banana', 'orange', 'apple'];

// // Question 3,4,5 ** Not sure

// let myBill = () => {
//     totalPrice = 0;
//     for (let i = 0; i < shoppingList.length; i++) {
        
        
//         }
//     }
//     return totalPrice



// myBill();

// Exercise 5




// Exercise 6 

function hotelCost(){
    let totalCost = 0;
    let duration = "";
    do {
        duration = prompt("How many nights would you like to stay for?");
    } while(!isNumber(duration));

    function isNumber() {
        let containsOnlyDigits = /^[0-9]+$/; // one or more of digits 0 to 9
        return containsOnlyDigits.test(duration);
    } 
    return totalCost = (`${duration*140}$`);
}
//  console.log(hotelCost());

function planeRideCost(){
 let destination = "";
 do {
     destination = prompt("Where would you like to travel to?");
 } while(!isString(destination));

 function isString(){
     let containsOnlyLetters = /^[a-z+A-Z+" "]+$/;
     return containsOnlyLetters.test(destination);
 }
 if (destination == "London"){
     return 'London: 183$'
 } else if (destination == "Paris"){
     return 'Paris: 220$'
 } else {
     return 'All other destinations: 300$'
 }
 
}
//  console.log(planeRideCost());

function rentalCarCost(){
let totalRentCost = 0;
let durationOfRent = "";
do {
    durationOfRent = prompt("How many nights would you like to rent a car for?");
} while(!isNumber(durationOfRent));

function isNumber() {
    let containsOnlyDigits = /^[0-9]+$/; // one or more of digits 0 to 9
    return containsOnlyDigits.test(durationOfRent);
} 
if (durationOfRent > 10) {
    return totalRentCost = (`${durationOfRent*40}`)-(`${durationOfRent*40}`*0.05); 
} else {
return totalRentCost = (`${durationOfRent*40}$`);
}
}

//  console.log(rentalCarCost());

function totalVacationCost(){
 vacationCostTotal =
`The hotel costs ${hotelCost()},
the plane ride to ${planeRideCost()}, 
And the car rental is ${rentalCarCost()}.`;
 return vacationCostTotal;
 
}

console.log(totalVacationCost()) ;