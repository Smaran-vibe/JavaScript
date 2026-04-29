console.log("Hello there");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "aqua";

document.getElementById("box3").style.backgroundColor = "yellow";

document.querySelector(".box").style.backgroundColor = "purple";

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach (e => {

 e.style.backgroundColor = "purple";
});

document.getElementsByTagName("div");