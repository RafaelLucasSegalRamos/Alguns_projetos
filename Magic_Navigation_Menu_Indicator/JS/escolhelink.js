var marker = document.getElementById('indicator');
var nav = document.querySelector('nav');
let items = document.querySelectorAll('nav a');

nav.addEventListener('click', (e) => {
    marker.classList.toggle('change');
})

function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
    marker.style.display = 'block';
    marker.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
}

items.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
})

function addActiveClass(){
    items.forEach((i) => i.classList.remove('active'))
    this.classList.add('active')
}

items.forEach((i) => i.addEventListener('click', addActiveClass))