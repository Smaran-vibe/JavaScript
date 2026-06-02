// const { createServer } = require('node:http');
// const fs = require("fs")

// import smaran from "./mymodule.js"
// console.log(smaran,);



 const c = require("./mymodule2.js")

 console.log(c,__dirname);




// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> Hello World </h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });