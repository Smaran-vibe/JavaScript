// Create a faulty calculator that gives wrong output 
// it takes two numbers as input from the user 
// + ---> -
// * ---> +
// - ---> /
// / ---> **
// It performs wrong output 10% of time

const prompt = require("prompt-sync")();
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let operator = prompt("Enter the operator you want: ");

let result;

let isfaulty = Math.random() < 0.1;
console.log(isfaulty);

if (isfaulty) {
    if (operator === "+") {
        result = num1 - num2;

    } else if (operator === "-") {
        result = num1 / num2;

    } else if (operator === "*") {
        result = num1 + num2;
    } else if (operator === "/") {
        result = num1 ** num2;
    } 
}
    else {
        console.log("Correct Calculation");

        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;

        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            result = num1 / num2;
        }
    }
    console.log("The result is: " + result);





