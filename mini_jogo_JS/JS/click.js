beancan = document.getElementsByClassName("bean-can-image");
beans = document.getElementById("beans");


beancan[0].addEventListener("click", function() {
    beans.innerHTML = (parseFloat(beans.innerHTML) + 0.1).toFixed(1);
});