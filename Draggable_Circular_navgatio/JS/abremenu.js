var menu = document.querySelector("nav");
var aberemnu = menu.querySelector(".toggle-btn");


aberemnu.addEventListener("click", function () {
    menu.classList.toggle("open");
    aberemnu.classList.toggle("active");
})


function onDrag({movementY}) {
    const navStyle = window.getComputedStyle(menu),
        navTop = Number.parseInt(navStyle.top),
        navHeight = Number.parseInt(navStyle.height),
        winHeight = Number.parseInt(window.innerHeight)
        console.log(movementY);
    
    if (navTop > winHeight - navHeight) {
        menu.style.top = `${winHeight - navHeight}px`;
    }
    menu.style.top = navTop > 0 ? `${navTop + movementY*1}px` : `1px`;
}

menu.addEventListener("mousedown", () => {
    menu.addEventListener("mousemove", onDrag);
})

menu.addEventListener("mouseup", () => {
    menu.removeEventListener("mousemove", onDrag);
}) 