let arr = [9,6,7,8,9,10];

// let newArr = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);


let newArr = arr.map((value,index,arr) => {
    return value ** 2 ; 
})
    
console.log(newArr);

const greaterThan5 = (e) => {
    if (e > 5) {
        return true;
    }
    return false; 
}
console.log (arr.filter(greaterThan5));

let arr2 = [2,4,6,9,12];

const red = (a,b) => {
    return a * b;
    
}

console.log(arr2.reduce(red));