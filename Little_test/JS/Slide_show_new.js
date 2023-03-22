var imgs = document.getElementsByClassName('image')

let slideIndex = 1;
showSlides(slideIndex);

function mudaimg(valor)
{
    showSlides(slideIndex += valor);
}

function showSlides(valor)
{
    if (valor > imgs.length)
    {
        slideIndex = 1
    }
    else if (valor < 1)
    {
        slideIndex = imgs.length
    }
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";  
    }
    imgs    [slideIndex-1].style.display = "block";  

}