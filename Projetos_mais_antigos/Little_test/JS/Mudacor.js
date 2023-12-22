function mudacor(nth)
{
    let section = document.querySelector(`section:nth-child(${nth})`)

    section.classList.toggle('gradiente')
}