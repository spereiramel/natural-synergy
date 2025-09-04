// Alvo: botão existente no seu site
const openBtn = document.getElementById('Botão para jogar');

// Botões e pop-up
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopupBtn');

// Abrir com fade-in (add classe)
openBtn.addEventListener('click', () => {
  popup.classList.add('show');
});

// Fechar com fade-out (remove classe)
closeBtn.addEventListener('click', () => {
  popup.classList.remove('show');
});

// Clicar fora do conteúdo fecha
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.classList.remove('show');
  }
});
