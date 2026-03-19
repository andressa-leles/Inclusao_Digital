export default function initQuiz() {
  const perguntas = document.querySelectorAll(".quiz-question");
  const opcoes = document.querySelectorAll(".quiz-option");

  let perguntaAtual = 0;

  function mostrarPergunta() {
    perguntas.forEach((pergunta) => {
      pergunta.classList.add("hidden");
    });

    perguntas[perguntaAtual].classList.remove("hidden");
  }

  opcoes.forEach((button) => {
    button.addEventListener("click", () => {
      const feedback = perguntas[perguntaAtual].querySelector(".quiz-feedback");
      const isCorrect = button.dataset.correct;

      if (isCorrect == "true") {
        feedback.innerHTML = "Correto!";
      } else {
        feedback.innerHTML = "Resposta Incorreta!";
      }

      setTimeout(() => {
        if (perguntaAtual < perguntas.length - 1) {
          perguntaAtual++;
          mostrarPergunta();
        } else {
          alert("Parabéns! Você terminou o quiz.");
        }
      }, 2000);
    });
  });
}
