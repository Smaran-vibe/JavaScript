function waitFor(ms, message) {
    return new Promise((resolve) => {


        setTimeout(() => {
            resolve(message);
        }, ms);
    })

}

async function oneByone() {
    let start = Date.now();

    console.log("One by one start.....");


    let p1 = await waitFor(1000,"Yo this is 1")
    let p2 = await waitFor(2000,"Yo this is 2")
    let p3 = await waitFor(3000,"Yo this is 3")
    
    console.log(p1);
    console.log(p2);
    console.log(p3);
    
    let end = Date.now();
    console.log(`One by one took: ${end - start}ms`);
    
}
        
async function allatonce() {
    console.log("Promise all start.....");

    let start = Date.now();

   let results = await Promise.all([
        waitFor(1000, "Promise 1 done!"),
        waitFor(2000, "Promise 2 done!"),
        waitFor(3000, "Promise 3 done!")
    ]);
    
    let end = Date.now();
    
    console.log(results);
    console.log(`Promise all took: ${end - start}ms`);
    

        
}

oneByone();
allatonce();