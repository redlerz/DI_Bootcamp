// Exercises XP
// Exercise 1 

//Question 1
let h1 = document.querySelector('h1');
console.log(h1);

// Question 2
let artic = document.querySelector('article');
artic.lastElementChild.remove();

// Question 3
let h2 = document.querySelector('h2');
let changeBackground = (e) => e.target.style.background = "red";
h2.addEventListener("click", changeBackground);

//4. Question 4
let btn = document.createElement('button');
btn.innerHTML = 'click to make paragraphs bold';
btn.setAttribute('id', 'btn');
artic.appendChild(btn);
let p = document.querySelectorAll('p');
let par = () => {
    for (let i = 0; i < p.length; i++) {
        p[i].style.fontWeight = 'bold'
    };
};
btn.onclick = par;

//Question 6 - Bonus
let textSizeChange = (size) => size.target.style.fontSize = `${Math.floor(Math.random() * 100)}px`;
h1.addEventListener("mouseover", textSizeChange);

//Qestion 7 - Bonus

let fade = (fd) => {
    fd.target.style.opacity = .1;
};

let unfade = (unfd) => {
    unfd.target.style.opacity = 1;
};
h2.addEventListener("mouseover", fade);
h2.addEventListener("mouseout", unfade)
