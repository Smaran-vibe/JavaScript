//  async function getData() {
//     // simulating a network request 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     })
// }
 async function getData() {
    // simulating a network request 
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Hen',
        body: 'Tay',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
  
    let data = await x.json()
      console.log(data);
      
      
}

async function main() {
    console.log(`Loading modules`);

    console.log(`Do something else bruda`);

    console.log('load data');

    let data =  await getData();

    console.log(data);

    console.log('Process Data');

    console.log("This is data 2");
}

main();


// data.then((v) => {

//     console.log(data);

//     console.log('Process Data');

//     console.log("This is data 2");
   

// })






