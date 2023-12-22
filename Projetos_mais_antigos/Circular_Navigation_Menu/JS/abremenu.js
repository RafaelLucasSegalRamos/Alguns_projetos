var aberemnu = document.querySelector(".toggle");
var menu = document.querySelector(".menu");

aberemnu.addEventListener("click", function () {
    menu.classList.toggle("active");
    aberemnu.classList.toggle("active");
})
