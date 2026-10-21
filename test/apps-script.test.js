// Testa apps-script/Codigo.gs com planilha, Calendar e LockService falsos:
// nada toca a planilha real.
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { repoRoot } = require('./helpers');

const HEADERS_ANTIGOS = [
  'ID', 'Data Agendamento', 'Unidade', 'Data Revisão', 'Horário',
  'Nome Cliente', 'Telefone', 'Placa', 'Odômetro (km)', 'Observações',
  'Marca', 'Modelo', 'Revisão (km)', 'TMO (h)', 'Valor Hora MO',
  'Total Peças (R$)', 'Total MO (R$)', 'Total (R$)',
  'Peças', 'ID Evento Calendar', 'Status',
];

function abaFalsa(nome, linhas) {
  return {
    nome, linhas,
    appendRow(l) { this.linhas.push([...l]); },
    getDataRange() { return { getValues: () => this.linhas.map(l => [...l]) }; },
    getRange(r, c, nr = 1, nc = 1) {
      const aba = this;
      return {
        getValues: () => [Array.from({ length: nc }, (_, i) => (aba.linhas[r - 1] || [])[c - 1 + i] || '')],
        setValue: v => { (aba.linhas[r - 1] ||= [])[c - 1] = v; },
      };
    },
  };
}

function ambiente({ falhaPlanilha = false, eventos = [] } = {}) {
  const abas = {
    Todos:  abaFalsa('Todos',  [[...HEADERS_ANTIGOS]]),
    Santos: abaFalsa('Santos', [[...HEADERS_ANTIGOS]]),
  };
  const criados = [], apagados = [];
  const cal = {
    getEvents: () => eventos,
    createEvent: (titulo, ini, fim, op) => {
      const ev = { id: 'EV' + (criados.length + 1), titulo, ini, fim, op, setColor() {}, getId() { return this.id; } };
      criados.push(ev); return ev;
    },
  };
  const ss = {
    getId: () => 'planilha', getUrl: () => 'https://planilha', getName: () => 'x',
    getSheetByName: n => {
      if (falhaPlanilha) throw new Error('Serviço da planilha indisponível');
      return abas[n] || null;
    },
    getSheets: () => Object.values(abas),
  };
  let travado = 0;
  const ctx = {
    console,
    SpreadsheetApp: { getActiveSpreadsheet: () => ss },
    CalendarApp: {
      getCalendarById: () => cal, getDefaultCalendar: () => cal, EventColor: { PALE_RED: 1 },
      getEventById: id => ({ deleteEvent: () => apagados.push(id) }),
    },
    LockService: { getScriptLock: () => ({ waitLock: () => { travado++; }, releaseLock: () => { travado--; } }) },
    Utilities: { formatDate: () => '20/10/2026 10:00:00' },
    Logger: { log() {} },
    ContentService: { createTextOutput: t => ({ setMimeType: () => JSON.parse(t) }), MimeType: { JSON: 1 } },
  };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(repoRoot, 'apps-script/Codigo.gs'), 'utf8'), ctx, { filename: 'Codigo.gs' });
  const post = payload => ctx.doPost({ postData: { type: 'application/x-www-form-urlencoded' }, parameter: { payload: JSON.stringify(payload) } });
  return { ctx, abas, criados, apagados, post, travado: () => travado };
}

const base = (extra = {}) => ({
  action: 'confirmar_agendamento', idAgendamento: 'AG-1', unidade: 'santos', nomeUnidade: 'Santos',
  data: '2026-11-18', dataFmt: '18/11/2026', hora: '09:00', marca: 'Haojue', modelo: 'DK 160',
  kmLabel: '12.000 km', tmo: '3,0', valorHora: 110, totalPecas: '1,00', totalMO: '1,00', total: '2,00', pecasStr: 'x',
  cliente: { nome: 'Ana', tel: '13999999999', placa: 'ABC-1234', odo: '', obs: '' }, ...extra,
});

describe('Apps Script — confirmar agendamento', () => {
  test('grava nas abas Todos e da unidade, com as colunas novas no fim', () => {
    const E = ambiente();
    const r = E.post(base({ tipoAtendimento: 'Garantia', descricao: 'Barulho' }));
    assert.equal(r.ok, true);
    const linha = E.abas.Todos.linhas[1];
    assert.equal(linha[0], 'AG-1', 'usa o id enviado pelo site');
    assert.equal(linha[20], 'Agendado', 'Status continua na mesma coluna');
    assert.equal(linha[21], 'Garantia');
    assert.equal(linha[22], 'Barulho');
    assert.equal(E.abas.Todos.linhas[0][21], 'Tipo Atendimento', 'cabeçalho novo criado');
    assert.equal(E.abas.Santos.linhas.length, 2);
    assert.equal(E.travado(), 0, 'trava liberada');
  });

  test('mesmo id duas vezes (cliente tentou de novo) não duplica', () => {
    const E = ambiente();
    E.post(base());
    const r = E.post(base());
    assert.equal(r.ok, true);
    assert.equal(r.duplicado, true);
    assert.equal(E.abas.Todos.linhas.length, 2);
    assert.equal(E.criados.length, 1);
  });

  test('horário que ficou ocupado é recusado com mensagem clara', () => {
    const ev = { getTitle: () => '[Santos] Revisão', getStartTime: () => new Date(2026, 10, 18, 9, 0), getEndTime: () => new Date(2026, 10, 18, 10, 0) };
    const E = ambiente({ eventos: [ev] });
    const r = E.post(base());
    assert.equal(r.ok, false);
    assert.match(r.erro, /acabou de ser ocupado/);
    assert.equal(E.abas.Todos.linhas.length, 1);
    assert.equal(E.travado(), 0, 'trava liberada mesmo com erro');
  });

  test('falha na planilha vira erro (antes respondia ok) e apaga o evento criado', () => {
    const E = ambiente();
    const original = E.ctx.SpreadsheetApp.getActiveSpreadsheet();
    let chamadas = 0;
    const getSheet = original.getSheetByName;
    original.getSheetByName = n => { if (++chamadas > 1) throw new Error('Serviço da planilha indisponível'); return getSheet(n); };
    const r = E.post(base());
    assert.equal(r.ok, false);
    assert.match(r.erro, /indisponível/);
    assert.deepEqual(E.apagados, ['EV1']);
  });

  test('Serviços/Garantia: título do evento com o tipo e duração máxima de 8 h', () => {
    const E = ambiente();
    E.post(base({ tipoAtendimento: 'Serviços', descricao: 'Instalar baú', tmo: '72' }));
    const ev = E.criados[0];
    assert.match(ev.titulo, /^\[Santos\] Serviços Haojue DK 160/);
    assert.ok((ev.fim - ev.ini) / 3600000 <= 8);
    assert.match(ev.op.description, /Solicitação: Instalar baú/);
  });

  test('pedido antigo, sem tipo nem id, continua funcionando como Revisão', () => {
    const E = ambiente();
    const r = E.post(base({ idAgendamento: undefined }));
    assert.equal(r.ok, true);
    assert.match(E.criados[0].titulo, /\] Revisão /);
    assert.match(E.abas.Todos.linhas[1][0], /^AG-\d+$/);
    assert.equal(E.abas.Todos.linhas[1][21], 'Revisão');
  });
});

describe('Apps Script — listar agendamentos', () => {
  test('devolve tipo e descrição; linhas antigas sem as colunas novas viram Revisão', () => {
    const E = ambiente();
    E.post(base({ tipoAtendimento: 'Garantia', descricao: 'Barulho' }));
    E.abas.Todos.linhas.push(['AG-velho', '', 'Santos', '18-11-2026', '10:00 h', 'Bia', '', '', '', '', 'Suzuki', 'X', '6.000 km', '', '', '', '', '1', '', '', 'Agendado']);
    const r = E.post({ action: 'listar_agendamentos', mes: 11, ano: 2026 });
    const [novo, velho] = r.agendamentos;
    assert.equal(novo.tipoAtendimento, 'Garantia');
    assert.equal(novo.descricao, 'Barulho');
    assert.equal(velho.tipoAtendimento, 'Revisão');
    assert.equal(velho.descricao, '');
  });
});
