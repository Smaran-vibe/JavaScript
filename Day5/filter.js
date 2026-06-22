// array map method

let arr = [45, 67, 69];

let a = arr.map((value, index, array) => {
     // map transforms each element

    console.log(value, index, array);

    return value + index;

})

console.log(a);

// Array filter method 

let arr2 = [1, 2, 44, 5, 6, 78, 12]

let a2 = arr2.filter((a) => {  // filter: elements that FAIL the condition are removed

    return a > 10
})

console.log(a2);

// array reduce method 


let arr3 = [1, 2, 44, 5, 6, 78, 12]

const reduce_func = ((h1,h2) => {
    
    return h1 + h2; 


})

let newarr = arr3.reduce(reduce_func)
console.log(newarr);

