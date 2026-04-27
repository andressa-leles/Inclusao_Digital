export default function initformulario() {
  const formFeedback = document.getElementById('formFeedback');
  const mensagemElement = document.getElementById('mensagem');
  const corpoTabela = document.getElementById('corpoTabela');

 
  function exibirFeedbacks() {
    if (!corpoTabela) return;
    const lista = JSON.parse(localStorage.getItem('meusFeedbacks')) || [];
    
    corpoTabela.innerHTML = ""; 
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

  
  exibirFeedbacks();

  if (formFeedback) {
    formFeedback.addEventListener('submit', function (event) {
      event.preventDefault();

      const selectValue = document.getElementById("aprendeu").value;
      const comentarioValue = document.getElementById("comentario").value;

      
      if (selectValue === "" || (selectValue === "nao" && comentarioValue.trim() === "")) {
        mensagemElement.textContent = "Por favor, preencha os campos obrigatórios.";
        mensagemElement.style.color = "red";
        return;
      }


      const feedback = {
        nome: document.getElementById('nome').value || "Anônimo",
        idade: document.getElementById('idade').value,
        frequencia: document.getElementById('frequencia').value,
        aprendeu: selectValue,
        comentario: comentarioValue,
        data: new Date().toLocaleDateString('pt-BR')
      };

     
      let listaFeedbacks = JSON.parse(localStorage.getItem('meusFeedbacks')) || [];
      listaFeedbacks.push(feedback);
      localStorage.setItem('meusFeedbacks', JSON.stringify(listaFeedbacks));

      
      mensagemElement.textContent = "Feedback enviado com sucesso! Verifique a tabela abaixo.";
      mensagemElement.style.color = "green";
      
      formFeedback.reset();
      exibirFeedbacks(); 

      setTimeout(() => { mensagemElement.textContent = ""; }, 5000);
    });
  }
}
