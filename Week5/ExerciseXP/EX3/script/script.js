// Exercise 3 : Transform The Sentence
// **I could not make it show on the console log 

//Question 1
let allBoldItems = "";


//Questio 2
let getBold_items = () => {
     allBoldItems = document.getElementsByTagName('strong');
     getBold_items(); 
}

// Question 3
let highlight = () => {

    for (let i = 0; i < getBold_items.length; i++) {
    getBold_items[i].style.color = "blue"
    };
   
};

// Question 4
let return_normal = () => {
    for (let i = 0; i < getBold_items.length; i++) {
        getBold_items[i].style.color = "black"
    };
};

let p = document.getElementsByTagName('p')[0];
p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", return_normal)