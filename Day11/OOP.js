// let obj = {
//     a : 1,
//     b : "Luffy",

// }

// console.log(obj);

// let animal = {
//     eats : true
// }

// let rabbit = {
//     jumps : true
// }

// Object.setPrototypeOf(rabbit,animal);

class Animal {
    constructor(name) {
        this.name = name;
        console.log("Just chillin guys......");

    }

    eats() {
        console.log("Just eating guys");

    }

    sleeps() {
        console.log("just sleeping guys");

    }
}

class Dinasour extends Animal {
    constructor(name) {
        super(name)
        console.log("This is the era of asteroids.....");

    }
    eats() {
        super.eats();
        console.log("Running for the life to not get extinct");

    }

    nosleeps() {
        console.log("No sleep coz asteroid is falling ");

    }
}

let a = new Animal("Honney")
console.log(a);

let d = new Dinasour("Sheru")
console.log(d)

d.eats();