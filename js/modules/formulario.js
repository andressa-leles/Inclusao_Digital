export default function initformulario() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectValue = document.getElementById("aprendeu").value;
    const comentario = document.getElementById("comentario").value;
    const feedback = document.getElementById("mensagem");

    if (
      selectValue === "" ||
      (selectValue === "nao" && comentario.trim() === "")
    ) {
      feedback.textContent = "Por favor, preencha os campos obrigatórios.";
      feedback.className = "mensagem-erro";
    } else {
      let mensagemFinal = "Obrigado pelo seu feedback!";

      if (selectValue === "nao") {
        mensagemFinal +=
          " Sua opinião é importante! Conte para nós o que podemos melhorar.";
      }

      feedback.textContent = mensagemFinal;
      feedback.className = "mensagem-sucesso";

      form.reset();

      setTimeout(() => {
        feedback.textContent = "";
        feedback.className = "";
      }, 5000);
    }
  });
}
