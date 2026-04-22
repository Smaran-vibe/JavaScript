let a = 9; 
let b = 10; 
let c = "Monkey D Luffy";

console.log (a+b);
console.log ("Hey it is " + c);
console.log (typeof a, typeof b, typeof c);

{
    let a = 59; 
    console.log(a);
}

// var is global scope whereas let is block scope. 

console.log(a);

let x = 29; 
let y = 30; 
let z = 3.55;
const p = true; 
let q = undefined; 
let r = null; 

console.log (x,y,z,p,q,r);
console.log (typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    "name": "Luffy", "job code": 5600, 
    "is_handsome": true
}
console.log(o);
o.salary = "5 crores"; 
console.log(o);