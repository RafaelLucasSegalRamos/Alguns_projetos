var botao = document.getElementById("button-retreat");
var menu = document.querySelector(".float-side-bar");
let botao2 = document.querySelector("#pesquisa .pes");

botao.addEventListener("click", function(){
    menu.classList.toggle("estica");
    botao2.classList.toggle("pes");
});

botao2.addEventListener("click", function(){
    menu.classList.toggle("estica");
    botao2.classList.toggle("pes");
});