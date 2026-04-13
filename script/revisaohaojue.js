/* ================================================================
   CALCULADORA DE REVISÃO — HAOJUE
   Script unificado: peças · checklist · imagem do veículo · UI
   ================================================================ */


// ─── 1. PEÇAS POR MODELO / KM ────────────────────────────────

function _basePecas(filtroAr, vela) {
    return {
        simples: [
            { codigo: 'MT114',   nome: 'Óleo do Motor',         qtd: 1, valor: 70   },
            { codigo: 'LUBMINI', nome: 'Lubrificante Corrente', qtd: 1, valor: 25   },
            { codigo: 'DESMINI', nome: 'Desingripante',         qtd: 1, valor: 20   },
        ],
        arruela: [
            { codigo: 'MT114',   nome: 'Óleo do Motor',         qtd: 1, valor: 70   },
            { codigo: 'ARRUELA', nome: 'Arruela de Dreno',      qtd: 1, valor: 5    },
            { codigo: 'LUBMINI', nome: 'Lubrificante Corrente', qtd: 1, valor: 25   },
            { codigo: 'DESMINI', nome: 'Desingripante',         qtd: 1, valor: 20   },
        ],
        completo: [
            { codigo: filtroAr,           nome: 'Filtro de Ar',         qtd: 1, valor: 85   },
            { codigo: 'MT114',            nome: 'Óleo do Motor',         qtd: 1, valor: 70   },
            { codigo: '16561H3E000H000',  nome: 'Junta Capa Óleo',      qtd: 1, valor: 12.5 },
            { codigo: '11482H3J012H000',  nome: 'Junta Tampa Direita',  qtd: 1, valor: 85   },
            { codigo: '14181H11200H000',  nome: 'Junta Escapamento',    qtd: 1, valor: 21   },
            { codigo: vela,               nome: 'Vela de Ignição',       qtd: 1, valor: 90   },
            { codigo: 'LUBMINI',          nome: 'Lubrificante Corrente', qtd: 1, valor: 25   },
            { codigo: 'DESMINI',          nome: 'Desingripante',         qtd: 1, valor: 20   },
        ],
    };
}

function _gerarCiclo(filtroAr, vela, tmo) {
    var b = _basePecas(filtroAr, vela);
    var res = {};
    var KMS = [1000,3000,6000,9000,12000,15000,18000,21000,24000,27000,30000,33000,36000,39000,42000,45000,48000,51000,54000,57000];
    KMS.forEach(function(km) {
        var rem = (km / 1000) % 12;
        if      (rem === 0)              res[km] = b.completo.map(function(p){return Object.assign({},p);});
        else if (rem === 3 || rem === 9) res[km] = b.simples.map(function(p){return Object.assign({},p);});
        else                             res[km] = b.arruela.map(function(p){return Object.assign({},p);});
    });
    res.tmo = tmo;
    return res;
}

var _tmo = {
    1000:0, 3000:0.5, 6000:0.5, 9000:0.5, 12000:3,
    15000:0.5, 18000:1, 21000:0.5, 24000:2.5, 27000:0.5,
    30000:0.5, 33000:0.5, 36000:2.5, 39000:0.5, 42000:0.5,
    45000:0.5, 48000:2.5, 51000:0.5, 54000:0.5, 57000:0.5
};

var dadosRevisao = {
    DK160:     _gerarCiclo('13781H2C100H000', '09482H00010H000', _tmo),
    DR160:     _gerarCiclo('13780H2J000H000', '09482H00010H000', _tmo),
    DL160:     _gerarCiclo('13780H2J000H000', '09482H00010H000', _tmo),
    NK150:     _gerarCiclo('13780H2J000H000', '09482H00010H000', _tmo),
    MASTER150: _gerarCiclo('13780H37200H000', '0948200399000',   _tmo),
    CHOPPER150:_gerarCiclo('13781H2A300H000', '09482Z00001H000', _tmo),
    LINDY125: {
        1000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21}],
        3000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21}],
        6000:  [{codigo:'13780H7A001H000',nome:'Filtro de Ar',qtd:1,valor:75},{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21}],
        9000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21}],
        12000: [{codigo:'13780H7A001H000',nome:'Filtro de Ar',qtd:1,valor:75},{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21},{codigo:'11173-33G50-000',nome:'Junta Tampa Válvula',qtd:1,valor:56},{codigo:'09482-00406-000',nome:'Vela de Ignição',qtd:1,valor:41}],
        15000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21}],
        18000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21},{codigo:'27601H33G11H000',nome:'Correia CVT',qtd:1,valor:245}],
        21000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21}],
        24000: [{codigo:'13780H7A001H000',nome:'Filtro de Ar',qtd:1,valor:75},{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21},{codigo:'11173-33G50-000',nome:'Junta Tampa Válvula',qtd:1,valor:56},{codigo:'09482-00406-000',nome:'Vela de Ignição',qtd:1,valor:41}],
        27000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21}],
        30000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21},{codigo:'27601H33G11H000',nome:'Correia CVT',qtd:1,valor:245}],
        33000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21}],
        36000: [{codigo:'13780H7A001H000',nome:'Filtro de Ar',qtd:1,valor:75},{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510-26H00-000',nome:'Filtro de Óleo',qtd:1,valor:43},{codigo:'0928054001000',nome:'Junta Tampa Filtro',qtd:1,valor:21},{codigo:'11173-33G50-000',nome:'Junta Tampa Válvula',qtd:1,valor:56},{codigo:'09482-00406-000',nome:'Vela de Ignição',qtd:1,valor:41},{codigo:'27601H33G11H000',nome:'Correia CVT',qtd:1,valor:245}],
        tmo: {1000:0,3000:0.5,6000:1.5,9000:0.5,12000:2,15000:0.5,18000:3,21000:0.5,24000:2,27000:0.5,30000:2,33000:0.5,36000:3,39000:0.5,42000:2,45000:0.5,48000:3,51000:0.5,54000:3,57000:0.5}
    }
};


// ─── 2. CHECKLIST ────────────────────────────────────────────

var _ckI_base = [
    'Suspensão dianteira',
    'Folga das válvulas (ajustar a cada 12.000 km)',
    'Marcha lenta',
    'Facho do farol',
    'Sistema de iluminação',
    'Coluna de direção',
    'Eixos das rodas',
    'Pedal do freio',
    'Suspensão traseira',
    'Freios',
    'Pressão dos pneus',
    'Pneus',
    'Rodas',
    'Parafusos/porcas escapamento',
    'Parafusos/porcas cabeçote',
    'Cabos de comandos',
    'Bateria',
];
var _ckIAL = [
    'Corrente de transmissão (inspecionar, ajustar e lubrificar)',
    'Alavancas de freio e embreagem',
    'Articulação do manete',
];

/* Prazos para cada posição no ciclo */
var _prazosHJ = {
    1000:'6 meses',  3000:'12 meses', 6000:'18 meses', 9000:'24 meses',
    12000:'30 meses',15000:'36 meses',18000:'42 meses',21000:'48 meses',
    24000:'54 meses',27000:'60 meses'
};

function _gerarChecklistHJ() {
    var res = {};
    var KMS = [1000,3000,6000,9000,12000,15000,18000,21000,24000,27000,30000,33000,36000,39000,42000,45000,48000,51000,54000,57000];
    KMS.forEach(function(km) {
        var rem = (km / 1000) % 12;
        var ck = { IAL: _ckIAL, I: _ckI_base };

        if (rem === 0) {
            /* Revisão completa — a cada 12k */
            ck = {
                T: [
                    'Arruela de Dreno — 1 un.',
                    'Elemento filtro de ar — 1 un.',
                    'Junta Capa Filtro Óleo — 1 un.',
                    'Junta Tampa Direita — 1 un.',
                    'Junta do tubo de escape — 1 un.',
                    'Vela de Ignição — 1 un.',
                    'Óleo Motul 10W40 — 1L',
                ],
                L: [
                    'Filtro centrífugo de óleo do motor',
                    'Sistema evaporativo / respiro do motor',
                    'Tela do filtro de óleo',
                    'Carburador / TBI',
                ],
                A:   ['Folga das válvulas (ajuste obrigatório a cada 12.000 km)'],
                IAL: _ckIAL,
                IL:  [
                    'Eixos das rodas (inspecionar e lubrificar)',
                    'Suspensão traseira (inspecionar e lubrificar)',
                    'Coluna de direção (inspecionar e lubrificar)',
                ],
                I: [
                    'Suspensão dianteira',
                    'Marcha lenta',
                    'Facho do farol',
                    'Sistema de iluminação',
                    'Raios das rodas',
                    'Embreagem',
                    'Pedal do freio',
                    'Freios',
                    'Pressão dos pneus',
                    'Pneus',
                    'Rodas',
                    'Parafusos/porcas escapamento',
                    'Parafusos/porcas cabeçote',
                    'Cabos de comandos',
                    'Bateria',
                ],
            };
        } else if (rem === 3 || rem === 9) {
            /* Troca de óleo simples — 3k / 9k */
            ck = {
                T:   ['Óleo Motul 10W40 — 1L'],
                L:   ['Elemento filtro de ar'],
                IAL: _ckIAL,
                I:   _ckI_base,
            };
        } else {
            /* Com arruela — 6k / 18k ... */
            ck = {
                T:   ['Óleo Motul 10W40 — 1L', 'Arruela de Dreno — 1 un.'],
                L:   ['Elemento filtro de ar (em cond. severas, trocar com mais frequência)'],
                IAL: _ckIAL,
                I:   _ckI_base,
            };
        }

        if (_prazosHJ[km]) ck.prazo = _prazosHJ[km];
        res[km] = ck;
    });
    return res;
}

var _ckHJ = _gerarChecklistHJ();
var checklist = {
    DK160: _ckHJ, DR160: _ckHJ, DL160: _ckHJ,
    NK150: _ckHJ, MASTER150: _ckHJ, CHOPPER150: _ckHJ, LINDY125: _ckHJ
};


// ─── 3. DADOS DO MODELO (imagem + specs) ─────────────────────

var modeloInfo = {
    DK160:     { nome: 'DK 160',           motor: '160cc · Mono', trans: 'Corrente', oleo: 'Motul 10W40 · 1L', intervalo: '3.000 km', img: '/images/HAOJUE/DK160.png'      },
    DR160:     { nome: 'DR 160',           motor: '160cc · Mono', trans: 'Corrente', oleo: 'Motul 10W40 · 1L', intervalo: '3.000 km', img: '/images/HAOJUE/DR160.png'      },
    DL160:     { nome: 'DL 160',           motor: '160cc · Mono', trans: 'Corrente', oleo: 'Motul 10W40 · 1L', intervalo: '3.000 km', img: '/images/HAOJUE/DL160.png'      },
    NK150:     { nome: 'NK 150',           motor: '150cc · Mono', trans: 'Corrente', oleo: 'Motul 10W40 · 1L', intervalo: '3.000 km', img: '/images/HAOJUE/NK 150.png'    },
    MASTER150: { nome: 'Master Ride 150',  motor: '150cc · Mono', trans: 'Corrente', oleo: 'Motul 10W40 · 1L', intervalo: '3.000 km', img: '/images/HAOJUE/MASTERRIDE.png' },
    CHOPPER150:{ nome: 'Chopper Road 150', motor: '150cc · Mono', trans: 'Corrente', oleo: 'Motul 10W40 · 1L', intervalo: '3.000 km', img: '/images/HAOJUE/CHOPPER150.png' },
    LINDY125:  { nome: 'Lindy 125',        motor: '125cc · Mono', trans: 'CVT',      oleo: 'Motul 10W40 · 1L', intervalo: '3.000 km', img: '/images/HAOJUE/LINDY125.png'   },
};


// ─── 4. CONFIGURAÇÕES ────────────────────────────────────────

var TMO_HORA  = 110;
var KM_LISTA  = [1000,3000,6000,9000,12000,15000,18000,21000,24000,27000,30000,33000,36000,39000,42000,45000,48000,51000,54000,57000];

var pecasAvulsas = [
    { codigo: 'MO-FREIO',   nome: 'Serviço: Troca Pastilha Dianteira',        valor: 30  },
    { codigo: 'MO-FREIO2',  nome: 'Serviço: Troca Pastilha Traseira',         valor: 30  },
    { codigo: 'MO-INJETOR', nome: 'Serviço: Limpeza Bico Injetor (por un.)', valor: 90  },
    { codigo: 'MO-FREIO3',  nome: 'Serviço: Verificar/Sangria (por un.)',    valor: 130 },
    { codigo: 'MO-TRANSM',  nome: 'Serviço: Troca Kit Transmissão',          valor: 120 },
    { codigo: '328185',     nome: 'Produto: Kit Revisão',                     valor: 70  },
    { codigo: 'DESC01',     nome: 'Descarbonizante',                          valor: 35  },
    { codigo: 'LUBMINI',    nome: 'Lubrificante Corrente',                    valor: 25  },
    { codigo: 'DESMINI',    nome: 'Desingripante',                            valor: 20  },
];

var itensAdicionais = [];
function fmt(v) { return 'R$ ' + v.toFixed(2).replace('.', ','); }


// ─── 5. IMAGEM DO VEÍCULO ─────────────────────────────────────
/*
   Suporta dois layouts de HTML:
   A) Novo  — #veiculoHero  + #heroImg  + #heroNome  + #heroSpecs
   B) Legado — #veiculoCard + #img-veiculo + #veiculoNome  (sem specs)
   A função detecta qual está presente e preenche o correto.
*/
function atualizarImagemVeiculo() {
    var modelo = document.getElementById('veiculoSelect').value;
    var info   = modeloInfo[modelo] || null;

    /* ── Layout novo (hero card) ── */
    var hero = document.getElementById('veiculoHero');
    if (hero) {
        if (!info) {
            hero.classList.remove('visivel');
        } else {
            var img   = document.getElementById('heroImg');
            var nome  = document.getElementById('heroNome');
            var specs = document.getElementById('heroSpecs');
            if (img)   img.src              = info.img;
            if (nome)  nome.textContent     = info.nome;
            if (specs) specs.innerHTML =
                '<span class="spec-pill spec-motor">'     + info.motor     + '</span>' +
                '<span class="spec-pill spec-trans">'     + info.trans     + '</span>' +
                '<span class="spec-pill spec-oleo">'      + info.oleo      + '</span>' +
                '<span class="spec-pill spec-intervalo">Rev. a cada ' + info.intervalo + '</span>';
            hero.classList.add('visivel');
        }
    }

    /* ── Layout legado (veiculo-card) ── */
    var card = document.getElementById('veiculoCard');
    if (card) {
        if (!info) {
            card.style.display = 'none';
        } else {
            var imgLeg  = document.getElementById('img-veiculo');
            var nomeLeg = document.getElementById('veiculoNome');
            if (imgLeg)  imgLeg.src           = info.img;
            if (nomeLeg) nomeLeg.textContent  = info.nome;
            card.style.display = 'block';
        }
    }
}

/* Alias para compatibilidade com onchange inline no HTML */
function atualizarCardVeiculo(modelo) { atualizarImagemVeiculo(); }


// ─── 6. LISTA DE KM ──────────────────────────────────────────

function atualizarKmPorVeiculo(veiculo) {
    var sel = document.getElementById('kmSelect');
    sel.innerHTML = '<option value="">Selecione o KM</option>';
    KM_LISTA.forEach(function(km) {
        var o = document.createElement('option');
        o.value = km;
        o.textContent = km.toLocaleString('pt-BR') + ' km';
        sel.appendChild(o);
    });
}


// ─── 7. CÁLCULO (PEÇAS) ──────────────────────────────────────

function calcular() {
    var veiculo = document.getElementById('veiculoSelect').value;
    var km      = document.getElementById('kmSelect').value;
    var lista   = document.getElementById('listaPecas');

    if (!veiculo || !km) {
        lista.innerHTML = '<div class="no-result">👆 Selecione veículo e KM para ver as peças</div>';
        atualizarTotaisGerais();
        return;
    }

    var revisao = (dadosRevisao[veiculo] && dadosRevisao[veiculo][parseInt(km)]) || [];

    if (!revisao.length) {
        lista.innerHTML = '<div class="no-result">Nenhuma peça cadastrada para esta revisão</div>';
    } else {
        var h = '<div class="peca-header"><div>Peça</div><div>Código</div><div>Qtd.</div><div>Total (R$)</div></div>';
        revisao.forEach(function(p) {
            h += '<div class="peca-item">' +
                 '<div class="peca-nome">'   + p.nome                  + '</div>' +
                 '<div class="peca-codigo">' + p.codigo                + '</div>' +
                 '<div class="peca-qtd">'    + p.qtd                   + '</div>' +
                 '<div class="peca-valor">'  + fmt(p.qtd * p.valor)    + '</div>' +
                 '</div>';
        });
        lista.innerHTML = h;
    }
    atualizarTotaisGerais();
}


// ─── 8. CHECKLIST ────────────────────────────────────────────

function toggleChecklist() {
    document.getElementById('checklistBody').classList.toggle('aberto');
    document.getElementById('checklistToggle').classList.toggle('aberto');
}

function renderizarChecklist(veiculo, km) {
    var secao    = document.getElementById('secaoChecklist');
    var body     = document.getElementById('checklistBody');
    var subtitle = document.getElementById('checklistSubtitle');
    if (!secao) return;

    if (!veiculo || !km || !checklist[veiculo]) { secao.style.display = 'none'; return; }
    var ck = checklist[veiculo][parseInt(km)];
    if (!ck) { secao.style.display = 'none'; return; }

    secao.style.display = 'block';
    subtitle.textContent = 'Revisão ' + parseInt(km).toLocaleString('pt-BR') + ' km' + (ck.prazo ? ' · ' + ck.prazo : '');

    var tipos = [
        { k: 'T',   lbl: 'Trocar',                 cls: 'grupo-T'   },
        { k: 'I',   lbl: 'Inspecionar',             cls: 'grupo-I'   },
        { k: 'L',   lbl: 'Limpar',                  cls: 'grupo-L'   },
        { k: 'IAL', lbl: 'Insp. / Ajust. / Lubr.',  cls: 'grupo-IAL' },
        { k: 'IL',  lbl: 'Insp. / Lubr.',           cls: 'grupo-IL'  },
        { k: 'A',   lbl: 'Ajustar',                 cls: 'grupo-A'   },
    ];

    var h = '<div class="checklist-grupos">'; var tem = false;
    tipos.forEach(function(t) {
        var itens = ck[t.k];
        if (!itens || !itens.length) return;
        tem = true;
        h += '<div class="grupo-card ' + t.cls + '">' +
             '<div class="grupo-titulo">' + t.lbl +
             '<span class="grupo-badge">' + itens.length + ' item' + (itens.length > 1 ? 's' : '') + '</span></div>' +
             '<div class="grupo-itens">';
        itens.forEach(function(i) {
            h += '<div class="grupo-item"><span class="item-bullet"></span><span>' + i + '</span></div>';
        });
        h += '</div></div>';
    });
    h += '</div>';
    h += '<div class="checklist-nota">' +
         '<strong>Haojue:</strong> Óleo Motul 10W40 · 1L (alt.: Mobil 10W40).<br>' +
         'Corrente: inspecionar, ajustar e lubrificar em toda revisão.<br>' +
         'Folga das válvulas: ajustar obrigatoriamente a cada 12.000 km.<br>' +
         'Em condições severas (litoral, poeira, chuva intensa) reduza os intervalos.' +
         '</div>';

    body.innerHTML = tem ? h : '<div class="checklist-empty">Nenhum item cadastrado para esta revisão</div>';
    body.classList.add('aberto');
    document.getElementById('checklistToggle').classList.add('aberto');
}


// ─── 9. ITENS ADICIONAIS ─────────────────────────────────────

function renderizarItensAdicionais() {
    var c = document.getElementById('listaItensAdicionais');
    if (!itensAdicionais.length) {
        c.innerHTML = '<div class="no-result">Nenhum item adicionado</div>';
    } else {
        var h = '<div class="peca-header"><div>Peça / Serviço</div><div>Código</div><div>Qtd.</div><div>Total (R$)</div><div></div></div>';
        itensAdicionais.forEach(function(item, idx) {
            h += '<div class="peca-item">' +
                 '<div class="peca-nome">'   + item.nome               + '</div>' +
                 '<div class="peca-codigo">' + item.codigo             + '</div>' +
                 '<div class="peca-qtd">'    + item.qtd                + '</div>' +
                 '<div class="peca-valor">'  + fmt(item.qtd*item.valor)+ '</div>' +
                 '<div><button class="btn-remover" onclick="removerItemAdicional(' + idx + ')" title="Remover">✕</button></div>' +
                 '</div>';
        });
        c.innerHTML = h;
    }
    atualizarTotaisGerais();
}

function adicionarItemAdicional() {
    var sel = document.getElementById('selectAvulso');
    var qtd = parseInt(document.getElementById('qtdAvulso').value) || 1;
    var idx = parseInt(sel.value);
    if (isNaN(idx)) return;
    var peca = pecasAvulsas[idx];
    var ex   = itensAdicionais.find(function(i) { return i.codigo === peca.codigo; });
    if (ex) { ex.qtd += qtd; } else { itensAdicionais.push(Object.assign({}, peca, { qtd: qtd })); }
    sel.value = '';
    document.getElementById('qtdAvulso').value = 1;
    renderizarItensAdicionais();
}

function removerItemAdicional(idx) {
    itensAdicionais.splice(idx, 1);
    renderizarItensAdicionais();
}

window.adicionarItemAdicional = adicionarItemAdicional;
window.removerItemAdicional   = removerItemAdicional;


// ─── 10. TOTAIS ──────────────────────────────────────────────

function atualizarTotaisGerais() {
    var veiculo = document.getElementById('veiculoSelect').value;
    var km      = document.getElementById('kmSelect').value;
    var revisao = (veiculo && km && dadosRevisao[veiculo] && dadosRevisao[veiculo][parseInt(km)]) || [];
    var tmoH    = (veiculo && km && dadosRevisao[veiculo] && dadosRevisao[veiculo].tmo && dadosRevisao[veiculo].tmo[parseInt(km)]) || 0;

    var totalP = revisao.reduce(function(s, p) { return s + p.qtd * p.valor; }, 0)
               + itensAdicionais.reduce(function(s, p) { return s + p.qtd * p.valor; }, 0);
    var totalT = tmoH * TMO_HORA;

    document.getElementById('totalPecas').textContent  = fmt(totalP);
    document.getElementById('totalTMO').textContent    = fmt(totalT);
    document.getElementById('totalGeral').textContent  = fmt(totalP + totalT);

    var n = revisao.length + itensAdicionais.length;
    document.getElementById('subPecas').textContent = n ? n + ' item(ns) no orçamento' : 'Sem itens selecionados';
    document.getElementById('subTMO').textContent   = tmoH.toFixed(1).replace('.', ',') + ' h × R$ ' + TMO_HORA + ',00/h';
    document.getElementById('subTotal').textContent = 'Peças + Mão de Obra';
}


// ─── 11. EVENTOS ─────────────────────────────────────────────

function onVeiculoChange() {
    var veiculo = document.getElementById('veiculoSelect').value;
    atualizarImagemVeiculo();          /* atualiza imagem/card imediatamente */
    atualizarKmPorVeiculo(veiculo);    /* recria lista de KM */
    document.getElementById('kmSelect').value = '';  /* limpa km anterior */
    calcular();                        /* reseta peças/totais */
    renderizarChecklist(veiculo, ''); /* esconde checklist até selecionar km */
}

document.addEventListener('DOMContentLoaded', function() {
    /* Popular peças avulsas */
    var sel = document.getElementById('selectAvulso');
    pecasAvulsas.forEach(function(p, i) {
        var o = document.createElement('option');
        o.value = i;
        o.textContent = p.nome + ' — ' + fmt(p.valor);
        sel.appendChild(o);
    });
    renderizarItensAdicionais();

    /* Evento veículo — funciona com ou sem onchange inline no HTML */
    document.getElementById('veiculoSelect').addEventListener('change', onVeiculoChange);

    /* Evento km */
    document.getElementById('kmSelect').addEventListener('change', function() {
        calcular();
        renderizarChecklist(document.getElementById('veiculoSelect').value, this.value);
    });
});
