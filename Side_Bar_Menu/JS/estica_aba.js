var botao = document.getElementById("button-retreat");
var menu = document.querySelector(".float-side-bar");

botao.addEventListener("click", function(){
    menu.classList.toggle("estica");
});