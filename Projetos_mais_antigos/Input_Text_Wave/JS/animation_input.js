var label = document.querySelector('label');
label.innerHTML = label.innerText.split('').map((letter, i) => `<span class="letral">${letter}</span>`).join('');