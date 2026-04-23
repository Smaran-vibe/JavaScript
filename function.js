function nice (name){
    console.log ("Hello "+ name + " NICE TO MEET YOU");
    console.log ("Hi "+ name + " NICE TO MEET YOU");
    console.log ("Hey "+ name + " NICE TO MEET YOU");

}

nice ("Luffy");
nice ("Zoro");

function sum (a,b,c=9){
    return a+b+c;
}

result1 = sum(30,30);
result2 = sum(40,69,56);

console.log ("The result of the result1 is " +result1);
console.log ("The result of the result2 is " +result2);

const func1 = (x) => {
    console.log ("I am a arrow function: " +x);
}

func1(96);
func1(99);
func1(100);