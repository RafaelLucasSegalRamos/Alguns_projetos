document.addEventListener('mousemove', function(e)
{
    const body = document.querySelector('body')
    let span = document.createElement('span')

    span.classList = 'part'
    let x = e.offsetX //posição do maouse no eixo X, mas apenas quando o evento da função for mousemove

    let y = e.offsetY//posição do mouse no eixo Y, mas apenas quando o evento da função for mousemove


    let particle = document.getElementsByClassName('part')


        span.style.left = x+'px'

        span.style.top = y+'px'  
    
    

    let size = Math.random() * 8 
    span.style.width = 2 + size+'px'; 


    let transformValue = Math.random() * 360 

    span.style.transform = `rotate(${transformValue}deg)`
    body.appendChild(span)

    setTimeout(function(){
        particle[0].remove()
    }, 2000) // O comando time out serve para que após certa quantidade de milisegundos, uma função irá acontecer
})