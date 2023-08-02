

function strengthChecker(password) {
    var strength = 0;
    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
        strength += 1;
    }
    if (password.length > 5) {
        strength += 1;
    }
    if (password.length > 10) {
        strength += 1;
    }
    return strength;
}

let textbox = document.querySelector('.textforce')
let conatiner = document.querySelector('.container')
document.addEventListener('keyup', function (e) {
    let password = document.getElementById("pass").value

    let strength = strengthChecker(password)

    if (password.length == 0)
    {
        textbox.innerHTML = "There is no password"
        conatiner.classList.remove('weak')
        conatiner.classList.remove('medium')
        conatiner.classList.remove('strong')
        conatiner.classList.remove('very-strong')
        conatiner.classList.add('blank')
    }
    else if (strength <= 2)
    {
        textbox.innerHTML = "Your password is Weak"
        conatiner.classList.add('weak')
        conatiner.classList.remove('medium')
        conatiner.classList.remove('strong')
        conatiner.classList.remove('very-strong')
        conatiner.classList.remove('blank')

    }
    else if (strength <= 4)
    {
        textbox.innerHTML = "Your password is Medium"
        conatiner.classList.add('medium')
        conatiner.classList.remove('weak')
        conatiner.classList.remove('strong')
        conatiner.classList.remove('very-strong')
        conatiner.classList.remove('blank')
    }
    else if (strength <= 5)
    {
        textbox.innerHTML = "Your password is Strong"
        conatiner.classList.remove('medium')
        conatiner.classList.remove('weak')
        conatiner.classList.add('strong')
        conatiner.classList.remove('very-strong')
        conatiner.classList.remove('blank')
    }
    else if (strength == 6)
    {
        textbox.innerHTML = "Your password is Very Strong"
        conatiner.classList.remove('strong')
        conatiner.classList.remove('weak')
        conatiner.classList.remove('medium')
        conatiner.classList.add('very-strong')
        conatiner.classList.remove('blank')
    }
})