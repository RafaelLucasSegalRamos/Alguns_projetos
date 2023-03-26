const list = document.querySelectorAll('li');

function activeLink(){
    list.forEach(
        (item) => item.classList.remove('active')
        );
    this.classList.add('active');
}
list.forEach(
    (item) => item.addEventListener('mouseenter', activeLink)
    );