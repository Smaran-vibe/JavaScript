const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('Day16'))

app.get('/', (req, res) => {
    console.log("Hey its a get request");
    res.send("Hello World 2")

}).post('/', (req, res) => {
    res.send('Hello World! post')
    console.log("Hey its a post request");

}).put('/', (req, res) => {
    console.log("Hey its a put request");
    res.send('Hello world put!')
}).listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get("/index", (req, res) => {
    console.log("Hey its index");
    res.sendFile('Templates/index.html', { root: __dirname })

})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Smaran", "Bipin"] })

})