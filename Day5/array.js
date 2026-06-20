let arr = [1, 2, 3, 4, 5, "Luffy"];

const part = arr.slice(1, 4)
console.log("A" + arr);
console.log("A" + part);

const part2 = arr.splice(1, 4)
console.log("B" + arr);
console.log("B" + part2);

console.log(arr, typeof arr);
console.log(arr.includes("Smaran"));

console.log(arr.length);
console.log(arr[0]);
console.log(arr[5]);

arr.sort();
console.log(arr);

console.log(arr.toString());
arr.push("Goku"); // adds the element at the end of the array
console.log(arr);
console.log(arr.join(" and ")); // joins the elements of the array with the specified separator

arr.pop(); // removes the last elemets of the array
console.log(arr);

arr.unshift("Nami swan") // adds the element at the beginninng of the array and shift to the right
console.log(arr);

arr.shift(); // removes the first element of the array and shift to the left
console.log(arr);

let a1 = [1, 2, 4];
let a2 = [3, 7, 8];
let a3 = [9, 8, 7];

let a4 = a1.concat(a2, a3);  // concat method
console.log(a4);

let characters = ["ASTA", "PANDA", "BEPO", "PEAK"]
let characters2 = ["HINATA", "HOME", "LANDER", "DEEP"]

let characters3 = [...characters, ...characters2]  // spread method 
console.log(characters3);

const randomarr = [1, 2, 3, 4, [6, 7, 8, 9, [10, 11, 12, 13], [13, 254, 5, 6, 9]]] // seperates the array inside array
const randomarr2 = randomarr.flat(3)
console.log(randomarr2);

console.log(Array.isArray("Smaran")); // checks whether it is in array or not
console.log(Array.from("Smaran")); // converts into array
console.log(Array.of("Smaran")); // converts into array

a4.sort();// sorts the array in ascending order
console.log(a4);

a4.reverse();
console.log(a4);

a4.splice(2, 3); // removes 3 elements starting from index 2
console.log(a4);

a4.slice(2, 5); // returns a new array containing the elements from index 2 to index 4 (5 is not included)
console.log(a4);