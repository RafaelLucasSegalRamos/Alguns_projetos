beancan = document.querySelector("#bean-can-image");
beans = document.getElementById("beans");
buyButton = document.querySelectorAll(".upgrade");
Cincrease = document.querySelector(".cursor_increase");
beanPerClick = document.getElementById("bpc");
beanPerSecond = document.getElementById("bps");


var bpc = parseFloat(beanPerClick.innerHTML);
var bps = parseFloat(beanPerSecond.innerHTML);
cont = 0
feijoes = beans.innerHTML

beancan.addEventListener("click", function() {
    resp = parseFloat(beans.innerHTML) + bpc;
    
    if (resp > 1000){
        cont = cont + 1
        if (cont == 1){
            alert("Você tem mais de 1000 feijões, parabéns!")
        }

    }
    beans.innerHTML = resp;
});

for (let i = 0; i < buyButton.length; i++) {

    if (i == 0) {
        buyButton[i].addEventListener("click", function() {
            let Level = document.querySelectorAll(`.level`)[i]
            let cost = document.querySelectorAll(`.cost`)[i]
            let increase = document.querySelectorAll(`.increase`)[i]
    
            
            if (parseFloat(beans.innerHTML) >= parseFloat(cost.innerHTML)) {
                beans.innerHTML = (parseFloat(beans.innerHTML) - parseFloat(cost.innerHTML)).toFixed(1);
                cost.innerHTML = (parseFloat(cost.innerHTML) * 1.5).toFixed(1);
                if (parseFloat(Level.innerHTML) < 10) {
                    Level.innerHTML = (parseInt(Level.innerHTML) + 1).toFixed(0);
                    bpc = bpc + parseFloat(increase.innerHTML);	
                    increase.innerHTML = (parseFloat(increase.innerHTML) * 1.6).toFixed(1)
                    beanPerClick.innerHTML = bpc.toFixed(1);
                    cost.innerHTML = (parseFloat(cost.innerHTML) * 1.1).toFixed(1);
                }
                else {
                    bpc = parseFloat(increase.innerHTML) + bpc;
                    Level.innerHTML = (parseInt(Level.innerHTML) + 1).toFixed(0);
                    increase.innerHTML = (parseFloat(increase.innerHTML) * 1.2).toFixed(1);
                    beanPerClick.innerHTML = bpc.toFixed(1);
                    cost.innerHTML = (parseFloat(cost.innerHTML) * 1.4).toFixed(1);
                }
            }
            
        })
    }
    else{
        buyButton[i].addEventListener("click", function() {
            let Level = document.querySelectorAll(`.level`)[i]
            let cost = document.querySelectorAll(`.cost`)[i]
            let increase = document.querySelectorAll(`.increase`)[i]
    
            
            if (parseFloat(beans.innerHTML) >= parseFloat(cost.innerHTML)) {
                beans.innerHTML = (parseFloat(beans.innerHTML) - parseFloat(cost.innerHTML)).toFixed(1);
                if (parseFloat(Level.innerHTML) < 15) {
                    Level.innerHTML = (parseInt(Level.innerHTML) + 1).toFixed(0);
                    bps = bps + parseFloat(increase.innerHTML);	
                    increase.innerHTML = (parseFloat(increase.innerHTML) * 1.6).toFixed(2);
                    beanPerSecond.innerHTML = bps.toFixed(1);
                    cost.innerHTML = (parseFloat(cost.innerHTML) * 1.5).toFixed(2);
                }
                else {
                    bps = parseFloat(increase.innerHTML) + bps;
                    Level.innerHTML = (parseInt(Level.innerHTML) + 1).toFixed(0);
                    increase.innerHTML = (parseFloat(increase.innerHTML) * 1.25).toFixed(2);
                    beanPerSecond.innerHTML = bps.toFixed(1);
                    cost.innerHTML = (parseFloat(cost.innerHTML) * 1.7).toFixed(1);
                }
                
            }})
           

            setInterval(function() {
                beans.innerHTML = (parseFloat(beans.innerHTML) + parseFloat(bps/2)).toFixed(1);
            }, 1000);
    }}