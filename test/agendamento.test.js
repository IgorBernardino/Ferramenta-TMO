const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { carregar, carregarAgendamento } = require('./helpers');

const A = carregarAgendamento();
const MARCAS = ['suzuki', 'haojue', 'zontes'];

// ── Cálculo de orçamento ───────────────────────────────────────
describe('calcularTotais — todas as combinações marca × modelo × km', () => {
  for (const marca of MARCAS) {
    for (const modelo of A.DADOS[marca].modelos) {
      test(`${marca} ${modelo}: total = peças + MO, finito e não negativo`, () => {
        const kms = A.getKmsDisponiveis(marca, modelo);
        assert.ok(kms.length > 0, 'modelo sem nenhuma revisão cadastrada');
        for (const km of kms) {
          const t = A.calcularTotais(marca, modelo, km);
          assert.ok(Number.isFinite(t.total) && t.total >= 0, `${km} km: total inválido (${t.total})`);
          assert.ok(t.pecas.length > 0, `${km} km: nenhuma peça cadastrada`);
          for (const p of t.pecas) {
            assert.ok(p.qtd > 0 && p.valor > 0, `${km} km: peça "${p.nome}" com qtd/valor inválido`);
          }
          if (t.pacote === undefined) {
            assert.equal(Math.round((t.totalPecas + t.totalMO) * 100), Math.round(t.total * 100));
          }
        }
      });
    }
  }
});

describe('Regras de preço', () => {
  test('Suzuki 6.000 km tem preço fechado de R$ 520 (exceto Burgman i)', () => {
    assert.equal(A.calcularTotais('suzuki', 'HAYABUSA', 6000).total, 520);
    assert.equal(A.calcularTotais('suzuki', 'VSTROM650', 6000).total, 520);
    assert.equal(A.getPacote('suzuki', 'BURGMAN_I', 6000), undefined);
  });

  test('350 E nova: 1.000 km custa R$ 260 e a mão de obra sai zerada (cortesia)', () => {
    const t = A.calcularTotais('zontes', 'E350', 1000);
    assert.equal(t.total, 260);
    assert.equal(t.totalMO, 0);
  });

  test('Haojue 1.000 km: inspeção sem custo de mão de obra', () => {
    assert.equal(A.calcularTotais('haojue', 'DK160', 1000).totalMO, 0);
  });

  test('Haojue segue o ciclo de peças de 12 mil km (completo / simples / arruela)', () => {
    const nomes = km => A.getPecas('haojue', 'DK160', km).map(p => p.nome);
    assert.ok(nomes(12000).includes('Vela de Ignição'), '12.000 é revisão completa');
    assert.ok(!nomes(3000).includes('Arruela de Dreno'), '3.000 é ciclo simples');
    assert.ok(nomes(6000).includes('Arruela de Dreno'), '6.000 é ciclo arruela');
  });

  test('getPecas devolve cópias: alterar o resultado não corrompe a tabela', () => {
    const p = A.getPecas('haojue', 'DK160', 3000);
    p[0].valor = 0;
    assert.equal(A.getPecas('haojue', 'DK160', 3000)[0].valor, 90);
  });
});

// ── Casos de borda ─────────────────────────────────────────────
describe('Casos de borda — entradas vazias, nulas e fora da tabela', () => {
  test('marca desconhecida, modelo nulo ou km inexistente não quebram', () => {
    assert.equal(A.getKmsDisponiveis('honda', 'CG160').length, 0);
    assert.equal(A.getKmsDisponiveis('suzuki', null).length, 0);
    assert.equal(A.getPecas('suzuki', 'HAYABUSA', 999999).length, 0);
    assert.equal(A.getPecas('zontes', 'V350', null).length, 0);
    assert.equal(A.getTmoReal('suzuki', 'NAO_EXISTE', 12000), 0);
  });

  test('km enviado como texto ("12000") dá o mesmo resultado que número', () => {
    assert.equal(A.calcularTotais('zontes', 'V350', '12000').total, A.calcularTotais('zontes', 'V350', 12000).total);
  });

  test('Duração exibida ao cliente nunca é zero', () => {
    for (const marca of MARCAS) {
      for (const modelo of A.DADOS[marca].modelos) {
        for (const km of A.getKmsDisponiveis(marca, modelo)) {
          assert.ok(A.getTmo(marca, modelo, km) >= 1, `${marca} ${modelo} ${km}`);
        }
      }
    }
  });
});

// ── Datas, feriados e fuso horário ─────────────────────────────
describe('Datas e feriados', () => {
  test('Feriados móveis de 2026: Carnaval, Sexta-feira Santa e Corpus Christi', () => {
    for (const d of ['2026-02-16', '2026-02-17', '2026-04-03', '2026-04-05', '2026-06-04']) {
      assert.equal(A.isFeriado(d), true, d);
    }
  });

  test('Páscoa calculada certo em anos conhecidos (inclusive bissexto)', () => {
    // 2024 (bissexto): 31/03 · 2025: 20/04 · 2027: 28/03 · 2038: 25/04 (a mais tardia possível)
    assert.ok(A.getFeriadosMoveis(2024).includes('31/03/2024'));
    assert.ok(A.getFeriadosMoveis(2025).includes('20/04/2025'));
    assert.ok(A.getFeriadosMoveis(2027).includes('28/03/2027'));
    assert.ok(A.getFeriadosMoveis(2038).includes('25/04/2038'));
  });

  test('Dia comum não é feriado; 29/02/2024 (bissexto) é dia útil; 29/02/2028 é Carnaval', () => {
    assert.equal(A.isFeriado('2026-10-20'), false);
    assert.equal(A.isDiaUtil('2024-02-29'), true);
    assert.equal(A.isFeriado('2028-02-29'), true, 'Páscoa 2028 = 16/04, Carnaval cai em 28 e 29/02');
  });

  test('proximoDiaUtil atravessa virada de ano e feriado (31/12 → 04/01)', () => {
    // 01/01/2027 é sexta (feriado), 02 e 03 são fim de semana.
    assert.equal(A.proximoDiaUtil('2027-01-01'), '2027-01-04');
  });

  test('proximoDiaUtil em dia útil devolve o próprio dia', () => {
    assert.equal(A.proximoDiaUtil('2026-10-20'), '2026-10-20');
  });

  test('Formatação: data, dinheiro e km no padrão brasileiro', () => {
    assert.equal(A.fmtDate('2026-03-09'), '09/03/2026');
    assert.equal(A.fmtDate(''), '');
    assert.equal(A.fmtBRL(1234.5), '1.234,50');
    assert.equal(A.fmtKm(12000), '12.000 km');
  });
});

// ── Segurança ──────────────────────────────────────────────────
describe('Segurança — função esc() real do agendamento.js', () => {
  test('neutraliza HTML e aspas', () => {
    assert.equal(A.esc('<img src=x onerror="alert(1)">'), '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');
    assert.equal(A.esc("O'Neil & cia"), 'O&#39;Neil &amp; cia');
  });
  test('trata nulo, indefinido e número', () => {
    assert.equal(A.esc(null), '');
    assert.equal(A.esc(undefined), '');
    assert.equal(A.esc(0), '0');
  });
});

// ── WhatsApp ───────────────────────────────────────────────────
describe('Mensagem de WhatsApp', () => {
  function montar(cliente, unidade = 'guaruja') {
    Object.assign(A.S, { unidade, brand: 'suzuki', modelo: 'HAYABUSA', km: 12000, data: '2026-10-21', hora: '09:00', cliente });
    return A.gerarMsgWA();
  }

  test('vai para o número da loja escolhida, com o texto codificado na URL', () => {
    const url = montar({ nome: 'Ana & Bia', tel: '(13) 99999-9999', placa: 'ABC-1D23', odo: '', obs: '' });
    assert.ok(url.startsWith('https://wa.me/5513991444073?text='));
    const texto = decodeURIComponent(url.split('text=')[1]);
    assert.ok(texto.includes('Ana & Bia'));
    assert.ok(texto.includes('21/10/2026'));
    assert.ok(!texto.includes('Odômetro'), 'odômetro vazio não aparece');
  });

  test('loja sem telefone usa o número padrão', () => {
    const url = montar({ nome: 'X', tel: '1', placa: 'A', odo: '', obs: '' }, 'santos');
    assert.ok(url.startsWith('https://wa.me/5513000000000?'));
  });
});

// ── Rede ───────────────────────────────────────────────────────
describe('Comunicação com o backend (fetch simulado)', () => {
  test('chamarBackend envia o payload como formulário e devolve o JSON', async () => {
    let recebido;
    const fetch = async (url, opts) => { recebido = opts.body.get('payload'); return { ok: true, json: async () => ({ ok: 1 }) }; };
    const X = carregarAgendamento({ fetch });
    assert.deepEqual(await X.chamarBackend({ action: 'teste' }), { ok: 1 });
    assert.equal(recebido, '{"action":"teste"}');
  });

  test('chamarBackend rejeita quando o servidor responde erro HTTP', async () => {
    const X = carregarAgendamento({ fetch: async () => ({ ok: false, status: 500 }) });
    await assert.rejects(X.chamarBackend({}), /500/);
  });

  test('chamarBackend rejeita quando a rede cai', async () => {
    const X = carregarAgendamento({ fetch: async () => { throw new TypeError('Failed to fetch'); } });
    await assert.rejects(X.chamarBackend({}), /Failed to fetch/);
  });
});

// ── Sincronização calculadoras × agendamento ───────────────────
describe('Sincronização: cada revisão do agendamento bate com a calculadora da marca', () => {
  const calcs = {
    suzuki: carregar('script/revisaosuzuki.js', ['dadosRevisao']).dadosRevisao,
    haojue: carregar('script/revisaohaojue.js', ['dadosRevisao']).dadosRevisao,
    zontes: carregar('script/revisaozontes.js', ['dadosRevisao']).dadosRevisao,
  };
  const chave = (calc, modelo) => calc[modelo] ? modelo
    : Object.keys(calc).find(k => k.replace(/[^A-Z0-9]/gi, '').toUpperCase() === modelo.replace(/[^A-Z0-9]/gi, ''));

  for (const marca of MARCAS) {
    for (const modelo of A.DADOS[marca].modelos) {
      test(`${marca} ${modelo}: peças e TMO iguais nas duas telas`, () => {
        const k = chave(calcs[marca], modelo);
        assert.ok(k, `modelo ${modelo} não existe na calculadora`);
        for (const km of A.getKmsDisponiveis(marca, modelo)) {
          const ag = A.calcularTotais(marca, modelo, km);
          const pecasCalc = (calcs[marca][k][km] || []).reduce((s, p) => s + p.qtd * p.valor, 0);
          assert.equal(pecasCalc, ag.totalPecas, `${km} km: peças calculadora R$ ${pecasCalc} × agendamento R$ ${ag.totalPecas}`);
          const tmoCalc = (calcs[marca][k].tmo || {})[km];
          if (tmoCalc !== undefined) assert.equal(tmoCalc, ag.tmoReal, `${km} km: TMO diferente`);
        }
      });
    }
  }
});

// ── Correções da revisão (escritos antes da correção, para provar o bug) ──
describe('Falhas de rede não podem ser escondidas do cliente', () => {
  const redeFora = async () => { throw new TypeError('Failed to fetch'); };

  test('buscarOcupados repassa a falha (antes devolvia [] e todos os horários pareciam livres)', async () => {
    const X = carregarAgendamento({ fetch: redeFora });
    await assert.rejects(X.buscarOcupados('2026-10-21'));
  });

  test('confirmarNoBackend falha quando o servidor devolve um erro no JSON', async () => {
    const X = carregarAgendamento({ fetch: async () => ({ ok: true, json: async () => ({ erro: 'planilha indisponível' }) }) });
    Object.assign(X.S, { unidade: 'guaruja', brand: 'suzuki', modelo: 'HAYABUSA', km: 12000, data: '2026-10-21', hora: '09:00',
      cliente: { nome: 'A', tel: '1', placa: 'ABC-1234', odo: '', obs: '' } });
    await assert.rejects(X.confirmarNoBackend(), /planilha indisponível/);
  });
});

describe('validarCliente', () => {
  const ok = { nome: 'Ana Souza', tel: '(13) 99999-9999', placa: 'bra2e19', odo: '12500', obs: ' barulho ' };

  test('aceita dados válidos e normaliza placa e espaços', () => {
    const r = A.validarCliente(ok);
    assert.equal(r.erro, null);
    assert.equal(r.cliente.placa, 'BRA-2E19');
    assert.equal(r.cliente.obs, 'barulho');
  });
  test('campos obrigatórios vazios ou só com espaços', () => {
    assert.match(A.validarCliente({ ...ok, nome: '   ' }).erro, /Preencha/);
    assert.match(A.validarCliente({ ...ok, tel: '' }).erro, /Preencha/);
    assert.match(A.validarCliente({}).erro, /Preencha/);
  });
  test('telefone com dígitos de menos ou de mais', () => {
    assert.match(A.validarCliente({ ...ok, tel: '9999-9999' }).erro, /telefone/i);
    assert.match(A.validarCliente({ ...ok, tel: '5513999999999' }).erro, /telefone/i);
  });
  test('placa inválida ou com HTML', () => {
    assert.match(A.validarCliente({ ...ok, placa: '<script>' }).erro, /Placa/);
    assert.match(A.validarCliente({ ...ok, placa: 'AB-12345' }).erro, /Placa/);
  });
  test('odômetro negativo, absurdo ou não numérico é rejeitado; vazio é aceito', () => {
    assert.match(A.validarCliente({ ...ok, odo: '-5' }).erro, /odômetro/i);
    assert.match(A.validarCliente({ ...ok, odo: '99999999' }).erro, /odômetro/i);
    assert.match(A.validarCliente({ ...ok, odo: 'abc' }).erro, /odômetro/i);
    assert.equal(A.validarCliente({ ...ok, odo: '' }).erro, null);
  });
  test('textos muito grandes são cortados', () => {
    const r = A.validarCliente({ ...ok, nome: 'A'.repeat(500), obs: 'B'.repeat(5000) });
    assert.equal(r.erro, null);
    assert.ok(r.cliente.nome.length <= 100);
    assert.ok(r.cliente.obs.length <= 500);
  });
});

describe('dataMinimaAgendamento', () => {
  const d = (y, m, dia) => new Date(y, m - 1, dia, 15, 0);
  test('é o próximo dia útil depois de hoje', () => {
    assert.equal(A.dataMinimaAgendamento(d(2026, 10, 20)), '2026-10-21'); // ter → qua
    assert.equal(A.dataMinimaAgendamento(d(2026, 10, 23)), '2026-10-26'); // sex → seg
    assert.equal(A.dataMinimaAgendamento(d(2026, 12, 31)), '2027-01-04'); // virada de ano + feriado
  });
  test('virada de mês em fevereiro de ano bissexto', () => {
    assert.equal(A.dataMinimaAgendamento(d(2024, 2, 28)), '2024-02-29');
  });
});
