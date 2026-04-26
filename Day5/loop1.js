let a = [11,12,69,98,23];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
    
}

a.forEach ((value,index,arr) =>{
    console.log(value,index,arr);
})

let obj = {
    name:"Asta",
    age: 17,
    company: "Black Bulls"
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)){
    
    const element = obj[key];
    console.log(key,element);
    
    
}
}

for (const element of a) {
    console.log(element);
    
}