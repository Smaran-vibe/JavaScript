const mykey = Symbol("hello");

const obj = {
    name: "Smaran Aryal",
    [mykey]: "helo1",
    age: 18,
    location: "Kathmandu",
    email: "nice@nice.com"
}


obj.location = "Pokhara"
console.log(obj["name"]);
console.log(typeof obj[mykey]);
console.log(obj["location"]);

// Object.freeze(obj) // doesnot let the value of object to be changed
obj.email = "@gmai.com"
console.log(obj["email"]);
console.log(obj);

obj.greeting = () => {
    console.log("Hello bro");

}
obj.greeting2 = function () {
    console.log(`Hey how are you ${this.name}`);

}

obj.greeting();
obj.greeting2();



