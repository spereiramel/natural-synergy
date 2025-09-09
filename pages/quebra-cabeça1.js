const grade = document.getElementById("grade");
let movimentos = 0;
let tempo = 0;
let timerInterval = null;
var embaralhando = false;


const movimentosEl = document.getElementById("movimentos");
const tempoEl = document.getElementById("tempo");


for (var i = 0; i<4; i++){
  for(var j = 0; j<6; j++){
    var novaPeca = document.createElement("div");
    novaPeca.id="x"+j+"y"+i;
    novaPeca.style.top=i*50+"px";
    novaPeca.style.left=j*50+"px";
    novaPeca.style.backgroundPositionX=((j*25/(6-1))*100)+"%";
    novaPeca.style.backgroundPositionY=((i*25/(4-1))*100)+"%";
    novaPeca.setAttribute("onclick", "clicarPeca(this)");
    grade.appendChild(novaPeca);
  }
}


function iniciarTimer() {
  timerInterval = setInterval(() => {
    tempo++;
    const minutos = String(Math.floor(tempo / 60)).padStart(2, '0');
    const segundos = String(tempo % 60).padStart(2, '0');
    tempoEl.textContent = `${minutos}:${segundos}`;
  }, 1000);
}

var escolhido1=null;
var escolhido2=null;

function clicarPeca(argElemento){
  if (escolhido1==null){
    escolhido1=argElemento;
  } else if (escolhido2==null){
    escolhido2=argElemento;
    trocarPeca();
  }
}

function embaralhar(argInteracoes) {
  embaralhando = true; //Ativa flag para não contar movimentos

  for (var i = 0; i < argInteracoes; i++) {
    var escolhido1X = 0;
    var escolhido1Y = 0;
    var escolhido2X = 0;
    var escolhido2Y = 0;

    while (escolhido1X == escolhido2X && escolhido1Y == escolhido2Y) {
      escolhido1X = Math.floor(Math.random() * 6);
      escolhido1Y = Math.floor(Math.random() * 4);
      escolhido2X = Math.floor(Math.random() * 6);
      escolhido2Y = Math.floor(Math.random() * 4);
    }

    escolhido1 = document.getElementById("x" + escolhido1X + "y" + escolhido1Y);
    escolhido2 = document.getElementById("x" + escolhido2X + "y" + escolhido2Y);
    trocarPeca();
  }

  embaralhando = false; // Desativa flag depois de embaralhar

  // Reinicia contador e timer
  movimentos = 0;
  tempo = 0;
  movimentosEl.textContent = movimentos;
  tempoEl.textContent = "00:00";

  clearInterval(timerInterval);
}

  function trocarPeca() {
    var escolhidoTrocadoTop = escolhido1.style.top;
    var escolhidoTrocadoLeft = escolhido1.style.left;
  
    escolhido1.style.top = escolhido2.style.top;
    escolhido1.style.left = escolhido2.style.left;
    escolhido2.style.top = escolhidoTrocadoTop;
    escolhido2.style.left = escolhidoTrocadoLeft;
  
    escolhido1 = null;
    escolhido2 = null;
  
    // Só conta movimentos se não estiver embaralhando
    if (!embaralhando) {
      movimentos++;
      movimentosEl.textContent = movimentos;
    }
  
    validar();
  }  

function validar(){
  var quebraCabecaOk=true;
  for(var i=0; i<4; i++){
    for(var j=0; j<6; j++){
      var posicaoXEsperada=j*50+"px";
      var posicaoYEsperada=i*50+"px";

      var pecaVerificada=document.getElementById("x"+j+"y"+i);
      if(pecaVerificada.style.left!=posicaoXEsperada || pecaVerificada.style.top!=posicaoYEsperada){
        quebraCabecaOk=false;
        }
      }
    }
    
const popup = document.getElementById('popup');
    if(quebraCabecaOk){
      popup.classList.add('show');
      clearInterval(timerInterval);
    }
  }

embaralhar(100);
iniciarTimer();

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
