// Exercise 1 : Scope
// #1
function q1() {
    var a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(a);
}
//predicton  3
//Actual 1


//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

//predicton  5
//Actuallet 

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

//predicton  hello
//Actual hello


//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}


//predicton  1
//Actual 1


//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

//predicton  5
//Actual 5



// Exercise 2 : Ternary Operator
// 1. Transform the winBattle() function to an arrow function.
function winBattle() {
    return true;
}

let winbattle = () => true;

// 2. Create a variable called experiencePoints.

let experiencePoints = true;


// 3. Assign to this variable, a ternary operator. If winBattle() is true,
//  the experiencePoints variable should be equal to 10, 
// else the variable should be equal to 1.

experiencePoints = () => winBattle ? 10 : 1
console.log(experiencePoints())

// Exercise 3 : Is It A String ?

function isString(input) {
    return typeof input === 'string'
}

// Exercise 4 : Colors
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1
colors.forEach((color, index) => {
    console.log(`#${index + 1} choice is ${color}.`)
})

// 2 
    
    for (let index = 0; index < colors.length; index++) {
        console.log(index);

        if (colors.includes("Violet", [6])) {

            console.log("Yeah");
        } else {

            console.log("No...")
        }
    }

// Exercise 5 : Colors #2
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];

color.forEach((element, index) => {
    if (index == 0) {
        console.log(`#${index + 1}${ordinal[1]} choise is ${element}`)
    } else if (index == 1) {
        console.log(`#${index + 1}${ordinal[2]} choise is ${element}`)
    } else if (index == 2) {
        console.log(`#${index + 1}${ordinal[3]} choise is ${element}`)
    } else {
        console.log(`#${index + 1}${ordinal[0]} choise is ${element}`)
    }

})


// Exercise 6 : Bank Details
// 1
let bankAmount = 5000 

// 2
let VAT = 0.17

// 3
let details = ["+200", "-100", "+146", "+167", "-2900"]

// 4 
details.forEach((element, index, array) => array[index]  = eval(element * 0.17 + element))
console.log(details)

// 5
details.forEach(element => bankAmount += element )
console.log(`your money at the end of the month is: ${bankAmount}`)