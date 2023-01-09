// if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//     return;
// }

// if (password !== ADMIN_PASSWORD) {
//     message = "Access denied, wrong password!";
//     return;
// }




// if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
// } else {
//     message = "Access denied, wrong password!";
// }


function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    // Change code below this line

    let message;
    console.log(message);
    if (password === ADMIN_PASSWORD) {
        message = "Welcome!";
        return;   
    }

    if (password != ADMIN_PASSWORD) {
        message = "Access denied, wrong password!";
        return;
    }

    message = "Access denied, wrong password!";
    console.log(message);
    return message;
    // Change code above this line

    
}
checkPassword("mangohackzor");