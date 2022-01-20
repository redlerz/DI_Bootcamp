// Question 1

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const playTheGame = () => {

    let ask = confirm("Wanne play?");
    alert("You have 3 guesses to fine the right number!")

    if (ask === false) {
        return alert("No problem, Goodbye");

    }

    let choice = parseInt(prompt("Pick a number from 0 - 10"));
    while (isNaN(choice) === true || choice > 10 || choice < 0 || choice == "") {
        alert("Remiding you to pick correctly")
        choice = parseInt(prompt("Choose a number only from 0 - 10"));
    }

    let computerNumber = getRandomInt(1, 10)
    console.log(computerNumber)

    return (test(choice, computerNumber))
}

// Question 2
const test = (userNumber, computerNumber) => {

    let PersonVsComputer = [
        userNumber > computerNumber,
        userNumber < computerNumber,
        userNumber === computerNumber
    ]

    switch (PersonVsComputer.indexOf(true)) {
        case 0:
            alert("Your number is bigger, try again");
            choice = parseInt(prompt("Please pick a number from 0 - 10"));
            while (isNaN(choice) === true || choice > 10 || choice < 0 || choice == "") {
                alert("Remiding you to pick correctly")
                choice = parseInt(prompt("Choose a number only from 0 - 10"));
            }
            break;
        case 1:
            alert("Your number is smaller, try again");
            choice = parseInt(prompt("Please pick a number from 0 - 10"));
            while (isNaN(choice) === true || choice > 10 || choice < 0 || choice == "") {
                alert("Remiding you to pick correctly")
                choice = parseInt(prompt("Choose a number only from 0 - 10"));
            }
            break;

        case 2:
            return alert("WINNER");
    }

    let PersonVsComputer = [
        choice > computerNumber,
        choice < computerNumber,
        choice === computerNumber
    ]

    switch (PersonVsComputer.indexOf(true)) {
        case 0:
            alert("Your number is bigger, try again");
            choice = parseInt(prompt("Please pick a number from 0 - 10"));
            while (isNaN(choice) === true || choice > 10 || choice < 0 || choice == "") {
                alert("Remiding you to pick correctly")
                choice = parseInt(prompt("Choose a number only from 0 - 10"));
            }
            break;
        case 1:
            alert("Your number is smaller, try again");
            choice = parseInt(prompt("Please pick a number from 0 - 10"));
            while (isNaN(choice) === true || choice > 10 || choice < 0 || choice == "") {
                alert("Remiding you to pick correctly")
                choice = parseInt(prompt("Choose a number only from 0 - 10"));
            }
            break;

        case 2:
            return alert("WINNER");

    }


    let PersonVsComputer = [
        choice > computerNumber,
        choice < computerNumber,
        choice === computerNumber
    ]

    switch (PersonVsComputer.indexOf(true)) {
        case 0:
            alert("Your number is bigger, try again");
            choice = parseInt(prompt("Please pick a number from 0 - 10"));
            while (isNaN(choice) === true || choice > 10 || choice < 0 || choice == "") {
                alert("Remiding you to pick correctly")
                choice = parseInt(prompt("Choose a number only from 0 - 10"));
            }
            break;
        case 1:
            alert("Your number is smaller, try again");
            choice = parseInt(prompt("Please pick a number from 0 - 10"));
            while (isNaN(choice) === true || choice > 10 || choice < 0 || choice == "") {
                alert("Remiding you to pick correctly")
                choice = parseInt(prompt("Choose a number only from 0 - 10"));
            }
            break;

        case 2:
            return alert("WINNER");

    }

    return alert("No more chances, you lose")
}