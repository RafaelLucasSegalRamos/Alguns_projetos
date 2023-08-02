var botao = document.getElementById("btn-dark-light");
var body = document.querySelector("body");

botao.addEventListener("click", function(){
    body.classList.toggle("dark");
})