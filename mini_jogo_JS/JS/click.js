beancan = document.querySelector("#bean-can-image");
beans = document.getElementById("beans");
cost = document.querySelector(".click-cost");
buyButton = document.querySelectorAll(".upgrade");
ClLevel = document.querySelector(".click-level");
Cincrease = document.querySelector(".cursor_increase");
beanPerClick = document.getElementById("bpc");


var bpc = 0.1

beancan.addEventListener("click", function() {
    resp = (parseFloat(beans.innerHTML) + parseFloat(bpc)).toFixed(1);
    beans.innerHTML = resp;
});

// buyButton[0].addEventListener("click", function() {
//     if (parseFloat(beans.innerHTML) >= parseFloat(cost.innerHTML)) {
//         beans.innerHTML = (parseFloat(beans.innerHTML) - parseFloat(cost.innerHTML)).toFixed(1);
//         cost.innerHTML = (parseFloat(cost.innerHTML) * 1.2).toFixed(1);
//         console.log(buyButton);
//         if (bpc < 5) {
//             bpc = (bpc * 2).toFixed(1);
//             Cincrease.innerHTML = bpc;
//             beanPerClick.innerHTML = bpc;
//             cost.innerHTML = (parseFloat(cost.innerHTML) * 1.2).toFixed(1);
//         }
//         else {
//             bpc = (bpc * 1.2).toFixed(1);
//             Cincrease.innerHTML = (bpc * 0.5).toFixed(1);
//             beanPerClick.innerHTML = bpc;
//             cost.innerHTML = (parseFloat(cost.innerHTML) * 1.3).toFixed(1);
//         }
//         ClLevel.innerHTML = parseInt(ClLevel.innerHTML) + 1;
//     }
// });

buyButton.forEach(element => {
    element.addEventListener("click", function() {
        if (parseFloat(beans.innerHTML) >= parseFloat(cost.innerHTML)) {
            
            beans.innerHTML = (parseFloat(beans.innerHTML) - parseFloat(cost.innerHTML)).toFixed(1);
            cost.innerHTML = (parseFloat(cost.innerHTML) * 1.2).toFixed(1);
            console.log(buyButton);
            if (bpc < 5) {
                bpc = (bpc * 2).toFixed(1);
                Cincrease.innerHTML = bpc;
                beanPerClick.innerHTML = bpc;
                cost.innerHTML = (parseFloat(cost.innerHTML) * 1.2).toFixed(1);
            }
            else {
                bpc = (bpc * 1.2).toFixed(1);
                Cincrease.innerHTML = (bpc * 0.5).toFixed(1);
                beanPerClick.innerHTML = bpc;
                cost.innerHTML = (parseFloat(cost.innerHTML) * 1.3).toFixed(1);
            }
            ClLevel.innerHTML = parseInt(ClLevel.innerHTML) + 1;
        }
    });
});