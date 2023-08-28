var sec = document.querySelectorAll('section');
var links = document.querySelectorAll('header nav a');

window.onscroll = function(){ 
    sec.forEach(section =>{
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height){
            links.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}