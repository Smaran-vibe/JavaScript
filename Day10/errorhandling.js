let a = prompt("Enter the first number")

let b = prompt("Enter the second number")

let sum = parseInt(a) + parseInt(b);


if (isNaN(a) || isNaN(b)) {
    throw SyntaxError(`Sorry bro this is not allowed`)
}
function main() {
    let x = 3;

    try {
        console.log(`The sum of number is ${sum * x}`);
        return true

    } catch (err) {

        console.log("Why so much error?");
        return false


    }
    finally{
        console.log("The end "); // finally is essential inside function to execute code after return 
        
    }
}

let c = main()