// // Exercise 1 : Find The Sum

// const sum = (a, b) => a + b;


// // Exercise 2 : Kg And Grams

// // Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// // First, use function declaration and invoke it


// let kgToGrams1 = function (weightKg) {
//   return weightKg * 1000;
// };
// console.log(kgToGrams1(15));



// // Then, use function expression and invoke it
// function kgToGrams(weightKg) {

//   return weightKg * 1000;
// };

// console.log(kgToGrams());


// // Write in a one line comment, the difference between function declaration and function expression.
// // Function expression is an anonymous function inside of a vriable where function declaration is regular NAMED function 

// // Finally, use a one line arrow function and invoke it.
// let kgToGrams2 = weightKg => weightKg * 1000;
// console.log(kgToGrams2(150));


// // Exercise 3 : Fortune Teller

// // Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// (function (numOfChildren, partnerName, geographicLocation, jobTitle) {

//   // The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>,
//   // and married to <partner's name> with <number of children> kids."

//   let main = document.querySelector('#main');
//   main.innerHTML = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numOfChildren} kids.`;

// }(1, "Sarah", "Tel-Aviv", "fullStack Developer"));


// Exercise 4 : Welcome

// Create a Bootstrap Navbar in your HTML file.
// John has just signed in to your website and you want to welcome him.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.


// Dan code
((name) => {
let whereToInsert = document.querySelector('.container-fluid')
let toInsert = document.createElement("div")

let img = document.createElement('img');
img.src = "https://wwww.w3schools.com/w3css/img_avatar3.png"
// console.log(whereToInsert.height)
img.style.height = "50px"

let nameSpan = document.createElement("span")
nameSpan.textContent = name
toInsert.appendChild(img)
toInsert.appendChild(nameSpan)
whereToInsert.replaceChild(toInsert, whereToInsert.children[0])

}) ("dan")

// My code**
// (function (userName) {

//   // displaying the name of the user and his profile picture. **
//   let img = document.createElement('img');
//   img.src = "https://wwww.w3schools.com/w3css/img_avatar3"

//   // The function should add a div in the nabvar,
//   let div = document.createElement('div');
//   let txtNode = document.createTextNode(`Welcome ${userName}`);
//   div.appendChild(txtNode);
//   // div.appendChild(img);
//   console.log(div);

//   let whereToAppend = document.getElementById('test');
//   console.log(whereToAppend);
//   whereToAppend.appendChild(div);

// }("John"));


// Exercise 5 : Juice Bar
// Part I:

// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

function makeJuice(cupSize) {

  let addIngredients = (ingredientOne = 'a', ingredientTwo = 'b', ingredientThree = 'c') => {

    // The inner function named addIngredients receives 3 ingredients,
    // and displays on the DOM a sentence like The client wants a <size drink> juice,
    // containing <first ingredient>, <second ingredient>, <third ingredient>".


    let txtNode = document.createTextNode(`The client wants a ${cupSize} juice, containing ${ingredientOne}, ${ingredientTwo}, ${ingredientThree}`)
    let whereToAppend = document.querySelector('#test');
    whereToAppend.appendChild(txtNode);


    // Part II:
    // In the makeJuice function, create an empty array named ingredients.
    let ingredients = [];

    // The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
    ingredients.push(ingredientOne);
    ingredients.push(ingredientTwo);
    ingredients.push(ingredientThree);

    // Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice,
    //  containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

    let displayJuice = () => {

      let sentence = `    The client wants a ${cupSize} juice, containing  `;
      ingredients.forEach(element => sentence += `${element}, `)

      //Display in DOM **
   
      whereToAppend.innerHTML += sentence;

    }

    displayJuice();
  }

  
//   //Invoke the inner function ONCE inside the outer function.
    addIngredients();

}


// Then invoke the outer function in the global scope.
makeJuice('medium');