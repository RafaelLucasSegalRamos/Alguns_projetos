var links = document.querySelectorAll(".botao");

links.forEach(function (link) {
    link.addEventListener("click", function (e) {
        link.classList.toggle("clicked");
    })
})