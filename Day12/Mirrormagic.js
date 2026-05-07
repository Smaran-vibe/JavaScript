/* The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself. */

function mirrorMirror(str){
    return str + str.split("").reverse("").join("")
}

console.log(mirrorMirror("Bipin"));
console.log(mirrorMirror("Monkey"));
console.log(mirrorMirror("Nursery"));

// str.split("")       breaks string into array of characters
// .reverse()          reverses the array
// .join("")           joins array back into a string


// Method 2 

function mirrorMirror1(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str + reversed;
}

const mirrorMirror2 = str => str + str.split("").reverse().join("");



