// function add7(x){
//     return x +7;
// }   

// function multiply(x, y){
//     return x * y;
// }

// function capitalize(str){
//     let strLowercase = str.toLowerCase();
//     return strLowercase.charAt(0).toUpperCase() + strLowercase.slice(1);
// }

// function lastLetter(str) {
//     return str.charAt(str.length - 1);
// }

// console.log(lastLetter("bAnanAlegs"));

let userInput = new Number(prompt("Number"));

for (let i = 0; i < userInput; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else if (i % 3 == 0){
        console.log("Fizz");
    } else {
        console.log(i)
    }
}