/* =====================================================
   AGENDAMENTO DE REVISÃO — COMERI MOTOS
   agendamento.js
   Dados extraídos diretamente dos scripts TMO oficiais:
   revisaohaojue.js · revisaozontes.js · revisaosuzuki.js
   ===================================================== */

// ── DADOS REAIS DAS REVISÕES ──────────────────────────
// Estrutura: DADOS[brand][modelo] = { kms: [...], tmo: {...}, pecas: {...} }
// kms: array de quilometragens disponíveis
// tmo[km]: horas de mão de obra para aquele km
// pecas[km]: array de peças { nome, qtd, valor }

const DADOS = {

  // ── HAOJUE ──────────────────────────────────────────
  // Fonte: revisaohaojue.js — _gerarCiclo + dadosRevisao
  // Ciclo: 1k,3k,6k,9k,12k,15k,...,57k
  // TMO: 1k=0 | 3k/6k/9k/15k...=0.5 | 12k/24k/36k/48k=3 | 18k/30k/42k/54k=1 | 24k/36k/48k=2.5
  haojue: {
    modelos: ['DK160','DR160','DL160','NK150','MASTER150','CHOPPER150','LINDY125'],
    labels:  ['DK 160','DR 160','DL 160','NK 150','Master Ride 150','Chopper Road 150','Lindy 125'],

    // Peças base compartilhadas por modelo (geradas pelo _gerarCiclo)
    // rem = (km/1000) % 12
    // rem===0 → completo | rem===3||rem===9 → simples | else → arruela
    pecasBase: {
      DK160:    { filtroAr: '13781H2C100H000', vela: '09482H00010H000' },
      DR160:    { filtroAr: '13780H2J000H000', vela: '09482H00010H000' },
      DL160:    { filtroAr: '13780H2J000H000', vela: '09482H00010H000' },
      NK150:    { filtroAr: '13780H2J000H000', vela: '09482H00010H000' },
      MASTER150:{ filtroAr: '13780H37200H000', vela: '0948200399000'   },
      CHOPPER150:{ filtroAr:'13781H2A300H000', vela: '09482Z00001H000' },
    },

    // TMO padrão Haojue (todos exceto LINDY125)
    tmoHJ: {
      1000:0, 3000:0.5, 6000:0.5, 9000:0.5, 12000:3,
      15000:0.5, 18000:1, 21000:0.5, 24000:2.5, 27000:0.5,
      30000:0.5, 33000:0.5, 36000:2.5, 39000:0.5, 42000:0.5,
      45000:0.5, 48000:2.5, 51000:0.5, 54000:0.5, 57000:0.5
    },

    // TMO Lindy 125 (próprio)
    tmoLindy: {
      1000:0, 3000:0.5, 6000:1.5, 9000:0.5, 12000:2,
      15000:0.5, 18000:3, 21000:0.5, 24000:2, 27000:0.5,
      30000:2, 33000:0.5, 36000:3, 39000:0.5, 42000:2,
      45000:0.5, 48000:3, 51000:0.5, 54000:3, 57000:0.5
    },

    // Peças Lindy 125 (ciclo fixo com filtro de óleo)
    pecasLindy: {
      1000:  [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      3000:  [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      6000:  [{nome:'Filtro de Ar',qtd:1,valor:75},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      9000:  [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      12000: [{nome:'Filtro de Ar',qtd:1,valor:75},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Junta Tampa Válvula',qtd:1,valor:56},{nome:'Vela de Ignição',qtd:1,valor:41}],
      15000: [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      18000: [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Correia CVT',qtd:1,valor:245}],
      21000: [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      24000: [{nome:'Filtro de Ar',qtd:1,valor:75},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Junta Tampa Válvula',qtd:1,valor:56},{nome:'Vela de Ignição',qtd:1,valor:41}],
      27000: [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      30000: [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Correia CVT',qtd:1,valor:245}],
      33000: [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      36000: [{nome:'Filtro de Ar',qtd:1,valor:75},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Junta Tampa Válvula',qtd:1,valor:56},{nome:'Vela de Ignição',qtd:1,valor:41},{nome:'Correia CVT',qtd:1,valor:245}],
    }
  },

  // ── ZONTES ──────────────────────────────────────────
  // Fonte: revisaozontes.js
  // V350/T350/GK350/S350/R350 compartilham o mesmo ciclo
  // E350 tem ciclo próprio (4k, 8k, 12k, 16k, 20k, 24k)
  zontes: {
    modelos: ['V350','T350','GK350','S350','R350','E350'],
    labels:  ['V 350','T 350 / T 350 X','GK 350','S 350','R 350','350 E'],

    // TMO ciclo 350cc padrão (V/T/GK/S/R)
    tmo350: {
      1000:0, 3000:0.3, 6000:0.6, 9000:0.3, 12000:1.5,
      15000:0.3, 18000:1.0, 21000:0.3, 24000:1.5, 27000:0.3,
      30000:0.6, 33000:0.3, 36000:1.5, 39000:0.3, 42000:0.6,
      45000:0.3, 48000:1.5, 51000:0.3, 54000:1.0, 57000:1.5
    },

    // Peças 350cc padrão (V/T/GK/S/R)
    pecas350: {
      1000:  [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      3000:  [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      6000:  [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      9000:  [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      12000: [{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      15000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      18000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      21000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      24000: [{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      27000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      30000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      33000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      36000: [{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      39000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      42000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      45000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      48000: [{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      51000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      54000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      57000: [{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
    },

    // TMO E350 (ciclo próprio 4k)
    tmoE350: { 1000:0.0, 4000:0.5, 8000:0.8, 12000:0.3, 16000:1.0, 20000:0.3, 24000:2.0 },

    // Peças E350
    pecasE350: {
      1000:  [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120}],
      4000:  [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro Esponja Motor (ZT350-E)',qtd:1,valor:84}],
      8000:  [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120}],
      12000: [{nome:'Óleo de Motor',qtd:2,valor:70}],
      16000: [{nome:'Filtro de Ar',qtd:1,valor:180},{nome:'Vela de Ignição',qtd:1,valor:165},{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Líquido de Arrefecimento',qtd:1,valor:30}],
      20000: [{nome:'Óleo de Motor',qtd:2,valor:70}],
      24000: [{nome:'Óleo de Motor',qtd:2,valor:70},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Correia CVT',qtd:1,valor:1150},{nome:'Fluido de Freio',qtd:1,valor:22}],
    }
  },

  // ── SUZUKI ──────────────────────────────────────────
  // Fonte: revisaosuzuki.js
  // Cada modelo tem tmoHora (cilindrada, usada como R$/h) e seu próprio ciclo km
  suzuki: {
    modelos: ['BURGMAN_I','GSX800','HAYABUSA','GSXR1000','GSX750','GSXS1000','SV650A','VSTROM650','VSTROM800','VSTROM1000','VSTROM1050XT'],
    labels:  ['Burgman i','GSX 800','Hayabusa GSX1300R','GSX-R1000','GSX 750','GSX-S1000A','SV 650A','V-Strom 650 A','V-Strom 800 DE','V-Strom 1050','V-Strom 1050 XT'],

    // tmoHora por modelo (usado como valor da hora de MO da Suzuki)
    tmoHora: {
      BURGMAN_I:100, GSX800:800, HAYABUSA:1300, GSXR1000:1000,
      GSX750:750, GSXS1000:1000, SV650A:650,
      VSTROM650:650, VSTROM800:800, VSTROM1000:1000, VSTROM1050XT:1050
    },

    tmo: {
      BURGMAN_I:  {1000:0,6000:0,12000:0.8,18000:2.5,24000:1,30000:1,36000:2.5,42000:1,48000:1,54000:2.5,60000:1},
      GSX800:     {1000:0,6000:0,12000:0.4,18000:0.2,24000:0.4,30000:0.2,36000:0.4,42000:0.2,48000:0.4,54000:0.2,60000:0.4},
      HAYABUSA:   {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3},
      GSXR1000:   {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3},
      GSX750:     {1000:0,6000:0,12000:0.4,18000:0.2,24000:0.4,30000:0.2,36000:0.4,42000:0.2,48000:0.4,54000:0.2,60000:0.4},
      GSXS1000:   {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3},
      SV650A:     {1000:0,6000:0,12000:0.5,18000:0.3,24000:0.5,30000:0.3,36000:0.5,42000:0.3,48000:0.5,54000:0.3,60000:0.5},
      VSTROM650:  {1000:0,6000:0,12000:0.5,18000:0.3,24000:0.5,30000:0.3,36000:0.5,42000:0.3,48000:0.5,54000:0.3,60000:0.5},
      VSTROM800:  {1000:0,6000:0,12000:0.4,18000:0.2,24000:0.4,30000:0.2,36000:0.4,42000:0.2,48000:0.4,54000:0.2,60000:0.4},
      VSTROM1000: {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3},
      VSTROM1050XT:{1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3},
    },

    pecas: {
      BURGMAN_I: {
        1000: [{nome:'Óleo do Motor',qtd:1,valor:70}],
        6000: [{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],
        12000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],
        18000:[{nome:'Filtro de Ar',qtd:1,valor:115},{nome:'Vela de Ignição',qtd:1,valor:150},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],
        24000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],
        30000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],
        36000:[{nome:'Filtro de Ar',qtd:1,valor:115},{nome:'Vela de Ignição',qtd:1,valor:150},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],
        42000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],
        48000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],
        54000:[{nome:'Filtro de Ar',qtd:1,valor:115},{nome:'Vela de Ignição',qtd:1,valor:150},{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],
        60000:[{nome:'Óleo do Motor',qtd:1,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:50}],
      },
      GSX800: {
        1000: [{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        6000: [{nome:'Óleo do Motor',qtd:4,valor:70}],
        12000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        18000:[{nome:'Filtro de Ar',qtd:1,valor:320},{nome:'Óleo do Motor',qtd:4,valor:70}],
        24000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        36000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        42000:[{nome:'Filtro de Ar',qtd:1,valor:320},{nome:'Óleo do Motor',qtd:4,valor:70}],
        48000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
      },
      HAYABUSA: {
        1000: [{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        6000: [{nome:'Óleo do Motor',qtd:4,valor:70}],
        12000:[{nome:'Vela de Ignição',qtd:4,valor:242},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:4,valor:70}],
        18000:[{nome:'Filtro de Ar',qtd:1,valor:480},{nome:'Óleo do Motor',qtd:4,valor:70}],
        24000:[{nome:'Vela de Ignição',qtd:4,valor:242},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:4,valor:70}],
        30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        36000:[{nome:'Vela de Ignição',qtd:4,valor:242},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:4,valor:70}],
        42000:[{nome:'Filtro de Ar',qtd:1,valor:480},{nome:'Óleo do Motor',qtd:4,valor:70}],
        48000:[{nome:'Vela de Ignição',qtd:4,valor:242},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:4,valor:70}],
        54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
      },
      GSXR1000: {
        1000: [{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        6000: [{nome:'Óleo do Motor',qtd:4,valor:70}],
        12000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:185}],
        18000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Ar',qtd:1,valor:435}],
        24000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:185}],
        30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        36000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:185}],
        42000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Ar',qtd:1,valor:435}],
        48000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:185}],
        54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
      },
      GSX750: {
        1000: [{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        6000: [{nome:'Óleo do Motor',qtd:3,valor:70}],
        12000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:240}],
        18000:[{nome:'Filtro de Ar',qtd:1,valor:370},{nome:'Óleo do Motor',qtd:3,valor:70}],
        24000:[{nome:'Vela de Ignição',qtd:4,valor:240},{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        30000:[{nome:'Óleo do Motor',qtd:3,valor:70}],
        36000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:240}],
        42000:[{nome:'Filtro de Ar',qtd:1,valor:370},{nome:'Óleo do Motor',qtd:3,valor:70}],
        48000:[{nome:'Vela de Ignição',qtd:4,valor:240},{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        54000:[{nome:'Óleo do Motor',qtd:3,valor:70}],
        60000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
      },
      GSXS1000: {
        1000: [{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        6000: [{nome:'Óleo do Motor',qtd:4,valor:70}],
        12000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        18000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:70}],
        24000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        36000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        42000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:70}],
        48000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
      },
      SV650A: {
        1000: [{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        6000: [{nome:'Óleo do Motor',qtd:3,valor:70}],
        12000:[{nome:'Vela de Ignição',qtd:2,valor:160},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:3,valor:70}],
        18000:[{nome:'Filtro de Ar',qtd:1,valor:370},{nome:'Óleo do Motor',qtd:3,valor:70}],
        24000:[{nome:'Vela de Ignição',qtd:2,valor:160},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:3,valor:70}],
        30000:[{nome:'Óleo do Motor',qtd:3,valor:70}],
        36000:[{nome:'Vela de Ignição',qtd:2,valor:160},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:3,valor:70}],
        42000:[{nome:'Filtro de Ar',qtd:1,valor:370},{nome:'Óleo do Motor',qtd:3,valor:70}],
        48000:[{nome:'Vela de Ignição',qtd:2,valor:160},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:3,valor:70}],
        54000:[{nome:'Óleo do Motor',qtd:3,valor:70}],
        60000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
      },
      VSTROM650: {
        1000: [{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        6000: [{nome:'Óleo do Motor',qtd:3,valor:70}],
        12000:[{nome:'Vela de Ignição',qtd:2,valor:135},{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        18000:[{nome:'Filtro de Ar',qtd:1,valor:480},{nome:'Óleo do Motor',qtd:3,valor:70}],
        24000:[{nome:'Vela de Ignição',qtd:2,valor:135},{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        30000:[{nome:'Óleo do Motor',qtd:3,valor:70}],
        36000:[{nome:'Vela de Ignição',qtd:2,valor:135},{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        42000:[{nome:'Filtro de Ar',qtd:1,valor:480},{nome:'Óleo do Motor',qtd:3,valor:70}],
        48000:[{nome:'Vela de Ignição',qtd:2,valor:135},{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        54000:[{nome:'Óleo do Motor',qtd:3,valor:70}],
        60000:[{nome:'Óleo do Motor',qtd:3,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
      },
      VSTROM800: {
        1000: [{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        6000: [{nome:'Óleo do Motor',qtd:4,valor:70}],
        12000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        18000:[{nome:'Filtro de Ar',qtd:1,valor:320},{nome:'Óleo do Motor',qtd:4,valor:70}],
        24000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        36000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        42000:[{nome:'Filtro de Ar',qtd:1,valor:320},{nome:'Óleo do Motor',qtd:4,valor:70}],
        48000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
      },
      VSTROM1000: {
        1000: [{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        6000: [{nome:'Óleo do Motor',qtd:4,valor:70}],
        12000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        18000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:70}],
        24000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        36000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        42000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:70}],
        48000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
      },
      VSTROM1050XT: {
        1000: [{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        6000: [{nome:'Óleo do Motor',qtd:4,valor:70}],
        12000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        18000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:70}],
        24000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        30000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        36000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        42000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:70}],
        48000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
        54000:[{nome:'Óleo do Motor',qtd:4,valor:70}],
        60000:[{nome:'Óleo do Motor',qtd:4,valor:70},{nome:'Filtro de Óleo',qtd:1,valor:185}],
      },
    }
  }
};

// ── FUNÇÕES DE ACESSO AOS DADOS ───────────────────────

function getKmsDisponiveis(brand, modelo) {
  if (brand === 'haojue') {
    if (modelo === 'LINDY125') return Object.keys(DADOS.haojue.pecasLindy).map(Number).sort((a,b)=>a-b);
    // Haojue ciclo padrão
    return [1000,3000,6000,9000,12000,15000,18000,21000,24000,27000,30000,33000,36000,39000,42000,45000,48000,51000,54000,57000];
  }
  if (brand === 'zontes') {
    if (modelo === 'E350') return Object.keys(DADOS.zontes.pecasE350).map(Number).sort((a,b)=>a-b);
    return Object.keys(DADOS.zontes.pecas350).map(Number).sort((a,b)=>a-b);
  }
  if (brand === 'suzuki') {
    return Object.keys(DADOS.suzuki.pecas[modelo]).map(Number).sort((a,b)=>a-b);
  }
  return [];
}

function getTmo(brand, modelo, km) {
  const k = parseInt(km);
  if (brand === 'haojue') {
    if (modelo === 'LINDY125') return DADOS.haojue.tmoLindy[k] || 0;
    return DADOS.haojue.tmoHJ[k] || 0;
  }
  if (brand === 'zontes') {
    if (modelo === 'E350') return DADOS.zontes.tmoE350[k] || 0;
    return DADOS.zontes.tmo350[k] || 0;
  }
  if (brand === 'suzuki') {
    return (DADOS.suzuki.tmo[modelo] || {})[k] || 0;
  }
  return 0;
}

function getPecas(brand, modelo, km) {
  const k = parseInt(km);
  if (brand === 'haojue') {
    if (modelo === 'LINDY125') return DADOS.haojue.pecasLindy[k] || [];
    // Calcular peças dinamicamente usando _gerarCiclo logic
    const rem = (k / 1000) % 12;
    const cfg = DADOS.haojue.pecasBase[modelo] || DADOS.haojue.pecasBase['DK160'];
    if (rem === 0) {
      // Completo
      return [
        {nome:'Filtro de Ar',qtd:1,valor:85},
        {nome:'Óleo do Motor',qtd:1,valor:70},
        {nome:'Junta Capa Óleo',qtd:1,valor:12.5},
        {nome:'Junta Tampa Direita',qtd:1,valor:85},
        {nome:'Junta Escapamento',qtd:1,valor:21},
        {nome:'Vela de Ignição',qtd:1,valor:90},
        {nome:'Lubrificante Corrente',qtd:1,valor:25},
        {nome:'Desingripante',qtd:1,valor:20},
      ];
    } else if (rem === 3 || rem === 9) {
      // Simples
      return [
        {nome:'Óleo do Motor',qtd:1,valor:70},
        {nome:'Lubrificante Corrente',qtd:1,valor:25},
        {nome:'Desingripante',qtd:1,valor:20},
      ];
    } else {
      // Arruela
      return [
        {nome:'Óleo do Motor',qtd:1,valor:70},
        {nome:'Arruela de Dreno',qtd:1,valor:5},
        {nome:'Lubrificante Corrente',qtd:1,valor:25},
        {nome:'Desingripante',qtd:1,valor:20},
      ];
    }
  }
  if (brand === 'zontes') {
    if (modelo === 'E350') return DADOS.zontes.pecasE350[k] || [];
    return DADOS.zontes.pecas350[k] || [];
  }
  if (brand === 'suzuki') {
    return (DADOS.suzuki.pecas[modelo] || {})[k] || [];
  }
  return [];
}

function getValorHoraMO(brand, modelo) {
  // Haojue e Zontes: R$110/h (CONFIG.MO_HORA)
  // Suzuki: usa tmoHora do modelo (cilindrada como R$/h)
  if (brand === 'suzuki') return DADOS.suzuki.tmoHora[modelo] || CONFIG.MO_HORA;
  return CONFIG.MO_HORA;
}

function calcularTotais(brand, modelo, km) {
  const pecas  = getPecas(brand, modelo, km);
  const tmo    = getTmo(brand, modelo, km);
  const hora   = getValorHoraMO(brand, modelo);
  const totalPecas = pecas.reduce((s, p) => s + p.qtd * p.valor, 0);
  const totalMO    = tmo * hora;
  return { pecas, tmo, hora, totalPecas, totalMO, total: totalPecas + totalMO };
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
  gapiToken:  null,
};

// ── GOOGLE APIs ──────────────────────────────────────
const GAPI_CLIENT_ID = 'SEU_CLIENT_ID_AQUI.apps.googleusercontent.com';

// Escopos: Calendar + Sheets + Drive (para criar planilha automaticamente)
const GAPI_SCOPES = [
  'https://www.googleapis.com/auth/calendar.events',
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
].join(' ');

// ID da planilha — preenchido na 1ª execução e salvo para reutilização
let SHEET_ID = (() => { try { return localStorage.getItem('comeri_sheet_id') || null; } catch(e){ return null; } })();

let tokenClient = null;

function initGoogleAuth() {
  if (typeof google === 'undefined') return;
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: GAPI_CLIENT_ID,
    scope:     GAPI_SCOPES,
    callback:  (resp) => { if (!resp.error) S.gapiToken = resp.access_token; }
  });
}

async function garantirToken() {
  if (S.gapiToken) return S.gapiToken;
  return new Promise((resolve, reject) => {
    if (!tokenClient) { reject(new Error('tokenClient não inicializado')); return; }
    tokenClient.callback = (resp) => {
      if (resp.error) reject(resp);
      else { S.gapiToken = resp.access_token; resolve(resp.access_token); }
    };
    tokenClient.requestAccessToken({ prompt: 'consent' });
  });
}

// ── CONSULTAR HORÁRIOS OCUPADOS ───────────────────────
async function buscarOcupados(dateStr) {
  const token = await garantirToken();
  const tMin  = `${dateStr}T00:00:00-03:00`;
  const tMax  = `${dateStr}T23:59:59-03:00`;
  const calId = encodeURIComponent(CONFIG.CALENDAR_ID);
  const url   = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events` +
                `?timeMin=${tMin}&timeMax=${tMax}&singleEvents=true&orderBy=startTime`;

  const res  = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  const data = await res.json();
  if (!data.items || data.items.length === 0) return [];

  const bloqueados = new Set();
  data.items.forEach(ev => {
    if (!ev.start?.dateTime) return;
    const inicio    = new Date(ev.start.dateTime);
    const inicioMin = inicio.getHours() * 60 + inicio.getMinutes();
    let duracaoMin  = CONFIG.BUFFER_MIN;
    if (ev.end?.dateTime) duracaoMin = (new Date(ev.end.dateTime) - inicio) / 60000;
    const janela = Math.max(duracaoMin, CONFIG.BUFFER_MIN);
    for (let offset = 0; offset < janela; offset += CONFIG.SLOT_MIN) {
      const totalMin = inicioMin + offset;
      const hh = String(Math.floor(totalMin / 60)).padStart(2,'0');
      const mm = String(totalMin % 60).padStart(2,'0');
      bloqueados.add(`${hh}:${mm}`);
    }
  });
  return Array.from(bloqueados);
}

// ── CRIAR EVENTO NO GOOGLE CALENDAR ──────────────────
async function criarEventoCalendar() {
  const token  = await garantirToken();
  const totais = calcularTotais(S.brand, S.modelo, S.km);
  const tmoMin = Math.round(totais.tmo * 60);
  const [hh,mm]= S.hora.split(':').map(Number);
  const totalMin = hh * 60 + mm + tmoMin;
  const endHH  = String(Math.floor(totalMin / 60)).padStart(2,'0');
  const endMM  = String(totalMin % 60).padStart(2,'0');
  const brand  = capitalize(S.brand);
  const labelModelo = getModeloLabel(S.brand, S.modelo);

  const pecasStr = totais.pecas.map(p => `${p.nome} (${p.qtd}x) — R$ ${fmtBRL(p.qtd * p.valor)}`).join('\n');

  const event = {
    summary: `[${CONFIG.UNIDADES[S.unidade].label}] Revisão ${brand} ${labelModelo} — ${S.cliente.nome}`,
    description: [
      `Unidade: ${CONFIG.UNIDADES[S.unidade].label} — ${CONFIG.UNIDADES[S.unidade].end}`,
      `Cliente: ${S.cliente.nome}`,
      `Telefone: ${S.cliente.tel}`,
      `Placa: ${S.cliente.placa}`,
      `Modelo: ${brand} ${labelModelo}`,
      `Revisão: ${fmtKm(S.km)}`,
      `Odômetro: ${S.cliente.odo ? Number(S.cliente.odo).toLocaleString('pt-BR') + ' km' : 'não informado'}`,
      ``,
      `PEÇAS:`,
      pecasStr,
      ``,
      `Total Peças: R$ ${fmtBRL(totais.totalPecas)}`,
      `Mão de Obra: ${totais.tmo.toFixed(1).replace('.',',')} h × R$ ${totais.hora}/h = R$ ${fmtBRL(totais.totalMO)}`,
      `TOTAL: R$ ${fmtBRL(totais.total)}`,
      S.cliente.obs ? `\nObs: ${S.cliente.obs}` : ''
    ].filter(l => l !== undefined).join('\n'),
    start: { dateTime: `${S.data}T${S.hora}:00`, timeZone: 'America/Sao_Paulo' },
    end:   { dateTime: `${S.data}T${endHH}:${endMM}:00`, timeZone: 'America/Sao_Paulo' },
    colorId: '11',
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 1440 },
        { method: 'popup', minutes: 60  },
      ]
    }
  };

  const calId = encodeURIComponent(CONFIG.CALENDAR_ID);
  const res   = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${calId}/events`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(event)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || 'Erro ao criar evento');
  return data.id;
}

// ── GOOGLE SHEETS ────────────────────────────────────

// Nome da planilha criada automaticamente no Drive
const SHEET_NAME = 'Agendamentos COMERI MOTOS';

// Cabeçalho das colunas
const SHEET_HEADERS = [
  'ID', 'Data Agendamento', 'Unidade', 'Data Revisão', 'Horário',
  'Nome Cliente', 'Telefone', 'Placa', 'Odômetro (km)', 'Observações',
  'Marca', 'Modelo', 'Revisão (km)', 'TMO (h)', 'Valor Hora MO',
  'Total Peças (R$)', 'Total MO (R$)', 'Total (R$)',
  'Peças', 'ID Evento Calendar', 'Status'
];

// Abas da planilha: uma por unidade + uma consolidada
const SHEET_TABS = ['Todos', 'Guarujá', 'Santos', 'São Vicente', 'Praia Grande', 'Peruíbe'];

// Mapa id→nome da aba
const UNIDADE_TAB = {
  guaruja:     'Guarujá',
  santos:      'Santos',
  sao_vicente: 'São Vicente',
  praia_grande:'Praia Grande',
  peruibe:     'Peruíbe',
};

async function criarPlanilha(token) {
  // Cores por unidade (para cabeçalhos das abas)
  const coresAbas = {
    'Todos':       { red:0.886, green:0.294, blue:0.290 }, // vermelho
    'Guarujá':     { red:0.886, green:0.294, blue:0.290 },
    'Santos':      { red:0.145, green:0.388, blue:0.922 }, // azul
    'São Vicente': { red:0.486, green:0.227, blue:0.929 }, // roxo
    'Praia Grande':{ red:0.020, green:0.588, blue:0.412 }, // verde
    'Peruíbe':     { red:0.851, green:0.467, blue:0.027 }, // laranja
  };

  // 1. Cria a planilha com todas as abas de uma vez
  const sheetsBody = SHEET_TABS.map((title, i) => ({
    properties: { title, sheetId: i, tabColor: coresAbas[title] || {} }
  }));

  const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ properties: { title: SHEET_NAME }, sheets: sheetsBody })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || 'Erro ao criar planilha');
  const id = data.spreadsheetId;

  // 2. Grava cabeçalho em todas as abas + formata em lote
  const colCount = SHEET_HEADERS.length;
  const valueRequests = SHEET_TABS.map(tab => ({
    range: `${tab}!A1`,
    values: [SHEET_HEADERS]
  }));

  await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values:batchUpdate`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ valueInputOption: 'USER_ENTERED', data: valueRequests })
    }
  );

  // 3. Formata cabeçalho (negrito + cor) em todas as abas
  const formatRequests = SHEET_TABS.map((tab, i) => ({
    repeatCell: {
      range: { sheetId: i, startRowIndex: 0, endRowIndex: 1, startColumnIndex: 0, endColumnIndex: colCount },
      cell: {
        userEnteredFormat: {
          backgroundColor: coresAbas[tab],
          textFormat: { bold: true, foregroundColor: { red:1, green:1, blue:1 } }
        }
      },
      fields: 'userEnteredFormat(backgroundColor,textFormat)'
    }
  }));

  await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${id}:batchUpdate`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ requests: formatRequests })
  });

  try { localStorage.setItem('comeri_sheet_id', id); } catch(e) {}
  SHEET_ID = id;
  return id;
}

async function garantirPlanilha(token) {
  if (SHEET_ID) {
    // Verifica se ainda existe
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?fields=spreadsheetId`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (res.ok) return SHEET_ID;
    // Se não existe mais, zera e recria
    SHEET_ID = null;
    try { localStorage.removeItem('comeri_sheet_id'); } catch(e) {}
  }
  return await criarPlanilha(token);
}

async function gravarNaPlanilha(token, calEventId) {
  const id     = await garantirPlanilha(token);
  const totais = calcularTotais(S.brand, S.modelo, S.km);
  const brand  = capitalize(S.brand);
  const label  = getModeloLabel(S.brand, S.modelo);
  const agora  = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const idLinha = `AG-${Date.now()}`;
  const pecasStr = totais.pecas.map(p => `${p.nome} (${p.qtd}x)`).join(', ');
  const nomeUnidade = CONFIG.UNIDADES[S.unidade].label;
  const tabUnidade  = UNIDADE_TAB[S.unidade];

  const linha = [
    idLinha,                                          // ID
    agora,                                            // Data do agendamento
    nomeUnidade,                                      // Unidade
    fmtDate(S.data),                                  // Data da revisão
    S.hora,                                           // Horário
    S.cliente.nome,                                   // Nome cliente
    S.cliente.tel,                                    // Telefone
    S.cliente.placa,                                  // Placa
    S.cliente.odo || '',                              // Odômetro
    S.cliente.obs || '',                              // Observações
    brand,                                            // Marca
    label,                                            // Modelo
    fmtKm(S.km),                                      // Revisão km
    totais.tmo.toFixed(1).replace('.',','),           // TMO horas
    totais.hora,                                      // Valor hora MO
    totais.totalPecas.toFixed(2).replace('.',','),    // Total peças
    totais.totalMO.toFixed(2).replace('.',','),       // Total MO
    totais.total.toFixed(2).replace('.',','),         // Total geral
    pecasStr,                                         // Peças
    calEventId || '',                                 // ID evento Calendar
    'Agendado',                                       // Status
  ];

  // Grava nas duas abas em paralelo: aba da unidade + aba Todos
  const appendUrl = (tab) =>
    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${encodeURIComponent(tab)}!A:U:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const [r1, r2] = await Promise.all([
    fetch(appendUrl('Todos'), {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: [linha] })
    }),
    fetch(appendUrl(tabUnidade), {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: [linha] })
    })
  ]);

  if (!r1.ok) { const e = await r1.json(); throw new Error(e.error?.message || 'Erro aba Todos'); }
  if (!r2.ok) { const e = await r2.json(); throw new Error(e.error?.message || `Erro aba ${tabUnidade}`); }

  // Retorna URL abrindo direto na aba da unidade
  const sheetIndex = SHEET_TABS.indexOf(tabUnidade);
  return `https://docs.google.com/spreadsheets/d/${id}/edit#gid=${sheetIndex}`;
}

// ── WHATSAPP (mensagem para a COMERI) ────────────────
// A mensagem é enviada para o número da concessionária
// com o resumo completo do agendamento feito pelo cliente.
function gerarMsgWA() {
  const brand  = capitalize(S.brand);
  const label  = getModeloLabel(S.brand, S.modelo);
  const totais = calcularTotais(S.brand, S.modelo, S.km);
  const pecasStr = totais.pecas.map(p => `  • ${p.nome} (${p.qtd}x) — R$ ${fmtBRL(p.qtd * p.valor)}`).join('\n');
  const horaLabel = S.brand === 'suzuki'
    ? `R$ ${totais.hora}/h (${DADOS.suzuki.tmoHora[S.modelo]}cc)`
    : `R$ ${totais.hora}/h`;

  const linhas = [
    `🔔 *NOVO AGENDAMENTO — COMERI MOTOS*`,
    `📍 *Unidade: ${CONFIG.UNIDADES[S.unidade].label}* — ${CONFIG.UNIDADES[S.unidade].end}`,
    ``,
    `📋 *DADOS DO CLIENTE*`,
    `👤 Nome: *${S.cliente.nome}*`,
    `📱 Telefone: ${S.cliente.tel}`,
    `🔖 Placa: *${S.cliente.placa}*`,
    S.cliente.odo ? `🔢 Odômetro: ${Number(S.cliente.odo).toLocaleString('pt-BR')} km` : null,
    S.cliente.obs ? `📝 Obs: ${S.cliente.obs}` : null,
    ``,
    `🏍️ *VEÍCULO*`,
    `Marca: ${brand} | Modelo: ${label}`,
    ``,
    `🔧 *REVISÃO — ${fmtKm(S.km)}*`,
    `📅 Data: *${fmtDate(S.data)}* às *${S.hora}*`,
    `⏱ TMO: ${totais.tmo.toFixed(1).replace('.',',')} h (${horaLabel})`,
    ``,
    `📦 *PEÇAS:*`,
    pecasStr,
    ``,
    `💰 Peças: R$ ${fmtBRL(totais.totalPecas)}`,
    `🔩 Mão de obra: R$ ${fmtBRL(totais.totalMO)}`,
    `💵 *TOTAL: R$ ${fmtBRL(totais.total)}*`,
    ``,
    S.sheetUrl ? `📊 Planilha: ${S.sheetUrl}` : null,
    S.calEventId ? `📅 Calendar: evento ID ${S.calEventId}` : null,
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
    const totais = calcularTotais(S.brand, S.modelo, km);
    const b = document.createElement('div');
    b.className = 'km-btn';
    b.setAttribute('role','button');
    b.setAttribute('tabindex','0');
    b.innerHTML = `
      <div class="km-val">${fmtKm(km)}</div>
      <div class="km-label">${tmo > 0 ? tmo.toFixed(1).replace('.',',') + ' h' : 'Inspeção'}</div>
      <div class="km-preco">R$ ${fmtBRL(totais.total)}</div>
    `;
    const select = () => {
      S.km = km;
      document.querySelectorAll('.km-btn').forEach(x => x.classList.remove('selected'));
      b.classList.add('selected');
      document.getElementById('duration-display').value =
        tmo > 0 ? tmo.toFixed(1).replace('.',',') + ' h' : '< 30 min';
    };
    b.onclick = select;
    b.onkeydown = e => { if (e.key==='Enter'||e.key===' ') select(); };
    g.appendChild(b);
  });
}

// ── UI: CALENDÁRIO ────────────────────────────────────
async function onDateChange(val) {
  S.data = val;
  S.hora = null;
  const status = document.getElementById('cal-status');
  if (!val) { buildTimeGrid([]); return; }

  status.innerHTML = '<div class="spinner"></div> Consultando agenda...';
  document.querySelectorAll('.time-btn').forEach(b => {
    b.classList.add('loading-slot');
    b.classList.remove('selected');
  });

  try {
    const ocupados = await buscarOcupados(val);
    buildTimeGrid(ocupados);
    const horariosGrid = new Set(CONFIG.HORARIOS);
    const nRevisoes = ocupados.filter(h => horariosGrid.has(h)).length;
    status.innerHTML = ocupados.length > 0
      ? `⚠️ ${nRevisoes} revisão(ões) agendada(s) — ${ocupados.length} slot(s) bloqueado(s) incluindo intervalo de 1h30`
      : `✅ Agenda livre — todos os horários disponíveis`;
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
  const totais = calcularTotais(S.brand, S.modelo, S.km);
  const brand  = capitalize(S.brand);
  const label  = getModeloLabel(S.brand, S.modelo);
  const horaLabel = S.brand === 'suzuki'
    ? `R$ ${totais.hora}/h (cilindrada ${DADOS.suzuki.tmoHora[S.modelo]}cc)`
    : `R$ ${totais.hora}/h`;

  const pecasRows = totais.pecas.map(p =>
    `<div class="summary-row"><span class="lbl">${p.nome} ×${p.qtd}</span><span class="val">R$ ${fmtBRL(p.qtd * p.valor)}</span></div>`
  ).join('');

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
      <div class="summary-section-title">Peças incluídas</div>
      ${pecasRows}
      <div class="summary-row" style="margin-top:6px;border-top:.5px solid var(--border);padding-top:6px">
        <span class="lbl">Subtotal peças</span><span class="val">R$ ${fmtBRL(totais.totalPecas)}</span>
      </div>
    </div>
    <div class="summary-divider"></div>
    <div class="summary-section">
      <div class="summary-section-title">Mão de obra</div>
      <div class="summary-row"><span class="lbl">Tempo TMO</span><span class="val">${totais.tmo.toFixed(1).replace('.',',')} h</span></div>
      <div class="summary-row"><span class="lbl">Valor hora</span><span class="val">${horaLabel}</span></div>
      <div class="summary-row"><span class="lbl">Subtotal MO</span><span class="val">R$ ${fmtBRL(totais.totalMO)}</span></div>
    </div>
    <div class="total-row"><span>Total estimado</span><span class="total-val">R$ ${fmtBRL(totais.total)}</span></div>
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
  nav.style.display = 'none';
  overlay.hidden    = false;

  const step = document.getElementById('confirming-step');

  // 1. Google Calendar
  try {
    if (step) step.textContent = 'Criando evento no Google Calendar...';
    S.calEventId = await criarEventoCalendar();
  } catch(e) {
    console.warn('Calendar:', e.message);
    S.calEventId = null;
  }

  // 2. Google Sheets
  S.sheetUrl = null;
  try {
    if (step) step.textContent = 'Gravando na planilha...';
    const token = await garantirToken();
    S.sheetUrl = await gravarNaPlanilha(token, S.calEventId);
  } catch(e) {
    console.warn('Sheets:', e.message);
    S.sheetUrl = null;
  }

  overlay.hidden    = true;
  nav.style.display = 'flex';
  mostrarSucesso();
}

function mostrarSucesso() {
  document.getElementById('panel5').classList.remove('active');
  document.getElementById('panel6').classList.add('active');
  markDone(5);

  document.getElementById('success-sub').textContent =
    `${S.cliente.nome}, agendamento para ${fmtDate(S.data)} às ${S.hora} confirmado.`;
  buildSummary(document.getElementById('success-summary'));

  // Status das integrações
  const calInfo = document.getElementById('cal-event-info');
  const lines = [];

  if (S.calEventId) {
    lines.push(`📅 <strong>Google Calendar:</strong> evento criado <small style="color:var(--gray-mid)">(ID: ${S.calEventId})</small>`);
  } else {
    lines.push(`⚠️ <strong>Google Calendar:</strong> não foi possível criar o evento automaticamente`);
  }

  if (S.sheetUrl) {
    lines.push(`📊 <strong>Planilha:</strong> <a href="${S.sheetUrl}" target="_blank" style="color:var(--green)">Abrir planilha de agendamentos ↗</a>`);
  } else {
    lines.push(`⚠️ <strong>Planilha:</strong> não foi possível gravar. Adicione manualmente.`);
  }

  calInfo.className = (S.calEventId && S.sheetUrl) ? 'cal-event-info' : 'cal-event-info error';
  calInfo.innerHTML = lines.join('<br>');

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
    inp.min   = tom.toISOString().split('T')[0];
    inp.value = ''; S.data = null; S.hora = null;
    document.getElementById('cal-status').innerHTML = '';
    buildTimeGrid([]);
    const tmo = getTmo(S.brand, S.modelo, S.km);
    document.getElementById('duration-display').value =
      tmo > 0 ? tmo.toFixed(1).replace('.',',') + ' h' : '< 30 min';
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
  initGoogleAuth();

  // Evento model-select
  document.getElementById('model-select').addEventListener('change', function() {
    S.modelo = this.value || null;
  });
});
