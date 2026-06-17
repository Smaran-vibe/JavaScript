console.log ("This is a loop my friend");

for (let i = 0 ; i < 10 ; i++){
    console.log(i);

}

let obj = {
    name : "Luffy",
    role : "Captain",
    age : 19,
    company : "Straw Hat Pirates"

}
for (const key in obj) {
    console.log(key)
}

for (const c of "Roronoa"){
    console.log(c);
}

let i = 69;
while (i < 80){
    i++;
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    console.log("Hello");
}

const person = {
    name: "Luffy",
    age: 20,
    city: "Kathmandu"
};

for (const key in person) {
    console.log(key, person[key]);
}