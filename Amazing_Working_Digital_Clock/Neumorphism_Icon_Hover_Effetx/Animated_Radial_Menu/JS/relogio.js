var hora = document.getElementById('hh');
var minuto = document.getElementById('mm');
var segundo = document.getElementById('ss');
var dot_sec = document.querySelector('.sec_dot');
var dot_min = document.querySelector('.min_dot');
var dot_hora = document.querySelector('.hr_dot');
var caixahora = document.getElementById('h');
var caixaminuto = document.getElementById('m');
var caixasegundo = document.getElementById('s');
var ampm = document.getElementById('ampm');


setInterval(function(){ 
    let data = new Date();
    let hh = data.getHours();
    let mm = data.getMinutes();
    let ss = data.getSeconds();

    hora.style.strokeDashoffset = (510 - (510*hh)/12) * (-1);
    // No caso 12 é ser o formato de 12 horas para manhã(AM) e tarde(PM)
    minuto.style.strokeDashoffset = 630 - (630*mm)/60;
    segundo.style.strokeDashoffset = 760 - (760*ss)/60;
    // Fica 60 para ambos pois são 60 minutos e 60 segundos
    
    dot_sec.style.transform = `rotateZ(${ss*6}deg)`;
    dot_min.style.transform = `rotateZ(${mm*6}deg)`;
    dot_hora.style.transform = `rotateZ(${hh*30}deg)`;

    ampm.innerHTML = 'AM';
    if (h > 12) { 
        hh = hh - 12;
        ampm.innerHTML ='PM';
    }

    hh = (hh < 10) ? '0' + hh : hh;
    mm = (mm < 10) ? '0' + mm : mm;
    ss = (ss < 10) ? '0' + ss : ss;

    caixahora.innerHTML = hh;
    caixaminuto.innerHTML = mm;
    caixasegundo.innerHTML = ss;
    

});