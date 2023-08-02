var botao = document.getElementById("btn-dark-light");
var body = document.querySelector("body");

botao.addEventListener("click", function(){
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
    botao.innerHTML = '<span class="iconBox"><i class="fa-solid fa-sun"></i></span> <span class="textBox">Light Mode</span>'
    }
    else{
    botao.innerHTML = '<span class="iconBox"><i class="fa-solid fa-moon"></i></span> <span class="textBox">Dark Mode</span>'
    }
})