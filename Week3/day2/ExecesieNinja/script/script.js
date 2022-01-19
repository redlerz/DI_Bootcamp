// Exercise 1 : Evaluation

5 >= 1 /*true*/
0 === 1 /*false*/
4 <= 1 /*false*/
1 != 1 /*false*/
"A" > "B" /*false*/
"B" < "C" /*true*/
"a" > "A" /*true*/
"b" < "A" /*false*/
true === false /*false*/
true != true /*false*/

// // Exercise 2 : Ask For Numbers

// let x = prompt('Please write 2 seperated by commas numbers');
// let y = 




//Exercise 3 : Find Nemo
let findingNemo = prompt('Please write a sentence containing the work Nemo');
let wordToFind = "Nemo";

    if(findingNemo.includes("Nemo")) {
        let position = findingNemo.search("Nemo");
        console.log('I found Nemo at ${position}');

    } else {
        console.log("I cant find Nemo");
    }

    