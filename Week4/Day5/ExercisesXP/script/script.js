// Exercise 1 - Change The Navbar

// Question 1

document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");

// Question 2

const liOne = document.createElement('li');
const log = document.createTextNode("Logout");
liOne.appendChild(log);
document.getElementsByTagName("ul")[0].setAttribute("id", "element")
element.appendChild(liOne)
console.log(element.firstElementChild.textContent);
console.log(element.lastElementChild.textContent);



// Exercise 2 : Users

// Question 1

document.getElementsByClassName("list")[0].getElementsByTagName('li')[1].textContent = "Richard";

// Question 2

document.getElementsByClassName("list")[0].getElementsByTagName('li')[0].textContent = "Shachar";
document.getElementsByClassName("list")[1].getElementsByTagName('li')[0].textContent = "Shachar";


// Question 3
let nameLists = document.getElementsByClassName("list");

let liTwo = document.createElement('li');
let helloOne = document.createTextNode("Hey students");
liTwo.appendChild(helloOne)
nameLists[0].appendChild(liTwo)

let liThree = document.createElement('li');
let helloTwo = document.createTextNode("Hey students");
liThree.appendChild(helloTwo)
nameLists[1].appendChild(liThree)


// Question 4

const sarah = nameLists[1].getElementsByTagName('li')[1]
sarah.parentElement.removeChild(sarah)


// Exercise 3 : Users And Style

// Question 1
document.getElementsByTagName("div")[2].classList.add("divThree")
document.getElementsByClassName("divThree")[0].style.background = "lightblue";
document.getElementsByClassName("divThree")[0].style.padding = "10px";


// Question 2
document.body.getElementsByTagName('ul')[3].classList.add("ulFour")
document.getElementsByClassName("ulFour")[0].getElementsByTagName("li")[0].hidden = true;

//Question 3

document.getElementsByClassName("ulFour")[0].getElementsByTagName("li")[1].style.border = "5px solid red" 

//Question 4 
document.body.style.fontSize = "22px"
