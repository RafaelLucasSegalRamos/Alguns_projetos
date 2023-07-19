
const emojis = ["😍","😍","💖","💖","😵","😵","😢","😢","😎","😎","😀","😀","🤬","🤬","👍","👍"]

var shuffle_emojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1) 

for (var i = 0; i<emojis.length; i++)
{
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = shuffle_emojis[i]
    card.draggable = false
    document.getElementById("game").appendChild(card)

}

