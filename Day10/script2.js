function loadscript(src) {
    return new Promise((resolve, reject) => {

        let script = document.createElement("script")
        script.src = src

        script.onload = () => resolve("File loaded successfully bro ")

        setTimeout(() => {
            reject("Please try again later bro");
        }, 3000);
    }
    )
}

async function main() {

    try {
        let message = await loadscript("script.js")
        alert(message)

    } catch (error) {
        alert(error)
    }


}

main();




