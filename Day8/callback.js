console.log("I am a hacker");
console.log("He is also a hecker");

setTimeout(() => {
console.log ("I am inside setTimeout");
},2000);

setTimeout(() => {
console.log ("Hello i should be printed first");
},1000);

const fn = () => {
  console.log("Nothing");  
}


const callback = (arg,fn) => {
  console.log(arg)
  fn();
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Smaran", fn);
  document.head.appendChild(sc);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", callback);

console.log ("The end");
