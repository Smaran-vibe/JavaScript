console.log ("Initializing hacking.....");


function delay(ms) {
return new Promise (resolve => setTimeout(resolve,ms))
}

function printLine(text){
    let terminal = document.querySelector(".box");

    let line = document.createElement("div");
    line.innerHTML = text;

    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;

}

async function printWithDots(text){
    let terminal = document.querySelector(".box")

    let dots = 0; 

    let interval = setInterval(() => {
        dots = (dots + 1) % 4;
       terminal.innerHTML = `<span class="loading">${text}</span>`;

    },300);

    await delay(Math.random()* 2000 + 1000);

    clearInterval(interval);

    terminal.innerText = text + "... Done";

    await delay(800);



}



async function hack() {
    await printWithDots("Reading your files");

    await printWithDots(`Password files detected`);

    await printWithDots('Sending all passwords and personal files to server');

    await printWithDots('Cleaning up');

    document.querySelector(".box").innerText = "Access Granted";

   
}

hack();


