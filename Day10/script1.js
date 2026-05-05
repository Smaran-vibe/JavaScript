 function loadScript(src) {
    return new Promise((resolve, reject) => {
        
        let script = document.createElement("script")
        script.src = src;
        
            script.onload = () => resolve("File load successfully")
            script.onerror = () => reject("File didnot load try again later")

            document.head.appendChild(script)
        });
        

    
}
async function main(){

   try {
    let message = await loadScript("script.js")
   } catch (error) {
    alert(error)
    
   }
}

main();