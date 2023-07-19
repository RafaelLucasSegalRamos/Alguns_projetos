let lastScrollTop = 0
cab = document.getElementById('cabecalho')

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
        cab.classList.add('icon')
    } else {
        cab.classList.remove('icon')
    }
    lastScrollTop = scrollTop

})