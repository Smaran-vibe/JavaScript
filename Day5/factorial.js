// WAP to calculate factorial of a number using reduce and for loop 

let num = parseInt(prompt("Enter the number to calculate its factorial: "));

let arr1 = Array.from({length: num}, (_, i) => i + 1);

let fact = arr1.reduce((a, b) => {
    return a * b;
}, 1);

console.log ("The factorial of " +num + " is " + fact);


