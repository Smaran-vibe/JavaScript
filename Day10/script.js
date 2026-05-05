function loadScript(src){
    return new Promise((resolve, reject) => {

        let script = document.createElement("script")
        script.src = src; 

        script.onload = () => resolve ("File load successfully")
        script.onerror = () => reject ("File didnot load try again later")

        document.head.appendChild(script)
    })

}

loadScript ("script.js")
 .then ((message)=> {
       alert (message)
 })
 .catch ((error)=>{
    alert (error)
 })