var lista_menu = document.querySelectorAll("ul.navigation li");

lista_menu.forEach(function (Li) {
    Li.addEventListener("mouseenter", function () {
        lista_menu.forEach(function (Li) {
            Li.classList.remove("active");
        })
        this.classList.add("active");
    })
})