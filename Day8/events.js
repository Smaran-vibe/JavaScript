let button = document.getElementById("btn");

button.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "<b> yay bro u clicked me </b> Enjoy your click"
})
button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b> yay bro u doubled clicked me </b> Enjoy your click"
})
button.addEventListener("contextmenu", () => {
    alert ("Bro dont press right click i'm scared!");
})

document.addEventListener("keydown", (e)=> {
    console.log (e,e.key,e.keyCode)
})