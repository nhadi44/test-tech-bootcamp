function validateUsername(username) {
    var re = /[a-z]/;

    if (re.test(username) == true) {
        return console.log('Username valid')
    }

    if (re.test(username) == false) {
        return console.log(' Username invalid')
    }
}


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    // return console.log(re.test(email))
    if (re.test(email) == true) {
        return console.log('Email valid')
    }

    if (re.test(email) == false) {
        return console.log('Email invalid')
    }
}

function validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    // return re.test(validatePassword(password))
    if (re.test(password) == true) {
        return console.log('Password Valid')
    }

    if (re.test(password) == false) {
        return console.log('Password Invalid')
    }
}

validateUsername('hadinurhidayat')
validateEmail('hadi@gmail.com')
validatePassword('Password97')
// console.log(validatePassword("Nnnnnnnn"))
// console.log(validateUsername('hadinurhidayat'))