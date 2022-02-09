// Exercise 1 : Print Full Name


// 1. Create a function called printFullName(studentObj) that accepts an object as a parameter.

// For example : printFullName({first: 'Elie', last:'Schoppik'}).
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik`


const printFullName = ({ first, last }) => {
    console.log(`Your full name is ${first} ${last}`)
}


// 2. Destructure this object DIRECTLY from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)

// The output of the printFullName() function should be the exact same as the displayStudentInfo function. (Exercise XP)

printFullName({ first: 'Elie', last: 'Schoppik' })



// Exercise 2 : Keys And Values

// 1. Create a function that takes an object and returns the keys and values as separate arrays.


        const keysAndValues = (obj) => {
            return [Object.keys(obj), Object.values(obj)]
        }


// 2. Return the keys sorted alphabetically, and their corresponding values in the same order. / *Not sure

// const keysAndValuesSort = (obj) => {
//     let keys = [],
//         vals = []

//     for (const key in obj) {
//         keys.push(key)
//     }

//     // sort them alphabetically
//     keys.sort()

//     for (const key of keys) {
//         vals.push(obj[key])
//     }

//     return [keys, vals]



3.  // class Counter with one attribute "count" and one method "increment", which increases count by 1 each time it's called
          class Counter {
            constructor() {
                this.count = 0
            }
            increment() {
                this.count++
            }
        }
        const counterOne = new Counter()

        // Increment this.count twice, so count of counterOne will be 2
        counterOne.increment()
        counterOne.increment()

        // store reference to counterOne in counterTwo
        const counterTwo = counterOne

        // we increment this.count of counterTwo once, so count of counterTwo will now be 3
        counterTwo.increment()

        // output will be 3, since count of counterOne is 3
        console.log(counterOne.count)
