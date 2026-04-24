let age = 5; 
let grace = 15;
age += grace;

console.log(age);
console.log (age ** grace); // exponentiation


if (age >= 18){
    console.log("You can drive");

}else if (age == 0){
    console.log("Are you kidding me?");

}else{
    console.log ("Sorry you cant drive");
}

let c = age > grace ? age + grace : age - grace;
/*
Tenary operator 
translates to 
if (age > grace){
c = age + grace;
}   
else {
c = age - grace;
}
*/

console.log(c);