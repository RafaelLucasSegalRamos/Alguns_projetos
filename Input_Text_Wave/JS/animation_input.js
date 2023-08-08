var label = document.querySelector('label');
label.innerHTML = label.innerText.split('').map((letter, i) => `<span>${letter}</span>`).join('');