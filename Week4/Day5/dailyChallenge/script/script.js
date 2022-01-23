// Daily Challenge: Planets

// Question 1
let planetSolarSystems = ["Mars", "Mercury", "Earth", "Venus", "Neptue", "Saturn", "Uranus", "Jupiter"]

// Question 2

planetSolarSystems.forEach(e => {
    let planetsDiv = document.createElement('div');
    planetsDiv.setAttribute('class', e);
    planetsDiv.classList.add('planet')
    document.getElementsByClassName('listPlanets')[0].appendChild(planetsDiv)
});



document.getElementsByClassName('Mercury')[0].style.backgroundColor = "lightblue";
document.getElementsByClassName('Venus')[0].style.backgroundColor = "#EFE587"
document.getElementsByClassName('Earth')[0].style.backgroundColor = "#6781EB"
document.getElementsByClassName('Mars')[0].style.backgroundColor = "#F27171"
document.getElementsByClassName('Jupiter')[0].style.backgroundColor = "#B9D5D7"
document.getElementsByClassName('Saturn')[0].style.backgroundColor = "#DADBC5"
document.getElementsByClassName('Uranus')[0].style.backgroundColor = "#B0FBFF"
document.getElementsByClassName('Neptune')[0].style.backgroundColor = "#7C89CE"
