// Exercise 1 : List Of People

let people = ["Greg", "Mary", "Devon", "James"];

// Question 1
people.shift();

// Question 2
people.splice(3, 1, 'Jason');

// Question 3
people.push('Shachar')

// Question 4
console.log(people.indexOf('Mary'));

// Question 5
let peopleCopy = people.slice(1, -1);

// Question 6 - The retruen is -1 as the name Foo does not exist in the array 
console.log(people.indexOf('Foo'));

// Question 7
let last = people.splice(-1);


// Part 2

// Question 1
people.forEach(person => console.log(person));

// or

people.forEach(function(people) {
    console.log(people);
});

// Question 2

for (i = 0; i < people.length; i++) {
    if (people[i] === 'Jason') { break; }
    console.log(people[i]);
};

// Exercise 2 : Your Favorite Colors

// Question 1
let colors = ['Yellow', 'White', 'Blue', 'Red'];

// Question 2
let numbers = ['1st', '2nd', '3rd', '4th'];
colors.forEach((colors, choice) => {
    const choiceRanking = numbers[choice];
    console.log(`My ${choiceRanking} color of choice is: ${colors}`);
});


// Exercise 3 : Repeat The Question
// Question 1
let NumberChoice = prompt('Please choose a number');

// Question 2

while (NumberChoice < 10) {
    alert("Please choose a different number");
    NumberChoice = prompt("What's your new number of choice?");
};

// Exercise 4 : Building Management
// Question 1

let building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

// Question 2
console.log(`there are ${building.numberOfFloors} floors in the building`);

// Question 3 
console.log(` on the first floor there are ${building.numberOfAptByFloor.firstFloor} and on the third floor there are ${building.numberOfAptByFloor.thirdFloor}`);

// Question 4

console.log(`the second tenant name is ${building.nameOfTenants[1]} and he has ${building.numberOfRoomsAndRent.dan[0]} rooms in is apartment`);

// Question 5

if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200
};


// Exercise 5 : Family

// Question 1

let family = {
    fatherName: "David",
    motherName: "Hana",
    sonName: "Uri"
};

// Question 2

for (let familyMember in family) {
    console.log(familyMember)
};

// Question 3
for (let familyMember in family) {
    const nameOfMember = family[familyMember];
    console.log(nameOfMember)
};


// Exercise 6 - **Not sure
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
};


// Exercise 7 : Secret Group

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

// Question 1
arr = []
names.forEach(name => {
    arr.push(name.charAt(0));
});

// Question 2
console.log(arr.join(""));