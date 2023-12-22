for (let i = 1;i<=60;i++)
{
    let box = document.createElement('div')
    box.classList.add('box')
    box.style.background = randomColors()
    document.querySelector('.container').appendChild(box)
}

//now is just adding colors to the boxes

let rdnColors = document.querySelectorAll('.box')
function randomColors()
{
    let chars = '0123456789ABCDEF'
    const colorLength = 6
    var color = ''

    for(let i = 0;i<colorLength;i++)
    {
        ranCor = Math.floor(Math.random() * chars.length)
        color += chars.substring(ranCor,ranCor+1)
    }
    return "#"+color
}

randomColors()
// now we go back doing the scroll trigger

let boxes = document.querySelectorAll('.box')

function scrollTrigger()
{
    boxes.forEach(box => {
        
        if(box.offsetTop+100 < window.scrollY)
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

