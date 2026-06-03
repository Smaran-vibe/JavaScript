import fs from "fs/promises"

let a = await fs.readFile("smaran.txt")
let b = await fs.appendFile("smaran.txt", "\n This is an amazing promise bro")

console.log(a.toString(), b);
