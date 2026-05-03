console.log('This is promises');


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No bro, better luck next time");
    } else {
        setTimeout(() => {
            console.log(`Yes I'm done`);
            resolve("Roronoa");
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Marimo is better then you");
    } else {
        setTimeout(() => {
            console.log(`Yes I'm done`);
            resolve("SANJIRO");
        }, 1000);
    }
})

 let p3 = Promise.all([prom1, prom2])
// let p3 = Promise.allSettled([prom1, prom2])
// let p3 = Promise.race([prom1, prom2])
// let p3 = Promise.any([prom1, prom2])

p3.then((a) => {

    console.log(a);
}).catch((err) => {
    console.log(err);

})
