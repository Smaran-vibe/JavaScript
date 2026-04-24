/* Create a business name generator by combining list of adjectives and shop name and another word without arrays
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/


let adj = {
    1:"Crazy",
    2:"Amazing",
    3:"Fire",
    4:"East"
}

let shop = {
    1:"Engine",
    2:"Foods",
    3:"Garments",
    4:"West"
}

let word = {
    1:"Bros",
    2:"Limited",
    3:"Hub",
    4:"Blue"
}

let adjnum = Math.floor(Math.random()*4 + 1);
let shopnum = Math.floor(Math.random()*4 + 1);
let wordnum = Math.floor(Math.random()*4 + 1);

let businessname = adj[adjnum] + " " + shop[shopnum] + " "+ word [wordnum];

console.log("The name of the business is: " +businessname); 





