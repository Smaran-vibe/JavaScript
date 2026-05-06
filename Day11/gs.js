class User {
    constructor(name) {
        this.name = name;
        

    }

get name(){
    return this._name;
}

set name(value){
    if (value.length < 4){
        console.log("Bro your name is too short");
        return;
        
    }
    this._name = value;
}
}

let U = new User("John Cena")
console.log(U.name);

U.name = "Kimikokoiki"
console.log(U.name);




