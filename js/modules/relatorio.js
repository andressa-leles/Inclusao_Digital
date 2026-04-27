export default function initRelatorio() {
  const btnToggle = document.getElementById('btnToggleRelatorio');
  const btnLimpar = document.getElementById('btnLimparRelatorio');
  const conteudo = document.getElementById('conteudoRelatorio');
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

  
  if (btnToggle && conteudo) {
    btnToggle.addEventListener('click', () => {
      if (conteudo.style.display === 'none' || conteudo.style.display === '') {
        conteudo.style.display = 'block';
        exibirFeedbacks(); 
      } else {
        conteudo.style.display = 'none';
      }
    });
  }

  if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
      const confirmacao = confirm("Deseja apagar todos os feedbacks do relatório? Essa ação não pode ser desfeita.");
      if (confirmacao) {
        localStorage.removeItem('meusFeedbacks');
        exibirFeedbacks();
        alert("Relatório limpo!");
      }
    });
  }

  exibirFeedbacks();
}