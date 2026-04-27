export default function exibirFeedbacks() {
  const lista = JSON.parse(localStorage.getItem('meusFeedbacks')) || [];
  const corpoTabela = document.getElementById('corpoTabela');
  
  corpoTabela.innerHTML = ""; 

  lista.forEach(item => {
    const linha = `
      <tr>
        <td>${item.data}</td>
        <td>${item.nome}</td>
        <td>${item.idade}</td>
        <td>${item.frequencia}</td>
        <td>${item.aprendeu}</td>
        <td>${item.comentario}</td>
      </tr>
    `;
    corpoTabela.innerHTML += linha;
  });
}