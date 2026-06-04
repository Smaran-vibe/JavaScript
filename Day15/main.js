const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About us')
})
app.get('/contact', (req, res) => {
    res.send('Contact Me')
})

app.get('/blog/:slug/', (req, res) => {
    console.log(req.params);
    console.log(req.query);

    res.send(`Hello ${req.params.slug}`)
})

// app.get('/blog/ intro-to-javascript', (req, res) => {
//   res.send('Hello intro to javascript')
// })
// app.get('/blog/ intro-to-java', (req, res) => {
//   res.send('Hello intro to java')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
