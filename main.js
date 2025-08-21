// script.js
/* const questions = [
  {
      question: "Qual relação ecológica é exemplificada por uma abelha polinizando uma flor?",
      options: ["Mutualismo", "Comensalismo", "Parasitismo", "Predação"],
      answer: "Mutualismo"
  },
  {
      question: "Qual relação ecológica é exemplificada por um peixe-limpador e um tubarão?",
      options: ["Mutualismo", "Comensalismo", "Parasitismo", "Competição"],
      answer: "Comensalismo"
  },
  {
      question: "Qual relação ecológica é exemplificada por um parasita se alimentando do sangue de um hospedeiro?",
      options: ["Mutualismo", "Comensalismo", "Parasitismo", "Predação"],
      answer: "Parasitismo"
  },
  {
      question: "Qual relação ecológica é exemplificada pela luta de dois animais pelo mesmo território?",
      options: ["Mutualismo", "Comensalismo", "Competição", "Predação"],
      answer: "Competição"
  },
  {
      question: "Qual relação ecológica é exemplificada por um leão caçando uma zebra?",
      options: ["Mutualismo", "Comensalismo", "Parasitismo", "Predação"],
      answer: "Predação"
  }
];

let currentQuestionIndex = 0;
let score = 0;

// Função para mostrar a pergunta atual e as opções
function showQuestion() {
  const questionContainer = document.getElementById('quiz-content');
  questionContainer.innerHTML = '';

  const question = questions[currentQuestionIndex];

  const questionElement = document.createElement('div');
  questionElement.innerHTML = `<h2>${question.question}</h2>`;
  questionContainer.appendChild(questionElement);

  const optionsContainer = document.createElement('div');
  optionsContainer.classList.add('options');

  question.options.forEach(option => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.textContent = option;
      optionElement.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(optionElement);
  });

  questionContainer.appendChild(optionsContainer);
}

// Função para verificar a resposta do jogador
function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  const options = document.querySelectorAll('.option');

  options.forEach(option => {
      option.classList.add('disabled');  // Desabilita as opções após a resposta
      if (option.textContent === correctAnswer) {
          option.classList.add('correct');
      }
      if (option.textContent === selectedOption && selectedOption !== correctAnswer) {
          option.classList.add('incorrect');
      }
  });

  document.getElementById('next-btn').disabled = false; // Habilita o botão "Próxima"
}

// Função para ir para a próxima pergunta
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
      showQuestion();
      document.getElementById('next-btn').disabled = true; // Desabilita o botão "Próxima" novamente
  } else {
      alert(`Quiz terminado! Você acertou ${score} de ${questions.length}`);
      restartQuiz();
  }
}

// Função para reiniciar o quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('next-btn').disabled = true;
  showQuestion();
}

// Inicializa o quiz
showQuestion();
*/
