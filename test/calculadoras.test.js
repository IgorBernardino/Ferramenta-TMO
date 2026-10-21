const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { carregar } = require('./helpers');

// DOM mínimo: guarda elementos por id e captura o DOMContentLoaded,
// para simular a página da calculadora sem navegador.
function paginaFalsa() {
  const els = new Proxy({}, { get: (alvo, id) => (alvo[id] ||= novo()) });
  const novo = () => ({
    value: '', textContent: '', innerHTML: '', style: {}, options: [], src: '',
    classList: { add() {}, remove() {}, toggle() {} },
    addEventListener() {},
    appendChild(o) { this.options.push(o); },
  });
  const ouvintes = [];
  const document = {
    getElementById: id => els[id],
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: novo,
    addEventListener: (ev, fn) => { if (ev === 'DOMContentLoaded') ouvintes.push(fn); },
  };
  return { els, document, iniciar: () => ouvintes.forEach(f => f()) };
}

for (const [marca, arquivo] of [
  ['Suzuki', 'script/revisaosuzuki.js'],
  ['Haojue', 'script/revisaohaojue.js'],
  ['Zontes', 'script/revisaozontes.js'],
]) {
  describe(`Calculadora ${marca} — itens adicionais`, () => {
    function abrir() {
      const p = paginaFalsa();
      const api = carregar(arquivo, ['adicionarItemAdicional', 'itensAdicionais', 'pecasAvulsas'], { document: p.document });
      p.iniciar();
      return { ...api, els: p.els };
    }

    test('o menu de peças avulsas é preenchido ao abrir a página', () => {
      const c = abrir();
      assert.equal(c.els.selectAvulso.options.length, c.pecasAvulsas.length);
    });

    test('quantidade negativa, zero ou absurda vira um valor entre 1 e 99', () => {
      const c = abrir();
      for (const [digitado, esperado] of [['-5', 1], ['0', 1], ['abc', 1], ['', 1], ['1000', 99], ['3', 3]]) {
        c.itensAdicionais.length = 0;
        c.els.selectAvulso.value = '0';
        c.els.qtdAvulso.value = digitado;
        c.adicionarItemAdicional();
        assert.equal(c.itensAdicionais[0].qtd, esperado, `digitado "${digitado}"`);
      }
    });

    test('adicionar o mesmo item soma a quantidade, sem passar de 99', () => {
      const c = abrir();
      c.itensAdicionais.length = 0;
      for (const q of ['60', '60']) {
        c.els.selectAvulso.value = '0';
        c.els.qtdAvulso.value = q;
        c.adicionarItemAdicional();
      }
      assert.equal(c.itensAdicionais.length, 1);
      assert.equal(c.itensAdicionais[0].qtd, 99);
    });

    test('sem item escolhido não adiciona nada', () => {
      const c = abrir();
      c.itensAdicionais.length = 0;
      c.els.selectAvulso.value = '';
      c.adicionarItemAdicional();
      assert.equal(c.itensAdicionais.length, 0);
    });
  });
}

describe('Calculadora de TMO (mão de obra)', () => {
  const { tmoData } = carregar('script/tmo-data.js', ['window']).window;
  const calc = carregar('script/calculadora-tmo-unificada.js', ['cilindradaPorModelo', 'obterValorHoraPorCilindrada']);

  test('todo veículo da base de TMO tem cilindrada cadastrada', () => {
    const faltando = Object.keys(tmoData).filter(k => !calc.obterValorHoraPorCilindrada(k));
    assert.deepEqual(faltando, []);
  });

  test('valor da hora = R$ 1 por cilindrada; veículo desconhecido dá 0', () => {
    assert.equal(calc.obterValorHoraPorCilindrada('GSX1300'), 1300);
    assert.equal(calc.obterValorHoraPorCilindrada('nao-existe'), 0);
  });

  test('base de TMO: cada serviço tem descrição e tempo numérico ou NaN (cabeçalho de grupo)', () => {
    let validos = 0;
    for (const [modelo, servicos] of Object.entries(tmoData)) {
      for (const [codigo, s] of Object.entries(servicos)) {
        assert.equal(typeof s.desc, 'string', `${modelo}/${codigo}`);
        assert.equal(typeof s.tempo, 'number', `${modelo}/${codigo}`);
        if (!Number.isNaN(s.tempo)) { assert.ok(s.tempo >= 0 && s.tempo < 100, `${modelo}/${codigo}`); validos++; }
      }
    }
    assert.ok(validos > 5000);
  });
});

describe('Formatação de dinheiro nas calculadoras', () => {
  for (const arquivo of ['script/revisaosuzuki.js', 'script/revisaohaojue.js', 'script/revisaozontes.js']) {
    test(`${arquivo}: usa ponto de milhar e vírgula decimal`, () => {
      const { fmt } = carregar(arquivo, ['fmt']);
      assert.equal(fmt(1502), 'R$ 1.502,00');
      assert.equal(fmt(0), 'R$ 0,00');
      assert.equal(fmt(12.5), 'R$ 12,50');
      assert.equal(fmt(1234567.891), 'R$ 1.234.567,89');
    });
  }
});

describe('Zontes 368G — peças compartilhadas com a 350 E', () => {
  const d = carregar('script/revisaozontes.js', ['dadosRevisao']).dadosRevisao;
  const cod = (km, nome) => d.ZT368G[km].find(p => p.nome.startsWith(nome));
  test('filtro de óleo e filtro de ar próprios da 368G', () => {
    assert.deepEqual([cod(1000, 'Filtro do Óleo').codigo, cod(1000, 'Filtro do Óleo').valor], ['1050876005000', 160]);
    assert.deepEqual([cod(6000, 'Filtro de Ar').codigo, cod(6000, 'Filtro de Ar').valor], ['1226400259000', 195]);
  });
  test('correia, vela e filtro esponja iguais aos da 350 E', () => {
    const e350 = (km, nome) => d.E350[km].find(p => p.nome.startsWith(nome)).codigo;
    assert.equal(cod(18000, 'Correia').codigo, e350(20000, 'Correia'));
    assert.equal(cod(12000, 'Vela').codigo, e350(16000, 'Vela'));
    assert.equal(cod(12000, 'Filtro Esponja').codigo, e350(4000, 'Filtro Esponja'));
    assert.ok(cod(24000, 'Filtro Esponja'));
    assert.equal(cod(6000, 'Filtro Esponja'), undefined);
  });
});

describe('Burgman ADX 125 — plano da tabela Haojue de 01/09/2026', () => {
  const d = carregar('script/revisaohaojue.js', ['dadosRevisao', 'checklist']);
  const adx = d.dadosRevisao.ADX125;
  const nomes = km => JSON.parse(JSON.stringify((adx[km] || []).map(p => p.nome)));
  const KMS = [1000,3000,6000,9000,12000,15000,18000,21000,24000,27000,30000,33000,36000,39000,42000,45000,48000,51000,54000,57000];

  test('revisões de 1.000 a 57.000 km, com óleo de motor em todas', () => {
    for (const km of KMS) assert.ok(nomes(km).includes('Óleo do Motor'), `${km} km`);
    assert.equal(adx[60000], undefined);
  });
  test('ciclo de 18 mil km: 12.000 e 30.000 são revisões completas', () => {
    for (const km of [12000, 30000, 48000]) {
      for (const p of ['Filtro de Ar', 'Vela de Ignição', 'Fluido de Freio', 'Arruela de Dreno', 'Óleo de Transmissão']) {
        assert.ok(nomes(km).includes(p), `${km} km: falta ${p}`);
      }
    }
  });
  test('3.000, 9.000, 15.000 (e equivalentes) só trocam óleo de motor', () => {
    for (const km of [3000, 9000, 15000, 21000, 27000, 33000, 57000]) assert.deepEqual(nomes(km), ['Óleo do Motor'], `${km} km`);
  });
  test('6.000 e 18.000 (e equivalentes): óleo, arruela e óleo de transmissão', () => {
    for (const km of [6000, 18000, 24000, 36000, 42000, 54000]) {
      assert.deepEqual(nomes(km).sort(), ['Arruela de Dreno', 'Óleo de Transmissão', 'Óleo do Motor'].sort(), `${km} km`);
    }
  });
  test('códigos e preços informados pela oficina', () => {
    const p = (km, n) => adx[km].find(x => x.nome === n);
    assert.deepEqual([p(12000, 'Vela de Ignição').codigo, p(12000, 'Vela de Ignição').valor], ['09482-00621-000', 150]);
    assert.deepEqual([p(12000, 'Filtro de Ar').codigo, p(12000, 'Filtro de Ar').valor], ['13780H26L00H000', 90]);
    assert.equal(p(1000, 'Óleo de Transmissão').valor, 100);
  });
  test('TMO igual ao da Lindy 125', () => {
    assert.equal(JSON.stringify(adx.tmo), JSON.stringify(d.dadosRevisao.LINDY125.tmo));
  });
  test('checklist próprio: 12.000 km troca filtro de ar, vela e fluido; 3.000 só óleo', () => {
    const ck = d.checklist.ADX125;
    assert.ok(ck[12000].T.some(i => /Filtro de ar/i.test(i)));
    assert.ok(ck[12000].T.some(i => /Vela/i.test(i)));
    assert.ok(ck[12000].T.some(i => /Fluido de freio/i.test(i)));
    assert.equal(ck[3000].T.length, 1);
    assert.equal(JSON.stringify(ck[30000]), JSON.stringify(ck[12000]));
  });
});
