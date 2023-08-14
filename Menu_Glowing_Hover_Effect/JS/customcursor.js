var cursor = document.getElementById('cursor');
var body = document.body;

document.addEventListener('mousemove', function(e) {

    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})