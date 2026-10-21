const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const { repoRoot } = require('./helpers');

// O script do dashboard fica dentro do HTML; extraímos só a função testada.
// Normaliza CRLF: no Windows o Git pode gravar o HTML com \r\n.
const html = fs.readFileSync(path.join(repoRoot, 'agendamento/dashboard.html'), 'utf8').replace(/\r\n/g, '\n');
const ini = html.indexOf('function formatarHora');
const formatarHora = ini < 0 ? () => { throw new Error('formatarHora não existe'); }
  : new Function(html.slice(ini, html.indexOf('\n    }\n', ini) + 6) + '; return formatarHora;')();

describe('Dashboard — horário vindo do Google Sheets', () => {
  test('converte a "data de 1899" do Sheets para HH:MM de Brasília', () => {
    assert.equal(formatarHora('1899-12-30T11:06:28.000Z'), '08:00');
    assert.equal(formatarHora('1899-12-30T19:36:28.000Z'), '16:30');
  });
  test('mantém horário que já vem como texto', () => {
    assert.equal(formatarHora('09:30'), '09:30');
    assert.equal(formatarHora('9:30'), '09:30');
  });
  test('vazio, nulo ou lixo não quebram', () => {
    assert.equal(formatarHora(''), '');
    assert.equal(formatarHora(null), '');
    assert.equal(formatarHora(undefined), '');
    assert.equal(formatarHora('abc'), 'abc');
  });
});
