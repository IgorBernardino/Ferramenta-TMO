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
