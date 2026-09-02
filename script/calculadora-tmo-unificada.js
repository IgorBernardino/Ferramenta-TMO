/* ======================================
   CALCULADORA TMO UNIFICADA
   Haojue • Suzuki • Zontes
====================================== */

/* ==============================
   CILINDRADA POR MODELO
============================== */
/* Chave = chave do modelo em tmo-data.js. Manter os dois arquivos em sincronia:
   modelo sem cilindrada aqui = "Cilindrada não encontrada" na tela. */
const cilindradaPorModelo = {
  // ── Haojue ──
  nex110:         110,
  lindy:          125,   // chave usada em tmo-data.js
  lindy125:       125,   // alias
  chopper150:     150,
  dk150:          150,
  dk160:          160,
  dr160:          160,
  dl160:          160,
  nk150:          150,
  nk160:          160,
  masterride150:  150,

  // ── Zontes ──
  zontes350e:     350,
  v350:           350,
  t350:           350,
  gk350:          350,
  s350:           350,
  r350:           350,
  e350:           350,
  zt368g:         368,

  // ── Suzuki ──
  gs120:          120,
  burgman125:     125,
  en125:          125,
  gsr125s:        125,
  intruder125:    125,
  gsx150:         150,
  gsr150i:        150,
  inazuma250:     250,
  burgman400:     400,
  drz400e:        400,
  lta450x:        450,
  sv650a:         650,
  dl650:          650,
  dl650a:         650,
  gsx650f:        650,
  bandit650s:     650,
  burgman650:     650,
  lta750x:        750,
  gsr750:         750,
  gsxr750:        750,
  gsxs750a:       750,
  boulevardm800:  800,
  gsxs1000:      1000,
  gsxr1000:      1000,
  dl1000a:       1000,
  bandit1250:    1250,
  gsx1300:       1300,
  boulevardm1500:1500,
  boulevardm1800:1800,
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
   LISTA DE SERVIÇOS
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
   ATUALIZAR CILINDRADA
============================== */
function atualizarCilindrada() {
  const veiculo = document.getElementById('veiculo').value.toLowerCase();
  const info = document.getElementById('infoCilindrada');

  const valorHora = obterValorHoraPorCilindrada(veiculo);
  const cc = cilindradaPorModelo[veiculo];

  if (!valorHora) {
    info.style.display = 'none';
    return;
  }

  document.getElementById('valorHora').textContent =
    valorHora.toLocaleString('pt-BR', { style:'currency', currency:'BRL' }) + ' / h';
  document.getElementById('detalheCilindrada').textContent =
    `${cc} cc`;

  info.style.display = 'block';
}

/* ==============================
   CÁLCULO
============================== */
function calcular() {
  const veiculo = document.getElementById('veiculo').value.toLowerCase();
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

  // INTERNA = 50%
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
    Valor hora: ${valorHora.toLocaleString('pt-BR', { style:'currency', currency:'BRL' })}
    ${tipo === 'interna' ? '<br><em>(interna)</em>' : ''}
  `;

  document.getElementById('resultado').style.display = 'block';
}


function carregarVeiculos() {
  const selectVeiculo = document.getElementById('veiculo');

  if (!selectVeiculo || !window.tmoData) return;

  selectVeiculo.innerHTML = '<option value="">Selecione o veículo</option>';

  Object.keys(tmoData).sort((a, b) => a.localeCompare(b, 'pt-BR')).forEach(veiculo => {
    const option = document.createElement('option');
    option.value = veiculo;
    option.textContent = veiculo.toUpperCase();
    selectVeiculo.appendChild(option);
  });
}