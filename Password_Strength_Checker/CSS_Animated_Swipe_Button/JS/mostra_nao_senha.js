var linha_senha = document.getElementById("pass");
var botao_senha = document.querySelector(".show");

botao_senha.addEventListener("click", function () {
    botao_senha.classList.toggle("not");
    if (linha_senha.type === "password") {
        linha_senha.type = "text";
    }
    else {
        linha_senha.type = "password";
    }
    
});