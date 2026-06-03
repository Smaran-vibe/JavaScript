const fs = require ("fs")

console.log(fs);

console.log("starting");
fs.writeFile("Roronoa.txt","Nice to meet you",()=>{
    console.log("Printing is done");

    fs.readFile("Roronoa.txt", (error,data)=>{
        console.log(data.toString(),error)


        

    })
    
})

fs.appendFile("smaran.txt"," RoronoaZoro", (e,d)=>{
    console.log(d);
    
})
console.log("ending");


