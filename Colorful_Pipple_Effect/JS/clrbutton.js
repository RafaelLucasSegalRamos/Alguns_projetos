
var buttons = document.querySelectorAll('.clrbtn');

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;

        var lstcolor = color
        var color = Math.floor(Math.random() * 0xFFFFFF).toString(16)
        var nib = color.split(''); 
        console.log(nib)

        // var red = color[0]+color[1]
        // var green = color[2]+color[3]
        // var blue = color[4]+color[5]
        // console.log(red, green, blue)
        var r = parseInt(nib[1]+nib[2],16);
        var g = parseInt(nib[3]+nib[4],16);
        var b = parseInt(nib[5]+nib[6],16);
        
        console.log(r, g, b)

        lum = (r * 299 + g * 587 + b * 114) / 1000;
        console.log(lum)

        if (lum > 128) {
            btn.style.color = '#ffffff';
        } else {
            btn.style.color = '#000000';
        }

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        ripples.style.borderColor = `#${color}`;
        ripples.style.backgroundColor = `#${color}`;
        btn.style.color = `#${lstcolor}`;
        this.appendChild(ripples);

        setTimeout(() => {
            btn.style.backgroundColor = `#${color}`;
        }, 900);

        setTimeout(() => {
            ripples.remove()
        }, 1000);
    })
})