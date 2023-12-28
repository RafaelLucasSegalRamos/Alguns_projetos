beancan = document.querySelector("#bean-can-image");
beans = document.getElementById("beans");
buyButton = document.querySelectorAll(".upgrade");
Cincrease = document.querySelector(".cursor_increase");
beanPerClick = document.getElementById("bpc");


var bpc = 0.1
cont = 0

beancan.addEventListener("click", function() {
    resp = (parseFloat(beans.innerHTML) + parseFloat(bpc)).toFixed(1);
    beans.innerHTML = resp;
});

for (let i = 0; i < buyButton.length; i++) {
    
    buyButton[i].addEventListener("click", function() {
        let Level = document.querySelectorAll(`.level`)[i]
        let cost = document.querySelectorAll(`.cost`)[i]
        let increase = document.querySelectorAll(`.increase`)[i]

        
        if (parseFloat(beans.innerHTML) >= parseFloat(cost.innerHTML)) {
            // Não precisa mexer
            beans.innerHTML = (parseFloat(beans.innerHTML) - parseFloat(cost.innerHTML)).toFixed(1);
            cost.innerHTML = (parseFloat(cost.innerHTML) * 1.5).toFixed(1);
            // Aqui precisa
            if (parseFloat(Level.innerHTML) < 15) {
                Level.innerHTML = (parseInt(Level.innerHTML) + 1).toFixed(0);
                bpc = bpc + parseFloat(increase.innerHTML);	
                increase.innerHTML = (parseFloat(increase.innerHTML) * 1.5).toFixed(1)
                beanPerClick.innerHTML = bpc.toFixed(1);
                cost.innerHTML = (parseFloat(cost.innerHTML) * 1.1).toFixed(1);
            }
            else {
                bpc = parseFloat(increase.innerHTML) + bpc;
                Level.innerHTML = (parseInt(Level.innerHTML) + 1).toFixed(0);
                increase.innerHTML = (parseFloat(increase.innerHTML) * 1.3).toFixed(1);
                beanPerClick.innerHTML = bpc.toFixed(1);
                cost.innerHTML = (parseFloat(cost.innerHTML) * 1.3).toFixed(1);
            }
        }
        
    })
    
    
}