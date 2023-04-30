const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Define as dimensões do canvas
canvas.width = 400;
canvas.height = 200;

// Define a cor de fundo
ctx.fillStyle = 'blueviolet';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Solicita ao usuário que forneça um texto
const texto = prompt('Digite um texto:');

// Define as propriedades do texto
ctx.fillStyle = 'black';
ctx.font = 'bold 30px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Define a posição do texto no canvas
const x = canvas.width / 2;
const y = canvas.height / 2;

// Desenha o texto no canvas
ctx.fillText(texto, x, y);

// Text-to-Image V2

// cria um canvas e contexto 2D
const canva = document.createElement('canvas');
const ctxs = canva.getContext('2d');

// define a largura e altura do canvas
canva.width = 400;
canva.height = 200;

// define o estilo do texto
ctxs.font = 'bold 48px Arial';
ctxs.fillStyle = '#009977';
ctxs.textAlign = 'center';
ctxs.textBaseline = 'middle';

// escreve o texto no centro do canvas
ctxs.fillText('Olá mundo!', canvas.width / 2, canvas.height / 2);

// converte o canvas em uma imagem
const img = new Image();
img.src = canva.toDataURL();

// adiciona a imagem ao corpo do documento
document.body.appendChild(img);
