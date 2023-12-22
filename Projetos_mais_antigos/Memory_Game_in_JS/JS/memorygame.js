
const emojis = ["😍","😍","💖","💖","😵","😵","😢","😢","😎","😎","😀","😀","🤬","🤬","👍","👍"]

var shuffle_emojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1) 

for (var i = 0; i<emojis.length; i++)
{
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = shuffle_emojis[i]
    
    document.getElementById("game").appendChild(card)
    card.setAttribute('draggable', 'false')

    card.onclick = function() {
        card.classList.add("flip")

        setTimeout(function() {
            if (document.querySelectorAll(".flip").length>1)
            {
                if (document.querySelectorAll(".flip")[0].innerHTML === document.querySelectorAll(".flip")[1].innerHTML)
                {
                    document.querySelectorAll(".flip")[0].classList.add("done")
                    document.querySelectorAll(".flip")[1].classList.add("done")
                    document.querySelectorAll(".flip")[0].classList.remove("flip")
                    document.querySelectorAll(".flip")[0].classList.remove("flip")

                    if (document.querySelectorAll(".done").length == emojis.length)
                    {
                        document.getElementById("msgfinal").classList.add("fim")
                        document.getElementById("msgfinal").innerHTML = " You Won! "
                    }
                }
                else
                {
                    document.querySelectorAll(".flip")[0].classList.remove("flip")
                    document.querySelectorAll(".flip")[0].classList.remove("flip")

                }
            }
        }, 500)
    }
}

