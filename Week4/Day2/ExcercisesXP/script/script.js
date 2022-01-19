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

// Question 2
let shoppingList = ['banana', 'orange', 'apple'];

// Question 3,4,5 ** Not sure

let myBill = () => {
    totalPrice = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        
        
        }
    }
    return totalPrice
};

myBill();

// Exercise 5




// Exercise 6 


// Question 1

let hotelCost = () => {
    let numberOfNights = prompt('How many nights you wish to stay in the hotel?')
    while (numberOfNights.length === 0) {
        alert('Please type in the amount of nights!')
        numberOfNights = prompt('How many nights you wish to stay in the hotel?')
    };
    let totalForNights = numberOfNights * 140
    return (`The total amount for the number of nights you have booked is ${totalForNights}$`)
};
hotelCost();

// Question 2 ***not sure 

let planeCost = () => {
    let destination = {
        London: 180,
        Paris: 220,
        Rome: 400
    };
    let destination = prompt('What dedtination you wish to go to?')

    while (destination == "" || isNaN(destination) === false) {
        alert('Choose a correct destination!')
        destination = prompt('What destination you wish to go to?')
    }

    return 'Your travel cost is ${destination}'
  }  else {
    let otherDestinations = 300
    return 'Your cost is ${otherDestionations}'
  }
};
planeCost();


// Question 3

let rentalCarCost = () => {
    let carRental = prompt('How many days would you like to rent a car?')
    while (isNaN(carRental) == true) {
        alert('Use only numbers')
        carRental = prompt('How many days would you like to rent a car?')
    };
    if (carRental > 10) {
        let totalCar = carRental * 38
        return `${totalCar} is the total cost for your rental`
    } else {
        let totalCar = carRental * 40
        return `${totalCar} is the total cost for your rental`
    }
};
rentalCarCost();



// Question 4

// Hotel cost

let hotelCost = () => {
    let numberOfNights = prompt('How many nights you wish to stay in the hotel?')
    while (numberOfNights.length === 0) {
        alert('Please type in the amount of nights!')
        numberOfNights = prompt('How many nights you wish to stay in the hotel?')
    };
    let totalForNights = numberOfNights * 140
    return (`The total amount for the number of nights you have booked is ${totalForNights}$`)
};
hotelCost();

// Plane cost

let planeRideCost = () => {
    let destination = {
        London: 180,
        Paris: 220,
        Rome: 400
    };
    let destination = prompt('What dedtination you wish to go to?')

    while (destination == "" || isNaN(destination) === false) {
        alert('Choose a correct destination!')
        destination = prompt('What destination you wish to go to?')
    }

    return 'Your travel cost is ${destination}'
  }  else {
    let otherDestinations = 300
    return 'Your cost is ${otherDestionations}'
  }
};
planeRideCost();

// Rental car

let rentalCarCost = () => {
    let carRental = prompt('How many days would you like to rent a car?')
    while (isNaN(carRental) == true) {
        alert('Use only numbers')
        carRental = prompt('How many days would you like to rent a car?')
    };
    if (carRental > 10) {
        let totalCar = carRental * 38
        return `${totalCar} is the total cost for your rental`
    } else {
        let totalCar = carRental * 40
        return `${totalCar} is the total cost for your rental`
    }
};
rentalCarCost();

// Total cost
    
return `Your total costs are as followed: Plane tickts: ${planeCost} Hotel: ${totalForNights} Car: ${totalCar}`
}
totalVacationCost();

