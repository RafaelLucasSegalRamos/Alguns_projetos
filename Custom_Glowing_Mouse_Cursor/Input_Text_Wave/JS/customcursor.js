var cursor = document.getElementById('cursor');
var body = document.body;

document.addEventListener('mousemove', function(e) {
    // body.style.backgroundPositionX = e.pageX/-4 + 'px';
    // body.style.backgroundPositionY = e.pageY/-4 + 'px';

    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})