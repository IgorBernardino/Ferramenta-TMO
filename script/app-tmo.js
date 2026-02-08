document.addEventListener('DOMContentLoaded', () => {

  carregarVeiculos();

  document.getElementById('veiculo')
    .addEventListener('change', () => {
      atualizarServicos();
      atualizarCilindrada();
    });

  document.getElementById('calcularBtn')
    .addEventListener('click', calcular);
});
