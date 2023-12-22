function randomText(){
    var symbols = "!@#$%^&*()_+{}|:<>?~";
    letters = symbols[Math.floor(Math.random() * symbols.length)];
    return letters;
}

function rain()
{
    let cloud = document.querySelector(".cloud");
    let e = document.createElement("div");
    e.classList.add("drop");
    cloud.appendChild(e);
    let left = Math.floor(Math.random() * 290);
    let size = Math.floor(Math.random() * 1.5);
    let duration = Math.random() *1

    e.innerText = randomText()
    e.style.left = left+"px";
    e.style.fontSize = 0.75+size+"em";
    e.style.animationDuration = 1+duration +"s";
    
    setTimeout(function(){
        e.remove();
    }, 2000);
    
}

setInterval(rain, 20);

