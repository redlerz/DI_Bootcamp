let client = "John";

let groceries = {
    fruits: ['pear', 'apple', 'banana'],
    vegetables: ['tomatoes', 'cucumber', 'salad'],
    totalPrice: '20$',
    other: {
        payed: true,
        meansOfPayment: ['cash', 'creditCard'],
    },
}
// Create an arrow function named displayGroceries,
//  that console.logs the 3 fruits from the groceries 
//  object. Use the forEach method.


function displayGroceries() {
    return groceries.fruits.forEach(fruit => console.log(fruit));
}


// 2. Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable.
//  (Tip : make the user variable equal to the client variable)


function displayGroceriesClone() {
    let user = client;

    // Change the client variable to “Betty”. 
    client = "Betty";

    // Will we also see this modification in the user variable ? Why ?
    // We won't see the modification in user as client asignd as value directly to client.
    console.log(user);


    // In the function, create a variable named shopping that is a copy of the groceries object. 
    // (Tip : make the shopping variable equal to the groceries variable)
    let shopping = groceries;

    // Change the value of the totalPrice key to 35$.
    groceries.totalPrice = "$35";

    //  Will we also see this modification in the shopping object ? Why ?
    console.log(shopping.totalPrice);

    // Change the value of the payed key to false. 
    groceries.other.payed = 'falsh';
    // Will we also see this modification in the shopping object ? Why ?
    console.log(shopping.other.payed);
}
    // Invoke the cloneGroceries function.
    cloneGroceries();