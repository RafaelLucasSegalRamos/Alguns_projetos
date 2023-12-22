const pacman = document.getElementById("pacman");
const foods = document.querySelectorAll(".food");

function eatFood() {
  for (let i = 0; i < foods.length; i++) {
    const food = foods[i];
    const distance = Math.sqrt(
      Math.pow(pacman.offsetLeft - food.offsetLeft, 2) +
        Math.pow(pacman.offsetTop - food.offsetTop, 2)
    );
    if (distance < 30 && food.style.opacity !== "0") {
      food.style.opacity = "0";
      pacman.classList.toggle("open");
      setTimeout(() => {
        pacman.classList.toggle("open");
      }, 500);
    }
  }
}

setInterval(eatFood, 10);
