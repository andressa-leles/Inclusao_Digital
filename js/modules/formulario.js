export default function initformulario() {
  const formFeedback = document.getElementById('formFeedback');
  const mensagemElement = document.getElementById('mensagem');
  const corpoTabela = document.getElementById('corpoTabela');

  // FUNÇÃO PARA MOSTRAR OS DADOS NA TABELA
  function exibirFeedbacks() {
    if (!corpoTabela) return;
    const lista = JSON.parse(localStorage.getItem('meusFeedbacks')) || [];
    
    corpoTabela.innerHTML = ""; // Limpa antes de renderizar
    lista.forEach(item => {
      const linha = `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.data}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.nome}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.idade}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.frequencia}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.aprendeu}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.comentario}</td>
        </tr>
      `;
      corpoTabela.innerHTML += linha;
    });
  }

  // Mostra a tabela assim que a página carrega
  exibirFeedbacks();

  if (formFeedback) {
    formFeedback.addEventListener('submit', function (event) {
      event.preventDefault();

      const selectValue = document.getElementById("aprendeu").value;
      const comentarioValue = document.getElementById("comentario").value;

      // Validação básica
      if (selectValue === "" || (selectValue === "nao" && comentarioValue.trim() === "")) {
        mensagemElement.textContent = "Por favor, preencha os campos obrigatórios.";
        mensagemElement.style.color = "red";
        return;
      }

      // Criar objeto
      const feedback = {
        nome: document.getElementById('nome').value || "Anônimo",
        idade: document.getElementById('idade').value,
        frequencia: document.getElementById('frequencia').value,
        aprendeu: selectValue,
        comentario: comentarioValue,
        data: new Date().toLocaleDateString('pt-BR')
      };

      // Salvar
      let listaFeedbacks = JSON.parse(localStorage.getItem('meusFeedbacks')) || [];
      listaFeedbacks.push(feedback);
      localStorage.setItem('meusFeedbacks', JSON.stringify(listaFeedbacks));

      // Sucesso
      mensagemElement.textContent = "Feedback enviado com sucesso! Verifique a tabela abaixo.";
      mensagemElement.style.color = "green";
      
      formFeedback.reset();
      exibirFeedbacks(); // Atualiza a tabela na hora!

      setTimeout(() => { mensagemElement.textContent = ""; }, 5000);
    });
  }
}
