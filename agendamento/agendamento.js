/* =====================================================
   AGENDAMENTO DE REVISÃO — COMERI MOTOS
   agendamento.js
   Dados extraídos diretamente dos scripts TMO oficiais:
   revisaohaojue.js · revisaozontes.js · revisaosuzuki.js
   ===================================================== */

// ── DADOS REAIS DAS REVISÕES ──────────────────────────
// Fonte direta: revisaohaojue.js · revisaozontes.js · revisaosuzuki.js

const DADOS = {

  // ── HAOJUE ────────────────────────────────────────────
  haojue: {
    modelos:  ['DK160','DR160','DL160','NK150','MASTER150','CHOPPER150','LINDY125'],
    labels:   ['DK 160','DR 160','DL 160','NK 150','Master Ride 150','Chopper Road 150','Lindy 125'],
    TMO_HORA: 110,
    tmoHJ: {1000:0,3000:0.5,6000:0.5,9000:0.5,12000:3,15000:0.5,18000:1,21000:0.5,24000:2.5,27000:0.5,30000:0.5,33000:0.5,36000:2.5,39000:0.5,42000:0.5,45000:0.5,48000:2.5,51000:0.5,54000:0.5,57000:0.5},
    pecasCiclo: {
      simples:  [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      arruela:  [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Arruela de Dreno',qtd:1,valor:5},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      completo: [{nome:'Filtro de Ar',qtd:1,valor:85},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Junta Capa Óleo',qtd:1,valor:12.5},{nome:'Junta Tampa Direita',qtd:1,valor:85},{nome:'Junta Escapamento',qtd:1,valor:21},{nome:'Vela de Ignição',qtd:1,valor:90},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
    },
    pecasLindy: {
      1000: [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      3000: [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      6000: [{nome:'Filtro de Ar',qtd:1,valor:75},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      9000: [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      12000:[{nome:'Filtro de Ar',qtd:1,valor:75},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Junta Tampa Válvula',qtd:1,valor:56},{nome:'Vela de Ignição',qtd:1,valor:41}],
      15000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      18000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Correia CVT',qtd:1,valor:245}],
      21000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      24000:[{nome:'Filtro de Ar',qtd:1,valor:75},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Junta Tampa Válvula',qtd:1,valor:56},{nome:'Vela de Ignição',qtd:1,valor:41}],
      27000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      30000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Correia CVT',qtd:1,valor:245}],
      33000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      36000:[{nome:'Filtro de Ar',qtd:1,valor:75},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Junta Tampa Válvula',qtd:1,valor:56},{nome:'Vela de Ignição',qtd:1,valor:41},{nome:'Correia CVT',qtd:1,valor:245}],
    },
    tmoLindy: {1000:0,3000:0.5,6000:1.5,9000:0.5,12000:2,15000:0.5,18000:3,21000:0.5,24000:2,27000:0.5,30000:2,33000:0.5,36000:3,39000:0.5,42000:2,45000:0.5,48000:3,51000:0.5,54000:3,57000:0.5},
  },

  // ── ZONTES ────────────────────────────────────────────
  zontes: {
    modelos: ['V350','T350','GK350','S350','R350','E350','E350_ANTIGA'],
    labels:  ['V 350','T 350 / T 350 X','GK 350','S 350','R 350','350 E','350 E (Antiga)'],
    TMO_HORA: 350,
    pecas350: {
      1000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      3000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      6000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      9000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      12000:[{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      15000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      18000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      21000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      24000:[{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      27000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      30000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      33000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      36000:[{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      39000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      42000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      45000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      48000:[{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      51000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      54000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      57000:[{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
    },
    tmo350: {1000:0,3000:0.3,6000:0.6,9000:0.3,12000:1.5,15000:0.3,18000:1.0,21000:0.3,24000:1.5,27000:0.3,30000:0.6,33000:0.3,36000:1.5,39000:0.3,42000:0.6,45000:0.3,48000:1.5,51000:0.3,54000:1.0,57000:1.5},
    pecasE350: {
      1000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Filtro do CVT',qtd:1,valor:84},{nome:'Óleo Caixa Transm. Final',qtd:1,valor:70}],
      4000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do CVT',qtd:1,valor:84},{nome:'Óleo Caixa Transm. Final',qtd:1,valor:70}],
      8000: [{nome:'Filtro de Ar',qtd:1,valor:180},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Filtro do CVT',qtd:1,valor:84}],
      12000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do CVT',qtd:1,valor:84}],
      16000:[{nome:'Filtro de Ar',qtd:1,valor:180},{nome:'Vela de Ignição',qtd:1,valor:165},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Filtro do CVT',qtd:1,valor:84},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Óleo Caixa Transm. Final',qtd:1,valor:70}],
      20000:[{nome:'Correia CVT',qtd:1,valor:1150},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do CVT',qtd:1,valor:84}],
      24000:[{nome:'Filtro de Ar',qtd:1,valor:180},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Filtro do CVT',qtd:1,valor:84},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Óleo Caixa Transm. Final',qtd:1,valor:70}],
    },
    tmoE350: {1000:0.0,4000:0.5,8000:0.8,12000:0.3,16000:1.0,20000:0.3,24000:2.0},

    // 350E ANTIGA — ciclo de 3.000 km (tabela revisão antiga)
    pecasE350Antiga: {
      1000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120}],
      3000: [{nome:'Óleo de Motor',qtd:2,valor:70}],
      6000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120}],
      9000: [{nome:'Óleo de Motor',qtd:2,valor:70}],
      12000:[{nome:'Filtro de Ar',qtd:1,valor:180},{nome:'Vela de Ignição',qtd:1,valor:165},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Líquido de Arrefecimento',qtd:1,valor:30}],
      15000:[{nome:'Óleo de Motor',qtd:2,valor:70}],
      18000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Correia CVT',qtd:1,valor:1150}],
      21000:[{nome:'Óleo de Motor',qtd:2,valor:70}],
      24000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120}],
      27000:[{nome:'Óleo de Motor',qtd:2,valor:70}],
      30000:[{nome:'Filtro de Ar',qtd:1,valor:180},{nome:'Vela de Ignição',qtd:1,valor:165},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Líquido de Arrefecimento',qtd:1,valor:30}],
      33000:[{nome:'Óleo de Motor',qtd:2,valor:70}],
      36000:[{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Correia CVT',qtd:1,valor:1150}],
    },
    tmoE350Antiga: {
      1000:0,3000:0.3,6000:0.6,9000:0.3,12000:1.5,15000:0.3,18000:2.0,
      21000:0.3,24000:0.6,27000:0.3,30000:1.5,33000:0.3,36000:2.0,
    },
  },

  // ── SUZUKI ────────────────────────────────────────────
  suzuki: {
    modelos: ['BURGMAN_I','GSX800','HAYABUSA','GSXR1000','GSX750','GSXS1000','SV650A','VSTROM650','VSTROM800','VSTROM1000','VSTROM1050XT'],
    labels:  ['Burgman i','GSX 800','Hayabusa GSX1300R','GSX-R1000','GSX 750','GSX-S1000A','SV 650A','V-Strom 650 A','V-Strom 800 DE','V-Strom 1050','V-Strom 1050 XT'],
    tmoHora: {BURGMAN_I:100,GSX800:800,HAYABUSA:1300,GSXR1000:1000,GSX750:750,GSXS1000:1000,SV650A:650,VSTROM650:650,VSTROM800:800,VSTROM1000:1000,VSTROM1050XT:1050},
    tmo: {
      BURGMAN_I:   {1000:0,6000:0,12000:0.8,18000:2.5,24000:1,30000:1,36000:2.5,42000:1,48000:1,54000:2.5,60000:1},
      GSX800:      {1000:0,6000:0,12000:0.4,18000:0.2,24000:0.4,30000:0.2,36000:0.4,42000:0.2,48000:0.4,54000:0.2,60000:0.4},
      HAYABUSA:    {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3},
      GSXR1000:    {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3},
      GSX750:      {1000:0,6000:0,12000:0.4,18000:0.2,24000:0.4,30000:0.2,36000:0.4,42000:0.2,48000:0.4,54000:0.2,60000:0.4},
      GSXS1000:    {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3},
      SV650A:      {1000:0,6000:0,12000:0.5,18000:0.3,24000:0.5,30000:0.3,36000:0.5,42000:0.3,48000:0.5,54000:0.3,60000:0.5},
      VSTROM650:   {1000:0,6000:0,12000:0.5,18000:0.3,24000:0.5,30000:0.3,36000:0.5,42000:0.3,48000:0.5,54000:0.3,60000:0.5},
      VSTROM800:   {1000:0,6000:0,12000:0.4,18000:0.2,24000:0.4,30000:0.2,36000:0.4,42000:0.2,48000:0.4,54000:0.2,60000:0.4},
      VSTROM1000:  {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3},
      VSTROM1050XT:{1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3},
    },
    pecas: {
      BURGMAN_I:   {1000:[{nome:'Óleo do Motor',qtd:1,valor:70}],6000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],12000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],18000:[{nome:'Filtro de Ar',qtd:1,valor:115},{nome:'Vela de Ignição',qtd:1,valor:150},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],24000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],30000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],36000:[{nome:'Filtro de Ar',qtd:1,valor:115},{nome:'Vela de Ignição',qtd:1,valor:150},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],42000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],48000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],54000:[{nome:'Filtro de Ar',qtd:1,valor:115},{nome:'Vela de Ignição',qtd:1,valor:150},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],60000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}]},
      GSX800:      {1000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:70}],12000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],18000:[{nome:'Filtro de Ar',qtd:1,valor:320},{nome:'Óleo do Motor',qtd:4,valor:70}],24000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],36000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],42000:[{nome:'Filtro de Ar',qtd:1,valor:320},{nome:'Óleo do Motor',qtd:4,valor:70}],48000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      HAYABUSA:    {1000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:70}],12000:[{nome:'Vela de Ignição',qtd:4,valor:242},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:4,valor:70}],18000:[{nome:'Filtro de Ar',qtd:1,valor:480},{nome:'Óleo do Motor',qtd:4,valor:70}],24000:[{nome:'Vela de Ignição',qtd:4,valor:242},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:4,valor:70}],30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],36000:[{nome:'Vela de Ignição',qtd:4,valor:242},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:4,valor:70}],42000:[{nome:'Filtro de Ar',qtd:1,valor:480},{nome:'Óleo do Motor',qtd:4,valor:70}],48000:[{nome:'Vela de Ignição',qtd:4,valor:242},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:4,valor:70}],54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      GSXR1000:    {1000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:70}],12000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:185}],18000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Ar',qtd:1,valor:435}],24000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:185}],30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],36000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:185}],42000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Ar',qtd:1,valor:435}],48000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:185}],54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      GSX750:      {1000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:3,valor:70}],12000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:240}],18000:[{nome:'Filtro de Ar',qtd:1,valor:370},{nome:'Óleo do Motor',qtd:3,valor:70}],24000:[{nome:'Vela de Ignição',qtd:4,valor:240},{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:3,valor:70}],36000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:240}],42000:[{nome:'Filtro de Ar',qtd:1,valor:370},{nome:'Óleo do Motor',qtd:3,valor:70}],48000:[{nome:'Vela de Ignição',qtd:4,valor:240},{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:3,valor:70}],60000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      GSXS1000:    {1000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:70}],12000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],18000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:70}],24000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],36000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],42000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:70}],48000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      SV650A:      {1000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:3,valor:70}],12000:[{nome:'Vela de Ignição',qtd:2,valor:160},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:3,valor:70}],18000:[{nome:'Filtro de Ar',qtd:1,valor:370},{nome:'Óleo do Motor',qtd:3,valor:70}],24000:[{nome:'Vela de Ignição',qtd:2,valor:160},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:3,valor:70}],30000:[{nome:'Óleo do Motor',qtd:3,valor:70}],36000:[{nome:'Vela de Ignição',qtd:2,valor:160},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:3,valor:70}],42000:[{nome:'Filtro de Ar',qtd:1,valor:370},{nome:'Óleo do Motor',qtd:3,valor:70}],48000:[{nome:'Vela de Ignição',qtd:2,valor:160},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:3,valor:70}],54000:[{nome:'Óleo do Motor',qtd:3,valor:70}],60000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      VSTROM650:   {1000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:3,valor:70}],12000:[{nome:'Vela de Ignição',qtd:2,valor:135},{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],18000:[{nome:'Filtro de Ar',qtd:1,valor:480},{nome:'Óleo do Motor',qtd:3,valor:70}],24000:[{nome:'Vela de Ignição',qtd:2,valor:135},{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:3,valor:70}],36000:[{nome:'Vela de Ignição',qtd:2,valor:135},{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],42000:[{nome:'Filtro de Ar',qtd:1,valor:480},{nome:'Óleo do Motor',qtd:3,valor:70}],48000:[{nome:'Vela de Ignição',qtd:2,valor:135},{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:3,valor:70}],60000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      VSTROM800:   {1000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:70}],12000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],18000:[{nome:'Filtro de Ar',qtd:1,valor:320},{nome:'Óleo do Motor',qtd:4,valor:70}],24000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],36000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],42000:[{nome:'Filtro de Ar',qtd:1,valor:320},{nome:'Óleo do Motor',qtd:4,valor:70}],48000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      VSTROM1000:  {1000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:70}],12000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],18000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:70}],24000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],36000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],42000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:70}],48000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      VSTROM1050XT:{1000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:70}],12000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],18000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:70}],24000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],36000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],42000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:70}],48000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
    }
  }
};



// ── FUNÇÕES DE ACESSO AOS DADOS ───────────────────────

function getKmsDisponiveis(brand, modelo) {
  if (brand === 'haojue') {
    if (modelo === 'LINDY125') return Object.keys(DADOS.haojue.pecasLindy).filter(k=>!isNaN(k)).map(Number).sort((a,b)=>a-b);
    return [1000,3000,6000,9000,12000,15000,18000,21000,24000,27000,30000,33000,36000,39000,42000,45000,48000,51000,54000,57000];
  }
  if (brand === 'zontes') {
    if (modelo === 'E350') return Object.keys(DADOS.zontes.pecasE350).filter(k=>!isNaN(k)).map(Number).sort((a,b)=>a-b);
    if (modelo === 'E350_ANTIGA') return Object.keys(DADOS.zontes.pecasE350Antiga).filter(k=>!isNaN(k)).map(Number).sort((a,b)=>a-b);
    return Object.keys(DADOS.zontes.pecas350).filter(k=>!isNaN(k)).map(Number).sort((a,b)=>a-b);
  }
  if (brand === 'suzuki') {
    return Object.keys(DADOS.suzuki.pecas[modelo]).filter(k=>!isNaN(k)).map(Number).sort((a,b)=>a-b);
  }
  return [];
}


// ── FERIADOS ──────────────────────────────────────────
// Feriados nacionais fixos (DD/MM)
const FERIADOS_FIXOS = [
  '01/01', // Confraternização Universal
  '21/04', // Tiradentes
  '01/05', // Dia do Trabalho
  '07/09', // Independência do Brasil
  '12/10', // Nossa Senhora Aparecida
  '02/11', // Finados
  '15/11', // Proclamação da República
  '20/11', // Consciência Negra
  '25/12', // Natal
];

// Feriados móveis — calcular por ano
function getFeriadosMoveis(ano) {
  // Cálculo da Páscoa (algoritmo de Butcher)
  const a = ano % 19;
  const b = Math.floor(ano / 100);
  const c = ano % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mesPascoa = Math.floor((h + l - 7 * m + 114) / 31);
  const diaPascoa = ((h + l - 7 * m + 114) % 31) + 1;
  const pascoa = new Date(ano, mesPascoa - 1, diaPascoa);

  const addDias = (base, dias) => new Date(base.getTime() + dias * 86400000);
  const fmtFeriado = (d) => String(d.getDate()).padStart(2,'0') + '/' + String(d.getMonth()+1).padStart(2,'0') + '/' + d.getFullYear();

  return [
    fmtFeriado(addDias(pascoa, -48)), // Carnaval (segunda)
    fmtFeriado(addDias(pascoa, -47)), // Carnaval (terça)
    fmtFeriado(addDias(pascoa, -2)),  // Sexta-feira Santa
    fmtFeriado(pascoa),               // Páscoa
    fmtFeriado(addDias(pascoa, 60)),  // Corpus Christi
  ];
}

function isFeriado(dateStr) {
  // dateStr: YYYY-MM-DD
  const [y, m, d] = dateStr.split('-');
  const ddmm  = d.padStart(2,'0') + '/' + m.padStart(2,'0');
  const ddmmyyyy = ddmm + '/' + y;
  const ano   = parseInt(y);

  if (FERIADOS_FIXOS.includes(ddmm)) return true;

  const moveis = getFeriadosMoveis(ano);
  if (moveis.includes(ddmmyyyy)) return true;

  return false;
}

function isDiaUtil(dateStr) {
  // dateStr: YYYY-MM-DD
  // Usa new Date(y, m-1, d) para evitar problema de timezone com string ISO
  const parts = dateStr.split('-');
  const y = parseInt(parts[0]);
  const m = parseInt(parts[1]) - 1; // 0-indexed
  const d = parseInt(parts[2]);
  const data = new Date(y, m, d);   // local time, sem UTC
  const diaSemana = data.getDay();  // 0=Dom, 6=Sáb
  if (diaSemana === 0 || diaSemana === 6) return false;
  if (isFeriado(dateStr)) return false;
  return true;
}

function proximoDiaUtil(dateStr) {
  // Retorna o próximo dia útil a partir de dateStr (YYYY-MM-DD)
  const parts = dateStr.split('-').map(Number);
  let data = new Date(parts[0], parts[1] - 1, parts[2]); // local time
  while (true) {
    const str = data.getFullYear() + '-' +
      String(data.getMonth()+1).padStart(2,'0') + '-' +
      String(data.getDate()).padStart(2,'0');
    if (isDiaUtil(str)) return str;
    data.setDate(data.getDate() + 1);
  }
}

// getTmo — duração EXIBIDA ao cliente (mínimo 1h, nunca zero)
// Usada nos cards de KM e campo "Duração estimada"
function getTmo(brand, modelo, km) {
  const k = parseInt(km);
  if (brand === 'zontes' && modelo === 'E350') {
    if (k === 16000) return 3.0;
    if (k === 24000) return 1.5;
    return 1.0;
  }
  if (brand === 'zontes' && modelo === 'E350_ANTIGA') {
    if (k === 12000 || k === 30000) return 3.0;
    if (k === 18000 || k === 36000) return 3.0;
    if (k === 6000  || k === 24000) return 1.0;
    return 1.0;
  }
  if (k <= 9000)   return 1.0;
  if (k === 12000) return 3.0;
  return 1.5;
}

// getTmoReal — TMO REAL das tabelas, usado no cálculo do custo de MO
// Pode ser 0 (ex: 1.000km Haojue = inspeção gratuita)
function getTmoReal(brand, modelo, km) {
  const k = parseInt(km);
  if (brand === 'haojue') {
    if (modelo === 'LINDY125') return DADOS.haojue.tmoLindy[k] || 0;
    return DADOS.haojue.tmoHJ[k] || 0;
  }
  if (brand === 'zontes') {
    if (modelo === 'E350') return DADOS.zontes.tmoE350[k] || 0;
    if (modelo === 'E350_ANTIGA') return DADOS.zontes.tmoE350Antiga[k] || 0;
    return DADOS.zontes.tmo350[k] || 0;
  }
  if (brand === 'suzuki') {
    return (DADOS.suzuki.tmo[modelo] || {})[k] || 0;
  }
  return 0;
}

// ── CHECKLIST DE ITENS INSPECIONADOS ─────────────────
// T=Trocar  I=Inspecionar  L=Limpar  IAL=Insp/Ajust/Lubr  A=Ajustar  IL=Insp/Lubr
function getChecklist(brand, modelo, km) {
  const k = parseInt(km);

  // Checklist base — revisões leves (1k a 9k, e 15k,18k,21k...)
  const base = [
    { op:'T', item:'Óleo do motor' },
    { op:'I', item:'Nível do fluido de freio' },
    { op:'I', item:'Desgaste das pastilhas/lonas de freio' },
    { op:'IAL', item:'Cabo e alavanca de embreagem' },
    { op:'IAL', item:'Cabo e alavanca do acelerador' },
    { op:'I', item:'Funcionamento dos freios dianteiro e traseiro' },
    { op:'I', item:'Pneus (pressão e desgaste)' },
    { op:'IL', item:'Corrente de transmissão' },
    { op:'I', item:'Faróis, lanternas e sinaleiras' },
    { op:'I', item:'Bateria' },
    { op:'I', item:'Fixações gerais (parafusos e porcas)' },
  ];

  // Adiciona itens específicos por KM
  const extras = [];

  // Revisão completa — 12.000 km e múltiplos
  const cicloCompleto = (k % 12000 === 0 && k > 0);
  if (cicloCompleto) {
    extras.push(
      { op:'T', item:'Vela de ignição' },
      { op:'T', item:'Filtro de ar' },
      { op:'T', item:'Filtro de óleo' },
      { op:'I', item:'Jogo de válvulas' },
      { op:'T', item:'Fluido de freio' },
      { op:'I', item:'Sistema de arrefecimento (se aplicável)' },
      { op:'I', item:'Velas e sistema de ignição' },
    );
  } else if (k <= 9000) {
    // Revisões iniciais
    if (k === 1000) extras.push({ op:'I', item:'Aperto geral pós-rodagem inicial' });
    extras.push({ op:'I', item:'Filtro de ar (inspeção visual)' });
  } else {
    // Revisões intermediárias (15k, 18k, 21k...)
    extras.push(
      { op:'I', item:'Filtro de ar (substituir se necessário)' },
      { op:'I', item:'Vela de ignição (inspeção)' },
      { op:'T', item:'Filtro de óleo' },
    );
  }

  // E350 — adiciona correia CVT no 24k
  if (brand === 'zontes' && modelo === 'E350' && k === 24000) {
    extras.push({ op:'T', item:'Correia CVT' });
  }

  // Lindy125 — correia CVT a cada 18k
  if (brand === 'haojue' && modelo === 'LINDY125' && k % 18000 === 0 && k > 0) {
    extras.push({ op:'T', item:'Correia CVT' });
  }

  return [...base, ...extras];
}


function getPecas(brand, modelo, km) {
  const k = parseInt(km);
  if (brand === 'haojue') {
    if (modelo === 'LINDY125') return DADOS.haojue.pecasLindy[k] || [];
    // Ciclo padrão: rem=(km/1000)%12 → 0=completo | 3,9=simples | outros=arruela
    const rem = (k / 1000) % 12;
    const c   = DADOS.haojue.pecasCiclo;
    if      (rem === 0)              return c.completo.map(p=>({...p}));
    else if (rem === 3 || rem === 9) return c.simples.map(p=>({...p}));
    else                             return c.arruela.map(p=>({...p}));
  }
  if (brand === 'zontes') {
    if (modelo === 'E350') return DADOS.zontes.pecasE350[k] || [];
    if (modelo === 'E350_ANTIGA') return DADOS.zontes.pecasE350Antiga[k] || [];
    return DADOS.zontes.pecas350[k] || [];
  }
  if (brand === 'suzuki') {
    return (DADOS.suzuki.pecas[modelo] || {})[k] || [];
  }
  return [];
}

function getValorHoraMO(brand, modelo) {
  if (brand === 'suzuki') return DADOS.suzuki.tmoHora[modelo] || CONFIG.MO_HORA;
  if (brand === 'haojue') return DADOS.haojue.TMO_HORA;
  if (brand === 'zontes') return DADOS.zontes.TMO_HORA;
  return CONFIG.MO_HORA;
}

function calcularTotais(brand, modelo, km) {
  const pecas      = getPecas(brand, modelo, km);
  const tmo        = getTmo(brand, modelo, km);        // duração exibida (mín 1h)
  const tmoReal    = getTmoReal(brand, modelo, km);    // TMO real para custo
  const hora       = getValorHoraMO(brand, modelo);
  const totalPecas = pecas.reduce((s, p) => s + p.qtd * p.valor, 0);
  const totalMO    = tmoReal * hora;                   // custo usa TMO real
  return { pecas, tmo, tmoReal, hora, totalPecas, totalMO, total: totalPecas + totalMO };
}

// ── ESTADO DA APLICAÇÃO ───────────────────────────────
const S = {
  unidade:    null,   // key da unidade selecionada
  brand:      null,
  modelo:     null,
  km:         null,
  data:       null,
  hora:       null,
  cliente:    { nome:'', tel:'', placa:'', odo:'', obs:'' },
  calEventId: null,
  sheetUrl:   null,
};

// ── APPS SCRIPT BACKEND ──────────────────────────────
// URL gerada ao publicar o Apps Script como Web App.
// Substitua pelo valor real após publicar em script.google.com
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzS-CpP_kAUDfMUt-bXY_w2TOD007yq2jDMSC5GHXrkZKMX92TbPpqDZOBQlTEeCE6u/exec';

async function chamarBackend(payload) {
  // Apps Script Web Apps não suportam CORS preflight com POST+JSON.
  // Solução: enviar como POST com URLSearchParams (form data),
  // que não dispara preflight e o Apps Script aceita normalmente.
  const params = new URLSearchParams();
  params.append('payload', JSON.stringify(payload));

  const res = await fetch(APPS_SCRIPT_URL, {
    method:  'POST',
    body:    params,
  });
  if (!res.ok) throw new Error('Erro na chamada ao backend: ' + res.status);
  return res.json();
}

// ── CONSULTAR HORÁRIOS OCUPADOS ───────────────────────
async function buscarOcupados(dateStr) {
  try {
    const data = await chamarBackend({
      action:  'horarios_ocupados',
      data:    dateStr,
      unidade: S.unidade,
    });
    return data.ocupados || [];
  } catch(e) {
    console.warn('buscarOcupados error:', e.message);
    return [];
  }
}

// ── CRIAR EVENTO + GRAVAR PLANILHA (via Apps Script) ──
// Tudo enviado em uma única chamada ao backend
async function confirmarNoBackend() {
  const totais     = calcularTotais(S.brand, S.modelo, S.km);
  const brand      = capitalize(S.brand);
  const labelModelo= getModeloLabel(S.brand, S.modelo);
  const unidadeInfo= CONFIG.UNIDADES[S.unidade];
  const pecasStr   = totais.pecas.map(p => `${p.nome} (${p.qtd}x) - R$ ${fmtBRL(p.qtd * p.valor)}`).join('\n');

  const payload = {
    action:      'confirmar_agendamento',
    unidade:     S.unidade,
    nomeUnidade: unidadeInfo.label,
    endUnidade:  unidadeInfo.end,
    data:        S.data,
    dataFmt:     fmtDate(S.data),
    hora:        S.hora,
    marca:       brand,
    modelo:      labelModelo,
    kmLabel:     fmtKm(S.km),
    tmo:         totais.tmo.toFixed(1).replace('.',','),
    valorHora:   totais.hora,
    totalPecas:  fmtBRL(totais.totalPecas),
    totalMO:     fmtBRL(totais.totalMO),
    total:       fmtBRL(totais.total),
    pecasStr:    pecasStr,
    cliente:     S.cliente,
  };

  const result = await chamarBackend(payload);
  return result;
}

// ── WHATSAPP (mensagem para a COMERI) ────────────────
function gerarMsgWA() {
  const brand      = capitalize(S.brand);
  const label      = getModeloLabel(S.brand, S.modelo);
  const totais     = calcularTotais(S.brand, S.modelo, S.km);
  const unidadeInfo= CONFIG.UNIDADES[S.unidade];
  const tmoExib    = getTmo(S.brand, S.modelo, S.km);
  const durLabel   = tmoExib >= 3 ? '3 horas' : tmoExib >= 1.5 ? '1h30' : '1 hora';

  const linhas = [
    `🔔 *NOVO AGENDAMENTO — COMERI MOTOS*`,
    ``,
    `📍 *Unidade: ${unidadeInfo.label}*`,
    `${unidadeInfo.end}`,
    ``,
    `👤 *${S.cliente.nome}*`,
    `📱 ${S.cliente.tel}`,
    `🔖 Placa: *${S.cliente.placa}*`,
    S.cliente.odo ? `🔢 Odômetro: ${Number(S.cliente.odo).toLocaleString('pt-BR')} km` : null,
    ``,
    `🏍️ *${brand} ${label}*`,
    `🔧 Revisão: *${fmtKm(S.km)}*`,
    ``,
    `📅 Data: *${fmtDate(S.data)}* às *${S.hora}*`,
    `⏱ Duração estimada: ${durLabel}`,
    ``,
    `💵 *Total estimado: R$ ${fmtBRL(totais.total)}*`,
    S.cliente.obs ? `
📝 Obs: ${S.cliente.obs}` : null,
  ].filter(l => l !== null);

  return encodeURIComponent(linhas.join('\n'));
}


// ── UI: SELEÇÃO DE MARCA ──────────────────────────────
function selectBrand(brand, el) {
  S.brand  = brand;
  S.modelo = null;
  document.querySelectorAll('.brand-card').forEach(c => {
    c.classList.remove('selected');
    c.setAttribute('aria-pressed','false');
  });
  el.classList.add('selected');
  el.setAttribute('aria-pressed','true');

  const mf  = document.getElementById('model-field');
  const sel = document.getElementById('model-select');
  mf.hidden = false;

  const d = DADOS[brand];
  sel.innerHTML = '<option value="">— Selecione o modelo —</option>';
  d.modelos.forEach((m, i) => {
    const o = document.createElement('option');
    o.value = m;
    o.textContent = d.labels[i];
    sel.appendChild(o);
  });
  sel.value = '';
  S.modelo = null;
}

// ── UI: GRID DE KM ────────────────────────────────────
function buildKmGrid() {
  const g   = document.getElementById('km-grid');
  g.innerHTML = '';
  const kms = getKmsDisponiveis(S.brand, S.modelo);
  kms.forEach(km => {
    const tmo = getTmo(S.brand, S.modelo, km);
    const b = document.createElement('div');
    b.className = 'km-btn';
    b.setAttribute('role','button');
    b.setAttribute('tabindex','0');
    const dur    = tmo >= 3 ? '3 h' : tmo >= 1.5 ? '1h30' : tmo > 0 ? '1 h' : '< 30 min';
    const totais = calcularTotais(S.brand, S.modelo, km);
    b.innerHTML = `
      <div class="km-val">${fmtKm(km)}</div>
      <div class="km-label">${dur}</div>
      <div class="km-preco">R$ ${fmtBRL(totais.total)}</div>
    `;
    const select = () => {
      S.km = km;
      document.querySelectorAll('.km-btn').forEach(x => x.classList.remove('selected'));
      b.classList.add('selected');
      const dl = tmo >= 3 ? '3 horas' : tmo >= 1.5 ? '1h30' : tmo > 0 ? '1 hora' : '< 30 min';
      document.getElementById('duration-display').value = dl;
    };
    b.onclick = select;
    b.onkeydown = e => { if (e.key==='Enter'||e.key===' ') select(); };
    g.appendChild(b);
  });
}

// ── UI: CALENDÁRIO ────────────────────────────────────
async function onDateChange(val) {
  S.data = null;
  S.hora = null;
  const status = document.getElementById('cal-status');
  if (!val) { buildTimeGrid([]); return; }

  // Valida dia útil
  if (!isDiaUtil(val)) {
    const parts = val.split('-');
    const data  = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
    const diaSem = data.getDay();
    let motivo = isFeriado(val) ? 'Feriado' : diaSem === 0 ? 'Domingo' : 'Sábado';
    status.innerHTML = `<span style="color:var(--red);font-weight:600">⚠️ ${motivo} — por favor escolha um dia útil.</span>`;
    buildTimeGrid([]);
    // Pula para próximo dia útil
    const proximo = proximoDiaUtil(val);
    document.getElementById('appt-date').value = proximo;
    S.data = proximo;
    return onDateChange(proximo);
  }

  S.data = val;

  status.innerHTML = '<div class="spinner"></div> Consultando agenda...';
  document.querySelectorAll('.time-btn').forEach(b => {
    b.classList.add('loading-slot');
    b.classList.remove('selected');
  });

  try {
    const ocupados = await buscarOcupados(val);
    buildTimeGrid(ocupados);
    // Mostra aviso só se agenda estiver completamente lotada
    const horariosLivres = CONFIG.HORARIOS.filter(h => !ocupados.includes(h));
    if (horariosLivres.length === 0) {
      status.innerHTML = `<span style="color:var(--red);font-weight:600">⚠️ Agenda lotada para esta data. Por favor, escolha outra data.</span>`;
    } else {
      status.innerHTML = '';
    }
  } catch(e) {
    console.warn('Calendar error:', e.message);
    buildTimeGrid([]);
    status.innerHTML = '⚠️ Não foi possível consultar a agenda — horários estimados exibidos';
  }
}

function buildTimeGrid(ocupados) {
  const g = document.getElementById('time-grid');
  g.innerHTML = '';
  CONFIG.HORARIOS.forEach(h => {
    const unavail = ocupados.includes(h);
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'time-btn' + (unavail ? ' unavailable' : '');
    b.textContent = h;
    b.disabled = unavail;
    if (!unavail) {
      b.onclick = () => {
        S.hora = h;
        document.querySelectorAll('.time-btn:not(.unavailable)').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
      };
    }
    g.appendChild(b);
  });
}

// ── UI: RESUMO ────────────────────────────────────────
function buildSummary(container) {
  if (!S.km) return;
  const brand  = capitalize(S.brand);
  const label  = getModeloLabel(S.brand, S.modelo);
  const tmo    = getTmo(S.brand, S.modelo, S.km);

  const checklist = getChecklist(S.brand, S.modelo, S.km);
  const opLabel   = { T:'Trocar', I:'Inspecionar', L:'Limpar', IAL:'Insp./Ajust./Lubr.', IL:'Insp./Lubr.', A:'Ajustar' };
  const checkRows = checklist.map(c =>
    `<div class="summary-row checklist-row">
      <span class="check-op op-${c.op}">${opLabel[c.op]||c.op}</span>
      <span class="check-item">${c.item}</span>
    </div>`
  ).join('');

  const durLabel  = tmo >= 3 ? '3 horas' : tmo >= 1.5 ? '1h30' : tmo > 0 ? '1 hora' : '< 30 min';
  const unidadeInfo = S.unidade ? CONFIG.UNIDADES[S.unidade] : null;
  container.innerHTML = `
    ${unidadeInfo ? `
    <div class="summary-section">
      <div class="summary-section-title">Unidade</div>
      <div class="summary-row"><span class="lbl">Local</span><span class="val" style="font-weight:700">${unidadeInfo.label}</span></div>
      <div class="summary-row"><span class="lbl">Endereço</span><span class="val">${unidadeInfo.end}</span></div>
    </div>
    <div class="summary-divider"></div>` : ''}
    <div class="summary-section">
      <div class="summary-section-title">Veículo</div>
      <div class="summary-row"><span class="lbl">Marca</span><span class="val">${brand}</span></div>
      <div class="summary-row"><span class="lbl">Modelo</span><span class="val">${label}</span></div>
      <div class="summary-row"><span class="lbl">Placa</span><span class="val">${S.cliente.placa || '—'}</span></div>
      ${S.cliente.odo ? `<div class="summary-row"><span class="lbl">Odômetro</span><span class="val">${Number(S.cliente.odo).toLocaleString('pt-BR')} km</span></div>` : ''}
    </div>
    <div class="summary-divider"></div>
    <div class="summary-section">
      <div class="summary-section-title">O que será realizado</div>
      ${checkRows}
    </div>
    <div class="summary-divider"></div>
    <div class="summary-section">
      <div class="total-row"><span>Total estimado</span><span class="total-val">R$ ${fmtBRL(calcularTotais(S.brand, S.modelo, S.km).total)}</span></div>
    </div>
    <div class="summary-divider"></div>
    <div class="summary-section">
      <div class="summary-section-title">Agendamento</div>
      <div class="summary-row"><span class="lbl">Data</span><span class="val">${fmtDate(S.data)}</span></div>
      <div class="summary-row"><span class="lbl">Horário</span><span class="val">${S.hora}</span></div>
    </div>
    <div class="summary-divider"></div>
    <div class="summary-section">
      <div class="summary-section-title">Cliente</div>
      <div class="summary-row"><span class="lbl">Nome</span><span class="val">${S.cliente.nome}</span></div>
      <div class="summary-row"><span class="lbl">Telefone</span><span class="val">${S.cliente.tel}</span></div>
      ${S.cliente.obs ? `<div class="summary-row"><span class="lbl">Obs</span><span class="val" style="max-width:60%;text-align:right">${S.cliente.obs}</span></div>` : ''}
    </div>
  `;
}

// ── FLUXO: CONFIRMAR ──────────────────────────────────
async function confirmar() {
  const nav     = document.getElementById('confirm-nav');
  const overlay = document.getElementById('confirming-overlay');
  const step    = document.getElementById('confirming-step');
  nav.style.display = 'none';
  overlay.hidden    = false;

  S.calEventId = null;
  S.sheetUrl   = null;

  try {
    if (step) step.textContent = 'Registrando agendamento...';
    const result  = await confirmarNoBackend();
    S.calEventId  = result.calEventId  || null;
    S.sheetUrl    = result.sheetUrl    || null;
  } catch(e) {
    console.warn('Backend error:', e.message);
  }

  overlay.hidden    = true;
  nav.style.display = 'flex';
  mostrarSucesso();
}

function mostrarSucesso() {
  // Esconde o panel de resumo e mostra confirmação simples
  document.getElementById('panel5').classList.remove('active');
  document.getElementById('panel6').classList.add('active');
  markDone(5);

  const unidade = S.unidade ? CONFIG.UNIDADES[S.unidade].label : '';
  const tmo     = getTmo(S.brand, S.modelo, S.km);
  const duracao = tmo > 0 ? tmo.toFixed(1).replace('.',',') + ' h' : '< 30 min';

  document.getElementById('success-sub').textContent =
    `${S.cliente.nome}, seu agendamento foi confirmado!`;

  // Preenche o card de confirmação simples
  document.getElementById('success-summary').innerHTML = `
    <div class="summary-section">
      <div class="summary-row"><span class="lbl">Unidade</span><span class="val">${unidade}</span></div>
      <div class="summary-row"><span class="lbl">Data</span><span class="val">${fmtDate(S.data)}</span></div>
      <div class="summary-row"><span class="lbl">Horário</span><span class="val">${S.hora}</span></div>
      <div class="summary-row"><span class="lbl">Duração estimada</span><span class="val">${duracao}</span></div>
      <div class="summary-divider"></div>
      <div class="summary-row"><span class="lbl">Veículo</span><span class="val">${capitalize(S.brand)} ${getModeloLabel(S.brand, S.modelo)}</span></div>
      <div class="summary-row"><span class="lbl">Placa</span><span class="val">${S.cliente.placa}</span></div>
      <div class="summary-row"><span class="lbl">Revisão</span><span class="val">${fmtKm(S.km)}</span></div>
      <div class="summary-divider"></div>
      <div class="total-row"><span>Total estimado</span><span class="total-val">R$ ${fmtBRL(calcularTotais(S.brand, S.modelo, S.km).total)}</span></div>
    </div>
  `;

  // Esconde info de Calendar/planilha — uso interno
  const calInfo = document.getElementById('cal-event-info');
  calInfo.style.display = 'none';

  // Botão WhatsApp → envia para a COMERI
  const msg = gerarMsgWA();
  document.getElementById('btn-wa-final').onclick = () => {
    window.open(`https://wa.me/${CONFIG.WA_NUM}?text=${msg}`, '_blank');
  };
}

// ── FLUXO: NAVEGAÇÃO ──────────────────────────────────
function goNext(from) {
  const showAlert = id => document.getElementById(id).hidden = false;
  const hideAlert = id => document.getElementById(id).hidden = true;

  // Step 0 → Unidade
  if (from === 0) {
    if (!S.unidade) { showAlert('alert0'); return; }
    hideAlert('alert0');
    renderUnidadeBadge(1);
  }
  // Step 1 → Veículo / Modelo
  if (from === 1) {
    if (!S.brand || !S.modelo) { showAlert('alert1'); return; }
    hideAlert('alert1');
    buildKmGrid();
    renderUnidadeBadge(2);
    document.getElementById('duration-display').value = '';
  }
  // Step 2 → Quilometragem
  if (from === 2) {
    if (!S.km && S.km !== 0) { showAlert('alert2'); return; }
    hideAlert('alert2');
    renderUnidadeBadge(3);
    const inp = document.getElementById('appt-date');
    const tom = new Date(); tom.setDate(tom.getDate() + 1);
    const tomStr = tom.toISOString().split('T')[0];
    inp.min   = proximoDiaUtil(tomStr);
    inp.value = ''; S.data = null; S.hora = null;
    document.getElementById('cal-status').innerHTML = '';
    buildTimeGrid([]);
    const tmo = getTmo(S.brand, S.modelo, S.km);
    const durLabel = tmo >= 3 ? '3 horas' : tmo >= 1.5 ? '1h30' : tmo > 0 ? '1 hora' : '< 30 min';
    document.getElementById('duration-display').value = durLabel;
  }
  // Step 3 → Data / Hora
  if (from === 3) {
    if (!S.data || !S.hora) { showAlert('alert3'); return; }
    hideAlert('alert3');
    renderUnidadeBadge(4);
  }
  // Step 4 → Dados do cliente
  if (from === 4) {
    const nome  = document.getElementById('cli-nome').value.trim();
    const tel   = document.getElementById('cli-tel').value.trim();
    const placa = document.getElementById('cli-placa').value.trim().toUpperCase();
    if (!nome || !tel || !placa) { showAlert('alert4'); return; }
    S.cliente = { nome, tel, placa,
      odo: document.getElementById('cli-odo').value,
      obs: document.getElementById('cli-obs').value.trim() };
    hideAlert('alert4');
    buildSummary(document.getElementById('summary-content'));
  }

  document.getElementById('panel'+from).classList.remove('active');
  document.getElementById('panel'+(from+1)).classList.add('active');
  markDone(from);
  if (from+1 <= 5) document.getElementById('st'+(from+1)).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack(from) {
  document.getElementById('panel'+from).classList.remove('active');
  document.getElementById('panel'+(from-1)).classList.add('active');
  const st = document.getElementById('st'+(from-1));
  st.classList.remove('done'); st.classList.add('active');
  st.querySelector('.step-circle').textContent = from;
  if (from <= 5) document.getElementById('st'+from).classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function markDone(idx) {
  const st = document.getElementById('st'+idx);
  st.classList.remove('active'); st.classList.add('done');
  st.querySelector('.step-circle').textContent = '✓';
}

function resetApp() { window.location.reload(); }

// ── HELPERS ───────────────────────────────────────────
function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }
function fmtDate(v) { if(!v) return ''; const[y,m,d]=v.split('-'); return `${d}/${m}/${y}`; }
function fmtBRL(n) { return n.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function fmtKm(km) { return Number(km).toLocaleString('pt-BR') + ' km'; }

function getModeloLabel(brand, modelo) {
  const d = DADOS[brand];
  const idx = d.modelos.indexOf(modelo);
  return idx >= 0 ? d.labels[idx] : modelo;
}

// ── INIT ──────────────────────────────────────────────

// ── UI: SELEÇÃO DE UNIDADE ────────────────────────────
function selectUnidade(key, el) {
  S.unidade = key;
  document.querySelectorAll('.unidade-card').forEach(c => {
    c.classList.remove('selected');
    c.setAttribute('aria-pressed','false');
  });
  el.classList.add('selected');
  el.setAttribute('aria-pressed','true');
}

function renderUnidadeBadge(stepIdx) {
  const el = document.getElementById('unidade-badge-' + stepIdx);
  if (!el || !S.unidade) return;
  const u = CONFIG.UNIDADES[S.unidade];
  el.style.background = u.cor;
  el.textContent = '📍 ' + u.label + ' — ' + u.end;
  el.style.display = 'inline-flex';
}

window.addEventListener('load', () => {
  // Evento model-select
  document.getElementById('model-select').addEventListener('change', function() {
    S.modelo = this.value || null;
  });
});