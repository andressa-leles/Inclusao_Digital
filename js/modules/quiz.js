export default function initQuiz() {
  const questions = document.querySelectorAll('.quiz-question');
  let currentQuestionIndex = 0;
  let score = 0; 

  function showQuestion(index) {
    questions.forEach((q, i) => {
      q.classList.toggle('active', i === index);
      q.classList.toggle('hidden', i !== index);
    });
  }

  const options = document.querySelectorAll('.quiz-option');

  options.forEach(button => {
    button.addEventListener('click', () => {
      const isCorrect = button.getAttribute('data-correct') === 'true';
      const feedback = button.parentElement.querySelector('.quiz-feedback');
      
      
      const currentButtons = button.parentElement.querySelectorAll('.quiz-option');
      currentButtons.forEach(btn => btn.disabled = true);

      if (isCorrect) {
        score++;
        feedback.textContent = "✅ Resposta correta!";
        feedback.style.color = "green";
      } else {
        feedback.textContent = "❌ Resposta incorreta. Revise o conteúdo dos módulos!";
        feedback.style.color = "red";
      }

      
      setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
          showQuestion(currentQuestionIndex);
        } else {
          showFinalResult();
        }
      }, 2000);
    });
  });

  function showFinalResult() {
    const quizContainer = document.querySelector('#quiz .container');
    let mensagemFinal = "";

    if (score >= 8) {
      mensagemFinal = "🌟 Excelente! Você é um mestre da segurança digital.";
    } else if (score >= 5) {
      mensagemFinal = "👍 Bom trabalho! Mas que tal revisar os módulos para aprender mais?";
    } else {
      mensagemFinal = "👨‍🏫 Continue estudando! A internet pode ser segura se soubermos os caminhos.";
    }

    quizContainer.innerHTML = `
      <div class="quiz-result">
        <h2>Fim do Desafio!</h2>
        <p>Sua pontuação foi: <strong>${score} de ${questions.length}</strong></p>
        <p>${mensagemFinal}</p>
        <button onclick="location.reload()" class="btn">Refazer o Guia</button>
      </div>
    `;
  }
}