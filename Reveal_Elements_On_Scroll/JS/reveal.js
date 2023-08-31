for (let i = 1;i<=60;i++)
{
    let box = document.createElement('div')
    box.classList.add('box')
    document.querySelector('.container').appendChild(box)
}

let boxes = document.querySelectorAll('.box')

function scrollTrigger()
{
    boxes.forEach(box => {
        
        if(box.offsetTop < window.scrollY)
        {
            box.classList.add('show')
        }
        else
        {
            box.classList.remove('show')
        }
    })
}

window.addEventListener('scroll',scrollTrigger)

