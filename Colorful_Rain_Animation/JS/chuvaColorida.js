var body = document.querySelector('body')

function rain(){
     let amount = 200
     
     let i = 0
     while(i < amount){
        let drop = document.createElement('i')
        let size = Math.random() * 5
        let posX = Math.floor(Math.random() * window.innerWidth)
        let delay = Math.random() * -20
        let duracao = Math.random() * 5

        drop.style.animationDelay = delay + 's'
        drop.style.animationDuration = duracao + 's'
        drop.style.width = 0.2 +size + 'px'
        drop.style.left = posX + 'px'
        drop.classList.add('drop')
        body.appendChild(drop)
        i++

        
       
     }
}
rain()
setInterval(rain, 5000)
var gotas = document.querySelectorAll('.drop')

setInterval(function(){
    for(let i = 0; i < gotas.length; i++){
        gotas[i].remove()
    }
}, 5000)