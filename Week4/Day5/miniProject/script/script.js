
let beginNum = prompt("Please begin to count the bottles from 99 or less")
let index = 0
let loop = true;

do {
    if(beginNum < 0)loop = false;
    
    console.log(`${loop ? beginNum : 0} bottles of beer on the wall`)  
    console.log(`${loop ? beginNum : 0} bottles of beer`)


    index++;
    beginNum = beginNum - index;  
}while (loop)


// do {
//     if(beginNum < 0){
//         loop = false;
//     }

//     let beginToPrint;
//     if(loop){
//         beginToPrint = beginNum;
//     }else{
//         beginToPrint = 0;
//     }
    
//     console.log(`${beginToPrint} bottles of beer on the wall`)  
//     console.log(`${beginToPrint} bottles of beer`)

//     index++;
//     beginNum = beginNum - index;  
// }while (loop)
