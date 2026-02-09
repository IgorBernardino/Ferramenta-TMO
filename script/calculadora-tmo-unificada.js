/* ======================================
   CALCULADORA TMO UNIFICADA
   Haojue • Suzuki • Zontes
   Regra: R$ 1,00 por cilindrada
====================================== */

/* ==============================
   CILINDRADA POR MODELO
============================== */
/* ⚠️ IMPORTANTE:
   - As chaves DEVEM bater exatamente
     com o value do <select id="veiculo">
*/
const cilindradaPorModelo = {
  // Haojue
  nex110: 110,
  lindy125: 125,
  chopper150: 150,
  dk150: 150,
  dk160: 160,
  dr160: 160,
  dl160: 160,
  nk150: 150,
  masterride150: 150,

  // Zontes
  v350: 350,
  t350: 350,
  gk350: 350,
  s350: 350,
  r350: 350,
  e350: 350,

  // Suzuki
  gsr150i: 150,
  boulevardm1800: 1800,
  boulevardm1500: 1500,
  bandit1250: 1250,
  boulevardm800: 800,
  gsx650f: 650,
  burgman650: 650,
  dl650: 650,
  gs120: 120,
  lta750x: 750,
  lta450x: 450,
  gsx150: 150,
  sv650a: 650,
  dl650: 650,
  dl650a: 650,
  gsx650f: 650,
  bandit650s: 650,
  gsr750: 750,
  gsxr750: 750,
  gsxs750a: 750,
  gsxs1000: 1000,
  gsxr1000: 1000,
  dl1000a: 1000,
  gsx1300: 1300
};

/* ==============================
   VALOR DA HORA
============================== */
function obterValorHoraPorCilindrada(modelo) {
  const key = modelo.toLowerCase();
  const cc = cilindradaPorModelo[key];

  if (!cc || isNaN(cc)) return 0;
  return cc; // R$ 1,00 por cilindrada
}

/* ==============================
   LISTAR SERVIÇOS
============================== */
function atualizarServicos() {
  const veiculo = document.getElementById('veiculo').value.toLowerCase();
  const selectServico = document.getElementById('servico');

  selectServico.innerHTML = '<option value="">Selecione o serviço</option>';
  selectServico.disabled = true;

  if (!tmoData[veiculo]) return;

  Object.entries(tmoData[veiculo]).forEach(([codigo, dados]) => {
    if (isNaN(dados.tempo)) return;

    const option = document.createElement('option');
    option.value = codigo;
    option.textContent = `${codigo} - ${dados.desc} (${dados.tempo}h)`;
    selectServico.appendChild(option);
  });

  selectServico.disabled = false;
}

/* ==============================
   ATUALIZAR INFO DE CILINDRADA
============================== */
function atualizarCilindrada() {
  const veiculo = document.getElementById('veiculo').value.toLowerCase();
  const info = document.getElementById('infoCilindrada');

  const valorHora = obterValorHoraPorCilindrada(veiculo);
  const cc = cilindradaPorModelo[veiculo];

  if (!valorHora) {
    info.style.display = 'none';
    document.getElementById('taxa').value = '';
    return;
  }

  document.getElementById('valorHora').textContent =
    `R$ ${valorHora.toFixed(2)} / h`;
  document.getElementById('detalheCilindrada').textContent =
    `${cc} cc`;

  document.getElementById('taxa').value = valorHora;
  info.style.display = 'block';
}

/* ==============================
   CÁLCULO FINAL
============================== */
function calcular() {
  const veiculo = document.getElementById('veiculo').value;
  const servico = document.getElementById('servico').value;
  const tipo = document.getElementById('tipoAtendimento').value;

  if (!veiculo) return alert('Selecione o veículo');
  if (!tipo) return alert('Selecione o tipo de atendimento');
  if (!servico) return alert('Selecione o serviço');

  const dados = tmoData[veiculo]?.[servico];
  if (!dados || isNaN(dados.tempo)) {
    return alert('Serviço inválido');
  }

  const valorHora = obterValorHoraPorCilindrada(veiculo);
  if (!valorHora) return alert('Cilindrada não encontrada');

  let total = dados.tempo * valorHora;

  // 🔥 REGRA NOVA: INTERNA = 50%
  if (tipo === 'interna') {
    total = total / 2;
  }

  document.getElementById('valorTotal').textContent =
    total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  document.getElementById('detalhes').innerHTML = `
    <strong>${dados.desc}</strong><br>
    Tempo: ${dados.tempo}h<br>
    Atendimento: ${tipo.toUpperCase()}<br>
    Valor hora: R$ ${valorHora},00
    ${tipo === 'interna' ? '<br><em>(interna)</em>' : ''}
  `;

  document.getElementById('resultado').style.display = 'block';
}


/* ==============================
   EVENTOS
============================== */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('veiculo')
    .addEventListener('change', () => {
      atualizarServicos();
      atualizarCilindrada();
    });

  document.getElementById('calcularBtn')
    .addEventListener('click', calcular);
});

function carregarVeiculos() {
  const selectVeiculo = document.getElementById('veiculo');

  if (!selectVeiculo || !window.tmoData) return;

  selectVeiculo.innerHTML = '<option value="">Selecione o veículo</option>';

  Object.keys(tmoData).forEach(veiculo => {
    const option = document.createElement('option');
    option.value = veiculo;
    option.textContent = veiculo.toUpperCase();
    selectVeiculo.appendChild(option);
  });
}