// Carrega os scripts do site (que foram escritos para o navegador) dentro de
// uma "caixa de areia" do Node, com um window/document falso. Assim os testes
// exercitam o código real, e não uma cópia das funções.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const repoRoot = path.resolve(__dirname, '..');

const CONFIG_TESTE = {
  APPS_SCRIPT_URL: 'https://exemplo.invalid/exec',
  WA_NUM_PADRAO: '5513000000000',
  MO_HORA: 110,
  HORARIOS: ['08:00', '08:30', '09:00'],
  UNIDADES: {
    guaruja: { label: 'Guarujá', end: 'Av. Ademar de Barros, 1501 - B', cor: '#E24B4A', tel: '5513991444073' },
    santos:  { label: 'Santos',  end: 'R. Braz Cubas, 388',             cor: '#2563EB' },
  },
};

function domFalso() {
  const el = () => ({
    addEventListener() {}, appendChild() {}, setAttribute() {},
    classList: { add() {}, remove() {}, toggle() {} },
    style: {}, value: '', innerHTML: '', textContent: '', options: [],
  });
  return {
    addEventListener() {},
    getElementById: el,
    querySelector: el,
    querySelectorAll: () => [],
    createElement: el,
  };
}

/**
 * Executa `relPath` e devolve as variáveis globais pedidas em `nomes`.
 * `extras` entra no escopo global (ex.: { fetch, CONFIG }).
 */
function carregar(relPath, nomes, extras = {}) {
  const codigo = fs.readFileSync(path.join(repoRoot, relPath), 'utf8');
  const ctx = {
    console,
    URLSearchParams,
    window: { addEventListener() {} },
    document: domFalso(),
    ...extras,
  };
  vm.createContext(ctx);
  const exporta = nomes.map(n => `${n}: typeof ${n} !== 'undefined' ? ${n} : undefined`).join(',');
  vm.runInContext(`${codigo}\n;this.__exports = { ${exporta} };`, ctx, { filename: relPath });
  return ctx.__exports;
}

function carregarAgendamento(extras = {}) {
  return carregar('agendamento/agendamento.js', [
    'DADOS', 'S', 'getKmsDisponiveis', 'getTmo', 'getTmoReal', 'getChecklist', 'getPecas',
    'getPacote', 'calcularTotais', 'isFeriado', 'isDiaUtil', 'proximoDiaUtil',
    'getFeriadosMoveis', 'esc', 'fmtDate', 'fmtBRL', 'fmtKm', 'chamarBackend',
    'buscarOcupados', 'confirmarNoBackend', 'gerarMsgWA', 'validarCliente', 'dataMinimaAgendamento',
  ], { CONFIG: structuredClone(CONFIG_TESTE), ...extras });
}

module.exports = { repoRoot, carregar, carregarAgendamento, CONFIG_TESTE };
