function validatePassword(password) {

    let errors = []
    if (password.length < 8) errors.push("Password should be minimum 8 digits")
    if (!/[A-Z]/.test(password)) errors.push("Atleast one uppercase letter")
    if (!/[a-z]/.test(password)) errors.push("Atleast one lowercase letter")
    if (!/[0-9]/.test(password)) errors.push("At least one number required");

    if (!/[!@#$%^&*]/.test(password)) errors.push("At least one special character required");

    if (errors.length === 0) {
        console.log("Password has been set");

    } else {
        console.log("Invalid password");
        errors.forEach(error => console.log(error))

    }
}

validatePassword("Hello@123")
validatePassword("n@123")
validatePassword("Trafalgar@123")
