// Exercise 1 : The World Translator

// Question 1

let userLanguage = prompt('What lanague you speak?')

// Question 2

let userLanguageLowerCase = userLanguage.toLocaleLowerCase();

// Question 3

switch (userLanguageLowerCase) {
    case 'french':
        display = "Bonjour";
        alert(`${display}`);
        break;

case 'english':
    display = "Hello";
    alert(`${display}`);
    break;

case 'hebrew':
    display = "Shalom";
    alert(`${display}`);
    break;

    default:
        display = "01110011 01101111 01110010 01110010 01111001"
        alert(`${display}`);
        break;

};

// Exercise 2 : The Grade Assigner

// Question 1

let userGrade = prompt('Whats your grade?')

// Question 2

userGradeInput = [
    userGrade >= 90,
    userGrade <= 90 && userGrade >= 80,
    userGrade >= 70 && userGrade <= 80,
]

switch (userGradeInput.indexOf(true)) {
    
    case 0: console.log("A");
    break;

     case 1: console.log("B");
     break;
     
     case 2: console.log("C");
     break;

     default:
             console.log("D");
    break
};


// Exercise 3 : Verbing

    // Question 1
    let userVerb = prompt('Please insert a verb only!');
    let userVerbLower = userVerb.toLocaleLowerCase();


    // Question 2,3,4

    userVerbPick = [
        userVerbLower.length > 3 && userVerbLower.endsWith("ing") == false,
        userVerbLower.length > 3 && userVerbLower.endsWith("ing") == true
    ]

switch (userVerbPick.indexOf(true)) {
    case 0:
        change = userVerbPick + "ing";
        console.log(change)
        break;

    case 1:
        change = userVerbPick + "ly";
        console.log(change);
        break;
    
    default:
        undefined
        console.log(userVerbPick);
        break;
}


