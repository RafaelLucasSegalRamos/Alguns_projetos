var text = document.querySelectorAll("ul li a").forEach(text => {
    text.innerHTML = text.innerHTML.split('').map((letters, i) => `<span class="textsep" style="transition-delay:calc(${i}*0.1s)">${letters}</span>`).join('')
})