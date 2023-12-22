var nav = document.getElementById('rad');
var menu = document.querySelector('ul.menu');

nav.addEventListener('click', function(e) {
    menu.classList.toggle('open');
})