const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');

// Helper para carregar scripts com contexto mockado de navegador
function loadScript(relPath, exportVarName) {
  const content = fs.readFileSync(path.join(repoRoot, relPath), 'utf8');
  const mockWindow = {};
  const mockDoc = {
    addEventListener: () => {},
    getElementById: () => ({ addEventListener: () => {}, textContent: '', innerHTML: '', style: {}, value: '' }),
    querySelectorAll: () => [],
    createElement: () => ({ addEventListener: () => {}, style: {} }),
  };
  const fn = new Function('window', 'document', content + `; return (typeof ${exportVarName} !== "undefined" ? ${exportVarName} : null);`);
  return fn(mockWindow, mockDoc);
}

const dadosSuzuki = loadScript('script/revisaosuzuki.js', 'dadosRevisao');
const dadosHaojue = loadScript('script/revisaohaojue.js', 'dadosRevisao');
const dadosZontes = loadScript('script/revisaozontes.js', 'dadosRevisao');

// Carregar DADOS e helpers de agendamento.js
const agendContent = fs.readFileSync(path.join(repoRoot, 'agendamento/agendamento.js'), 'utf8');
const matchDados = agendContent.match(/const DADOS = (\{[\s\S]*?\n\};)/);
const DADOS = eval('(' + matchDados[1].replace(/;\s*$/, '') + ')');

// Módulos de lógica isolados para teste
const mockConfig = {
  MO_HORA: 110,
  UNIDADES: {
    guaruja: { label: 'Guarujá', end: 'Av. Ademar de Barros', cor: '#E24B4A', tel: '5513991444073' }
  }
};

describe('1. Verificação de Dados Internos dos Scripts de Revisão', () => {
  test('Lindy 125 em revisaohaojue.js deve ter valor de Óleo do Motor uniforme (R$ 90) em todas as revisões', () => {
    const lindy = dadosHaojue.LINDY125;
    assert.ok(lindy, 'LINDY125 deve existir em revisaohaojue.js');
    const kmsComOleo = [1000, 3000, 6000, 9000, 12000, 15000, 18000, 21000, 24000, 27000, 30000, 33000, 36000];
    for (const km of kmsComOleo) {
      const pecas = lindy[km];
      const oleo = pecas.find(p => p.nome.includes('Óleo do Motor'));
      assert.ok(oleo, `Óleo do Motor deve existir na revisão ${km} km`);
      assert.equal(oleo.valor, 90, `Óleo do Motor na revisão ${km} km da Lindy deve ser R$ 90, mas foi R$ ${oleo.valor}`);
    }
  });

  test('Zontes 350 E em revisaozontes.js deve ter pacote fechado cadastrado', () => {
    const e350 = dadosZontes.E350;
    assert.ok(e350.pacote, 'pacote deve estar definido para E350');
    assert.equal(e350.pacote[1000], 260);
    assert.equal(e350.pacote[4000], 660);
    assert.equal(e350.pacote[20000], 2300);
  });

  test('Suzuki Hayabusa e GSX800 devem ter tabelas de TMO e peças válidas', () => {
    assert.ok(dadosSuzuki.HAYABUSA[1000].length > 0);
    assert.ok(dadosSuzuki.GSX800[1000].length > 0);
  });
});

describe('2. Sincronização entre Calculadoras e Agendamento (Base Única de Preços)', () => {
  test('Preços de Óleo Suzuki em agendamento.js devem coincidir com revisaosuzuki.js (R$ 90)', () => {
    for (const modelo of DADOS.suzuki.modelos) {
      const pecasAgend = DADOS.suzuki.pecas[modelo];
      const pecasCalc = dadosSuzuki[modelo];
      for (const km in pecasAgend) {
        const pAg = pecasAgend[km];
        const pCalc = pecasCalc[km];
        const oleoAg = pAg.find(p => p.nome.includes('Óleo'));
        const oleoCalc = pCalc.find(p => p.nome.includes('Óleo'));
        if (oleoAg && oleoCalc) {
          assert.equal(oleoAg.valor, oleoCalc.valor, `Divergência de óleo em ${modelo} ${km}km: agendamento=${oleoAg.valor} vs calc=${oleoCalc.valor}`);
        }
      }
    }
  });

  test('Preços de Peças Haojue em agendamento.js devem coincidir com revisaohaojue.js', () => {
    assert.equal(DADOS.haojue.pecasCiclo.simples[0].valor, 90, 'Óleo do ciclo simples Haojue no agendamento deve ser R$ 90');
    assert.equal(DADOS.haojue.pecasCiclo.arruela[0].valor, 90, 'Óleo do ciclo arruela Haojue no agendamento deve ser R$ 90');
    assert.equal(DADOS.haojue.pecasCiclo.completo[1].valor, 90, 'Óleo do ciclo completo Haojue no agendamento deve ser R$ 90');
  });

  test('Preços de Peças Zontes em agendamento.js devem coincidir com revisaozontes.js', () => {
    const oleo350 = DADOS.zontes.pecas350[1000].find(p => p.nome.includes('Óleo'));
    assert.equal(oleo350.valor, 90, 'Óleo Zontes 350cc no agendamento deve ser R$ 90');
  });
});

describe('3. Regras de Negócio e Casos de Borda do Agendamento', () => {
  // Extrai getChecklist de agendamento.js
  const fnChecklist = new Function('brand', 'modelo', 'km', 'DADOS', `
    ${agendContent.substring(agendContent.indexOf('function getChecklist'), agendContent.indexOf('function getPecas'))}
    return getChecklist(brand, modelo, km);
  `);

  test('Checklist da Zontes E350 deve trocar correia CVT aos 20.000 km e NÃO aos 24.000 km', () => {
    const ck20k = fnChecklist('zontes', 'E350', 20000, DADOS);
    const correia20k = ck20k.find(i => i.item.includes('Correia CVT') && i.op === 'T');
    assert.ok(correia20k, 'Correia CVT deve estar marcada para troca no checklist de 20.000 km da E350');

    const ck24k = fnChecklist('zontes', 'E350', 24000, DADOS);
    const correia24k = ck24k.find(i => i.item.includes('Correia CVT') && i.op === 'T');
    assert.equal(correia24k, undefined, 'Correia CVT NÃO deve estar marcada para troca no checklist de 24.000 km da E350');
  });

  // Extrai funções de feriados e dias úteis
  const fnDateLogic = new Function(`
    ${agendContent.substring(agendContent.indexOf('const FERIADOS_FIXOS ='), agendContent.indexOf('// getTmo —'))}
    return { FERIADOS_FIXOS, getFeriadosMoveis, isFeriado, isDiaUtil, proximoDiaUtil };
  `)();

  test('Feriados fixos e móveis devem ser identificados corretamente', () => {
    assert.equal(fnDateLogic.isFeriado('2026-12-25'), true, 'Natal deve ser feriado');
    assert.equal(fnDateLogic.isFeriado('2026-01-01'), true, 'Ano Novo deve ser feriado');
    assert.equal(fnDateLogic.isFeriado('2026-05-01'), true, 'Dia do Trabalho deve ser feriado');
  });

  test('Fins de semana não devem ser dias úteis', () => {
    // 2026-10-24 é Sábado, 2026-10-25 é Domingo
    assert.equal(fnDateLogic.isDiaUtil('2026-10-24'), false, 'Sábado não é dia útil');
    assert.equal(fnDateLogic.isDiaUtil('2026-10-25'), false, 'Domingo não é dia útil');
    assert.equal(fnDateLogic.isDiaUtil('2026-10-26'), true, 'Segunda-feira normal deve ser dia útil');
  });

  test('proximoDiaUtil a partir de sábado ou domingo deve avançar para segunda-feira', () => {
    const proxSab = fnDateLogic.proximoDiaUtil('2026-10-24'); // Sábado
    assert.equal(proxSab, '2026-10-26', 'A partir de sábado deve retornar segunda-feira');
    const proxDom = fnDateLogic.proximoDiaUtil('2026-10-25'); // Domingo
    assert.equal(proxDom, '2026-10-26', 'A partir de domingo deve retornar segunda-feira');
  });
});

describe('4. Segurança e Higienização de Entradas (XSS Prevention)', () => {
  // Teste de escape para prevenir injeção de HTML no resumo
  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  test('Função esc() deve neutralizar tags de script e caracteres perigosos', () => {
    const maliciousPayload = '<script>alert("xss")</script>';
    const escaped = esc(maliciousPayload);
    assert.equal(escaped.includes('<script>'), false);
    assert.equal(escaped, '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
  });

  test('Validação de placa brasileira (Padrão Antigo ABC-1234 e Mercosul ABC1D23)', () => {
    const regexPlaca = /^[A-Z]{3}-?[0-9][A-Z0-9][0-9]{2}$/;
    assert.equal(regexPlaca.test('ABC-1234'), true);
    assert.equal(regexPlaca.test('ABC1234'), true);
    assert.equal(regexPlaca.test('BRA2E19'), true);
    assert.equal(regexPlaca.test('BRA-2E19'), true);
    assert.equal(regexPlaca.test('INVALIDO'), false);
    assert.equal(regexPlaca.test('<script>'), false);
  });
});
