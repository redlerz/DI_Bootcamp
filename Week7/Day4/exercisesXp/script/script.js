// Exercise 1 : Location
// // Analyze the code below. What will be the output?

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// I am John Doe from Vancouver, Canada. Latitude 49.2827, Longitude -123.1207





// Exercise 2: Display Student Info

// 1. Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
const displayStudentInfo = (studentObject) => {

    const { first, last } = studentObject
}

console.log('Yout full name is ${first} ${last}')
// 2. Destructure the parameter inside the function and return a string as the example seen below:

displayStudentInfo({ first: 'Elie', last:' Schoppik'})

// Exercise 3: User & Id

// 1. Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersEntries = Object.entries(users)
console.log(usersEntries)

// 2. Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

console.log(usersEntries.map(([username, id])=> [username, id*2]))


// Exercise 4 : Person Class

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
// //   console.log(typeof member);

// Console log will give object since class person creates person Objects (person stored in member)


// Exercise 5 : Dog Class

// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };


// This option will work as it is using the Dog constructor to set the name property using the super function. 
//     // 2
// class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };

// // Exercise 6 : Challenges
// // 1 .Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}

// both are false 

// 2. What is, for each object below, the value of the property number ?
const object1 = { number: 5 };  //5
const object2 = object1; //5
const object3 = object2; //5
const object4 = { number: 5}; //5

// object1.number = 4;

// object2.number is 4
// object3.number is 4
// object4.number is 5

// 3. Create a class Animal with the attributes name, type and color
 class Animal {
     constructor(name, type, color) {
     this.name = name
     this.type = type
     this.color = color
 }
}

// 4. Create a class Mamal that extends from the Animal class. It has a method called sound(). 
// This method takes a parameter: the sound the animal makes, 
// and returns the details of the animal (name, type and color) as well as the sound it makes.

class mamal extends Animal {
    sound () {
        console.log(this.name, this.type, this.color)
    }
}


// 5. Create a cow object that accepts a name, 
// a type and a color and calls the sound method that moo’s her name, type and color.

    const cow = new mamal('mimi', 'cow', 'green')
    cow.sound()