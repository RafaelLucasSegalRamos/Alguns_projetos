
// function criarCookie(){
// let nome = "Produto"
// let valor = document.getElementById('produto').value
// let validade = ''
// let local = 'path=/'


// document.cookie = nome + "=" + (valor || "") + validade + "; "+local


// }

// var pa = document.getElementById('resp')
// let dadosCookie = document.cookie
// console.log(dadosCookie)

// pa.innerHTML = document.cookie

function setCookie(nome, valor, dias){
    var validade = '';
    if(dias){
        var data = new Date();
        data.setDate(data.getDate() + dias);
        validade = 'expires=' + data.toUTCString();
    }
   
    document.cookie = nome + "=" + (valor || "") + validade + "; path=/";
}

function getCookie(nome){
    var nomeCookie = nome + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1, c.length);
        }
        if(c.indexOf(nomeCookie) == 0){
            return c.substring(nomeCookie.length, c.length);
        }
    }
    return null;
} 

// function checkCookie(){ 
//     var produto = getCookie("produto");
//     if(produto != null){
//         alert("Bem vindo de volta " + produto);
//     }else{
//         produto = prompt("Por favor, digite seu nome:", "");
//         if(produto != "" && produto != null){
//             setCookie("produto", produto, 365);
//         }
//     }
// }

function checkCookie(){
    document.cookie = nome +"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}