/* The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them. */


//method 1 
function doubletrouble1(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            result.push(arr[i] * 2)
        }


    }
    return result;

}

//Method 2
function doubletrouble(arr) {
    return arr.map((num, i) =>
    num === arr[i - 1] ? num : num * 2
)


}

console.log(doubletrouble([2,2,4,4,5,6,7,8,69,69]));
console.log(doubletrouble1([2,2,4,4,5,6,7,8,69,69]));



