var nav = document.querySelector('menu');

var close = document.querySelector('.close');

nav.onclick = function() {
  nav.classList.add('open');
}
close.onclick = function() {
    nav.classList.remove('open');
  }