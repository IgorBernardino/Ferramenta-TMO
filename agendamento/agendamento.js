const DADOS = {

  // ── HAOJUE ────────────────────────────────────────────
  haojue: {
    // Linha atual primeiro (ordem do catálogo); fora de linha no fim — ainda fazem revisão.
    modelos:  ['MASTER150','DL160','NK160','DK160','DR160','ADX125','NK150','CHOPPER150','LINDY125'],
    labels:   ['Master Ride 150','DL 160','NK 160','DK 160','DR 160','Burgman ADX 125','NK 150 (fora de linha)','Chopper Road 150 (fora de linha)','Lindy 125 (fora de linha)'],
    TMO_HORA: 110,
    tmoHJ: {1000:0,3000:0.5,6000:0.5,9000:0.5,12000:3,15000:0.5,18000:1,21000:0.5,24000:2.5,27000:0.5,30000:0.5,33000:0.5,36000:2.5,39000:0.5,42000:0.5,45000:0.5,48000:2.5,51000:0.5,54000:0.5,57000:0.5},
    pecasCiclo: {
      simples:  [{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      arruela:  [{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Arruela de Dreno',qtd:1,valor:10},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      completo: [{nome:'Filtro de Ar',qtd:1,valor:85},{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Junta Capa Óleo',qtd:1,valor:12.5},{nome:'Junta Tampa Direita',qtd:1,valor:85},{nome:'Junta Escapamento',qtd:1,valor:21},{nome:'Vela de Ignição',qtd:1,valor:90},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
    },
    pecasLindy: {
      1000: [{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      3000: [{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      6000: [{nome:'Filtro de Ar',qtd:1,valor:75},{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      9000: [{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      12000:[{nome:'Filtro de Ar',qtd:1,valor:75},{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Junta Tampa Válvula',qtd:1,valor:56},{nome:'Vela de Ignição',qtd:1,valor:41}],
      15000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      18000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Correia CVT',qtd:1,valor:245}],
      21000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      24000:[{nome:'Filtro de Ar',qtd:1,valor:75},{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Junta Tampa Válvula',qtd:1,valor:56},{nome:'Vela de Ignição',qtd:1,valor:41}],
      27000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      30000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Correia CVT',qtd:1,valor:245}],
      33000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21}],
      36000:[{nome:'Filtro de Ar',qtd:1,valor:75},{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:43},{nome:'Junta Tampa Filtro',qtd:1,valor:21},{nome:'Junta Tampa Válvula',qtd:1,valor:56},{nome:'Vela de Ignição',qtd:1,valor:41},{nome:'Correia CVT',qtd:1,valor:245}],
    },
    tmoLindy: {1000:0,3000:0.5,6000:1.5,9000:0.5,12000:2,15000:0.5,18000:3,21000:0.5,24000:2,27000:0.5,30000:2,33000:0.5,36000:3,39000:0.5,42000:2,45000:0.5,48000:3,51000:0.5,54000:3,57000:0.5},
  },

  // ── ZONTES ────────────────────────────────────────────
  zontes: {
    modelos: ['V350','T350','GK350','S350','R350','E350','E350_ANTIGA','ZT368G'],
    labels:  ['V 350','T 350 / T 350 X','GK 350','S 350','R 350','350 E (a partir de 01/02/2026)','350 E (antiga — até 31/01/2026)','368G'],
    TMO_HORA: 350,
    pecas350: {
      1000: [{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      3000: [{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      6000: [{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      9000: [{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      12000:[{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      15000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      18000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      21000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      24000:[{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      27000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      30000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      33000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      36000:[{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      39000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      42000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      45000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      48000:[{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      51000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      54000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
      57000:[{nome:'Filtro de Ar',qtd:1,valor:106},{nome:'Vela de Ignição',qtd:1,valor:108},{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:130},{nome:'Líquido de Arrefecimento',qtd:1,valor:30},{nome:'Lubrificante Corrente',qtd:1,valor:25},{nome:'Desingripante',qtd:1,valor:20}],
    },
    tmo350: {1000:0,3000:0.3,6000:0.6,9000:0.3,12000:1.5,15000:0.3,18000:1.0,21000:0.3,24000:1.5,27000:0.3,30000:0.6,33000:0.3,36000:1.5,39000:0.3,42000:0.6,45000:0.3,48000:1.5,51000:0.3,54000:1.0,57000:1.5},
    /* Espelha revisaozontes.js -> dadosRevisao.E350. O 1.000 km sai R$ 260
       (oleo + filtro), confirmado pela oficina: antes somava filtro do CVT e
       oleo de caixa, que nao entram nessa revisao. */
    pecasE350: {
      1000: [{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:120}],
      4000: [{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do CVT (esponja)',qtd:1,valor:84}],
      8000: [{nome:'Filtro de Ar',qtd:1,valor:180},{nome:'Filtro do CVT (esponja)',qtd:1,valor:84},{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:120}],
      12000:[{nome:'Óleo de Motor',qtd:2,valor:90}],
      16000:[{nome:'Filtro de Ar',qtd:1,valor:180},{nome:'Vela de Ignição',qtd:1,valor:165},{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Líquido de Arrefecimento',qtd:1,valor:30}],
      20000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Correia CVT',qtd:1,valor:1150}],
      24000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Fluido de Freio',qtd:1,valor:22}],
    },
    tmoE350: {1000:0.0,4000:0.5,8000:0.8,12000:0.3,16000:1.0,20000:0.3,24000:2.0},
    /* Preco fechado por revisao (mesma tabela de revisaozontes.js). */
    pacoteE350: {1000:260,4000:660,8000:980,12000:800,16000:980,20000:2300,24000:1200},

    // 350E ANTIGA — ciclo de 3.000 km (tabela revisão antiga)
    pecasE350Antiga: {
      1000: [{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:120}],
      3000: [{nome:'Óleo de Motor',qtd:2,valor:90}],
      6000: [{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:120}],
      9000: [{nome:'Óleo de Motor',qtd:2,valor:90}],
      12000:[{nome:'Filtro de Ar',qtd:1,valor:180},{nome:'Vela de Ignição',qtd:1,valor:165},{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Líquido de Arrefecimento',qtd:1,valor:30}],
      15000:[{nome:'Óleo de Motor',qtd:2,valor:90}],
      18000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Correia CVT',qtd:1,valor:1150}],
      21000:[{nome:'Óleo de Motor',qtd:2,valor:90}],
      24000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:120}],
      27000:[{nome:'Óleo de Motor',qtd:2,valor:90}],
      30000:[{nome:'Filtro de Ar',qtd:1,valor:180},{nome:'Vela de Ignição',qtd:1,valor:165},{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Líquido de Arrefecimento',qtd:1,valor:30}],
      33000:[{nome:'Óleo de Motor',qtd:2,valor:90}],
      36000:[{nome:'Óleo de Motor',qtd:2,valor:90},{nome:'Filtro do Óleo',qtd:1,valor:120},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Correia CVT',qtd:1,valor:1150}],
    },
    tmoE350Antiga: {
      1000:0,3000:0.3,6000:0.6,9000:0.3,12000:1.5,15000:0.3,18000:2.0,
      21000:0.3,24000:0.6,27000:0.3,30000:1.5,33000:0.3,36000:2.0,
    },

    /* 368G — migrada da Suzuki (estava cadastrada como GSX_S800_368G).
       É uma Zontes: usa TMO_HORA da marca (R$ 350/h), não a tabela Suzuki.
       Peças e TMO espelham revisaozontes.js → dadosRevisao.ZT368G. */
    pecas368G: {
      1000: [{nome:'Filtro do Óleo (ZT368-G)',qtd:1,valor:160},{nome:'Óleo de Motor (SAE 10W-40/5W-40)',qtd:2,valor:90},{nome:'Óleo Caixa de Velocidades (200mL)',qtd:1,valor:45}],
      6000: [{nome:'Óleo de Motor (SAE 10W-40/5W-40)',qtd:2,valor:90},{nome:'Filtro de Ar (elemento)',qtd:1,valor:195}],
      12000:[{nome:'Filtro do Óleo (ZT368-G)',qtd:1,valor:160},{nome:'Vela de Ignição',qtd:1,valor:165},{nome:'Óleo de Motor (SAE 10W-40/5W-40)',qtd:2,valor:90},{nome:'Óleo Caixa de Velocidades (200mL)',qtd:1,valor:45},{nome:'Filtro Esponja Motor',qtd:1,valor:84}],
      18000:[{nome:'Óleo de Motor (SAE 10W-40/5W-40)',qtd:2,valor:90},{nome:'Filtro de Ar (elemento)',qtd:1,valor:195},{nome:'Correia de Transmissão CVT',qtd:1,valor:1150}],
      24000:[{nome:'Filtro do Óleo (ZT368-G)',qtd:1,valor:160},{nome:'Vela de Ignição',qtd:1,valor:165},{nome:'Óleo de Motor (SAE 10W-40/5W-40)',qtd:2,valor:90},{nome:'Óleo Caixa de Velocidades (200mL)',qtd:1,valor:45},{nome:'Fluido de Freio',qtd:1,valor:22},{nome:'Filtro Esponja Motor',qtd:1,valor:84}],
    },
    tmo368G: {1000:0.0,6000:0.8,12000:1.2,18000:2.0,24000:1.5},
  },

  // ── SUZUKI ────────────────────────────────────────────
  suzuki: {
    // Linha atual primeiro (ordem do catálogo); fora de linha no fim — ainda fazem revisão.
    modelos: ['HAYABUSA','GSXS1000GX','GSXS1000GT','GSXS1000','GSX800','VSTROM1050XT','VSTROM1000','VSTROM800','VSTROM650','BURGMAN_I','GSXR1000','GSX750','SV650A'],
    labels:  ['Hayabusa','GSX-S1000 GX','GSX-S1000 GT','GSX-S1000','GSX-8R / GSX-8S','V-Strom 1050 XT','V-Strom 1050','V-Strom 800 / 800 DE','V-Strom 650 XT','Burgman i (fora de linha)','GSX-R1000 (fora de linha)','GSX 750 (fora de linha)','SV 650A (fora de linha)'],
    tmoHora: {BURGMAN_I:100,GSX800:800,HAYABUSA:1300,GSXR1000:1000,GSX750:750,GSXS1000:1000,GSXS1000GX:1000,GSXS1000GT:1000,SV650A:650,VSTROM650:650,VSTROM800:800,VSTROM1000:1000,VSTROM1050XT:1050},
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
      BURGMAN_I:   {1000:[{nome:'Óleo do Motor',qtd:1,valor:90}],6000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:50}],12000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:50}],18000:[{nome:'Filtro de Ar',qtd:1,valor:115},{nome:'Vela de Ignição',qtd:1,valor:150},{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:50}],24000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:50}],30000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:50}],36000:[{nome:'Filtro de Ar',qtd:1,valor:115},{nome:'Vela de Ignição',qtd:1,valor:150},{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:50}],42000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:50}],48000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:50}],54000:[{nome:'Filtro de Ar',qtd:1,valor:115},{nome:'Vela de Ignição',qtd:1,valor:150},{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:50}],60000:[{nome:'Óleo do Motor',qtd:1,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:50}]},
      GSX800:      {1000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:90}],12000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],18000:[{nome:'Filtro de Ar',qtd:1,valor:320},{nome:'Óleo do Motor',qtd:4,valor:90}],24000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:4,valor:90}],36000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],42000:[{nome:'Filtro de Ar',qtd:1,valor:320},{nome:'Óleo do Motor',qtd:4,valor:90}],48000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:4,valor:90}],60000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      HAYABUSA:    {1000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:90}],12000:[{nome:'Vela de Ignição',qtd:4,valor:242},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:4,valor:90}],18000:[{nome:'Filtro de Ar',qtd:1,valor:480},{nome:'Óleo do Motor',qtd:4,valor:90}],24000:[{nome:'Vela de Ignição',qtd:4,valor:242},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:4,valor:90}],30000:[{nome:'Óleo do Motor',qtd:4,valor:90}],36000:[{nome:'Vela de Ignição',qtd:4,valor:242},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:4,valor:90}],42000:[{nome:'Filtro de Ar',qtd:1,valor:480},{nome:'Óleo do Motor',qtd:4,valor:90}],48000:[{nome:'Vela de Ignição',qtd:4,valor:242},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:4,valor:90}],54000:[{nome:'Óleo do Motor',qtd:4,valor:90}],60000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      GSXR1000:    {1000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:90}],12000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:185}],18000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Ar',qtd:1,valor:435}],24000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:185}],30000:[{nome:'Óleo do Motor',qtd:4,valor:90}],36000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:185}],42000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Ar',qtd:1,valor:435}],48000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:185}],54000:[{nome:'Óleo do Motor',qtd:4,valor:90}],60000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      GSX750:      {1000:[{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:3,valor:90}],12000:[{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:240}],18000:[{nome:'Filtro de Ar',qtd:1,valor:370},{nome:'Óleo do Motor',qtd:3,valor:90}],24000:[{nome:'Vela de Ignição',qtd:4,valor:240},{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:3,valor:90}],36000:[{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Vela de Ignição',qtd:4,valor:240}],42000:[{nome:'Filtro de Ar',qtd:1,valor:370},{nome:'Óleo do Motor',qtd:3,valor:90}],48000:[{nome:'Vela de Ignição',qtd:4,valor:240},{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:3,valor:90}],60000:[{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      GSXS1000:    {1000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:90}],12000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],18000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:90}],24000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:4,valor:90}],36000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],42000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:90}],48000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:4,valor:90}],60000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      SV650A:      {1000:[{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:3,valor:90}],12000:[{nome:'Vela de Ignição',qtd:2,valor:160},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:3,valor:90}],18000:[{nome:'Filtro de Ar',qtd:1,valor:370},{nome:'Óleo do Motor',qtd:3,valor:90}],24000:[{nome:'Vela de Ignição',qtd:2,valor:160},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:3,valor:90}],30000:[{nome:'Óleo do Motor',qtd:3,valor:90}],36000:[{nome:'Vela de Ignição',qtd:2,valor:160},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:3,valor:90}],42000:[{nome:'Filtro de Ar',qtd:1,valor:370},{nome:'Óleo do Motor',qtd:3,valor:90}],48000:[{nome:'Vela de Ignição',qtd:2,valor:160},{nome:'Filtro de Óleo',qtd:1,valor:185},{nome:'Óleo do Motor',qtd:3,valor:90}],54000:[{nome:'Óleo do Motor',qtd:3,valor:90}],60000:[{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      VSTROM650:   {1000:[{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:3,valor:90}],12000:[{nome:'Vela de Ignição',qtd:2,valor:135},{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],18000:[{nome:'Filtro de Ar',qtd:1,valor:480},{nome:'Óleo do Motor',qtd:3,valor:90}],24000:[{nome:'Vela de Ignição',qtd:2,valor:135},{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:3,valor:90}],36000:[{nome:'Vela de Ignição',qtd:2,valor:135},{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],42000:[{nome:'Filtro de Ar',qtd:1,valor:480},{nome:'Óleo do Motor',qtd:3,valor:90}],48000:[{nome:'Vela de Ignição',qtd:2,valor:135},{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:3,valor:90}],60000:[{nome:'Óleo do Motor',qtd:3,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      VSTROM800:   {1000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:90}],12000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],18000:[{nome:'Filtro de Ar',qtd:1,valor:320},{nome:'Óleo do Motor',qtd:4,valor:90}],24000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:4,valor:90}],36000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],42000:[{nome:'Filtro de Ar',qtd:1,valor:320},{nome:'Óleo do Motor',qtd:4,valor:90}],48000:[{nome:'Vela de Ignição',qtd:2,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:4,valor:90}],60000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      VSTROM1000:  {1000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:90}],12000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],18000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:90}],24000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:4,valor:90}],36000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],42000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:90}],48000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:4,valor:90}],60000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
      VSTROM1050XT:{1000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],6000:[{nome:'Óleo do Motor',qtd:4,valor:90}],12000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],18000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:90}],24000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],30000:[{nome:'Óleo do Motor',qtd:4,valor:90}],36000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],42000:[{nome:'Filtro de Ar',qtd:1,valor:430},{nome:'Óleo do Motor',qtd:4,valor:90}],48000:[{nome:'Vela de Ignição',qtd:4,valor:340},{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}],54000:[{nome:'Óleo do Motor',qtd:4,valor:90}],60000:[{nome:'Óleo do Motor',qtd:4,valor:90},{nome:'Filtro de Óleo',qtd:1,valor:185}]},
    }
  }
};

// GSX-S1000 GX e GT: mesmo motor e plano da GSX-S1000 (espelha revisaosuzuki.js).
for (const m of ['GSXS1000GX', 'GSXS1000GT']) {
  DADOS.suzuki.tmo[m]   = DADOS.suzuki.tmo.GSXS1000;
  DADOS.suzuki.pecas[m] = DADOS.suzuki.pecas.GSXS1000;
}

// Burgman ADX 125 — espelha revisaohaojue.js (tabela Haojue de 01/09/2026).
// Ciclo de 18 mil km repetido até 57.000; TMO da Lindy 125.
{
  const p = {
    oleo:   {nome:'Óleo do Motor',qtd:1,valor:90},
    arruela:{nome:'Arruela de Dreno',qtd:1,valor:10},
    transm: {nome:'Óleo de Transmissão',qtd:1,valor:100},
    ar:     {nome:'Filtro de Ar',qtd:1,valor:90},
    vela:   {nome:'Vela de Ignição',qtd:1,valor:150},
    freio:  {nome:'Fluido de Freio',qtd:1,valor:22},
  };
  const porPos = {
    1000:['oleo','transm'], 3000:['oleo'], 9000:['oleo'], 15000:['oleo'],
    6000:['oleo','arruela','transm'], 18000:['oleo','arruela','transm'],
    12000:['ar','vela','oleo','arruela','transm','freio'],
  };
  const pos = km => km === 1000 ? 1000 : (((km / 1000 - 3) % 18) + 3) * 1000;
  DADOS.haojue.pecasADX = {};
  for (let km = 1000; km <= 57000; km += (km === 1000 ? 2000 : 3000)) {
    DADOS.haojue.pecasADX[km] = porPos[pos(km)].map(k => ({ ...p[k] }));
  }
}




// ── FUNÇÕES DE ACESSO AOS DADOS ───────────────────────

function getKmsDisponiveis(brand, modelo) {
  if (brand === 'haojue') {
    if (modelo === 'LINDY125') return Object.keys(DADOS.haojue.pecasLindy).filter(k=>!isNaN(k)).map(Number).sort((a,b)=>a-b);
    if (modelo === 'ADX125')   return Object.keys(DADOS.haojue.pecasADX).map(Number).sort((a,b)=>a-b);
    return [1000,3000,6000,9000,12000,15000,18000,21000,24000,27000,30000,33000,36000,39000,42000,45000,48000,51000,54000,57000];
  }
  if (brand === 'zontes') {
    if (modelo === 'E350') return Object.keys(DADOS.zontes.pecasE350).filter(k=>!isNaN(k)).map(Number).sort((a,b)=>a-b);
    if (modelo === 'E350_ANTIGA') return Object.keys(DADOS.zontes.pecasE350Antiga).filter(k=>!isNaN(k)).map(Number).sort((a,b)=>a-b);
    if (modelo === 'ZT368G') return Object.keys(DADOS.zontes.pecas368G).filter(k=>!isNaN(k)).map(Number).sort((a,b)=>a-b);
    return Object.keys(DADOS.zontes.pecas350).filter(k=>!isNaN(k)).map(Number).sort((a,b)=>a-b);
  }
  if (brand === 'suzuki') {
    return Object.keys(DADOS.suzuki.pecas[modelo] || {}).filter(k=>!isNaN(k)).map(Number).sort((a,b)=>a-b);
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
  if (brand === 'zontes' && modelo === 'ZT368G') {
    const t = DADOS.zontes.tmo368G[k] || 0;
    return t >= 2 ? 3.0 : t >= 1 ? 1.5 : 1.0;
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
    if (modelo === 'LINDY125' || modelo === 'ADX125') return DADOS.haojue.tmoLindy[k] || 0;
    return DADOS.haojue.tmoHJ[k] || 0;
  }
  if (brand === 'zontes') {
    if (modelo === 'E350') return DADOS.zontes.tmoE350[k] || 0;
    if (modelo === 'E350_ANTIGA') return DADOS.zontes.tmoE350Antiga[k] || 0;
    if (modelo === 'ZT368G') return DADOS.zontes.tmo368G[k] || 0;
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
  // Scooters/CVT: sem corrente de transmissão e sem cabo de embreagem
  const ehCVT = (brand === 'zontes' && ['E350','E350_ANTIGA','ZT368G'].includes(modelo))
             || (brand === 'haojue' && ['LINDY125','ADX125'].includes(modelo))
             || (brand === 'suzuki' && modelo === 'BURGMAN_I');

  // Checklist base — revisões leves (1k a 9k, e 15k,18k,21k...)
  const base = [
    { op:'T', item:'Óleo do motor' },
    { op:'I', item:'Nível do fluido de freio' },
    { op:'I', item:'Desgaste das pastilhas/lonas de freio' },
    ...(ehCVT ? [] : [{ op:'IAL', item:'Cabo e alavanca de embreagem' }]),
    { op:'IAL', item:'Cabo e alavanca do acelerador' },
    { op:'I', item:'Funcionamento dos freios dianteiro e traseiro' },
    { op:'I', item:'Pneus (pressão e desgaste)' },
    ...(ehCVT ? [{ op:'I', item:'Correia CVT (estado e desgaste)' }]
              : [{ op:'IL', item:'Corrente de transmissão' }]),
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

  // E350 — adiciona correia CVT no 20k
  if (brand === 'zontes' && modelo === 'E350' && k === 20000) {
    extras.push({ op:'T', item:'Correia CVT' });
  }

  // 368G — correia CVT no 18.000 km
  if (brand === 'zontes' && modelo === 'ZT368G' && k === 18000) {
    extras.push({ op:'T', item:'Correia de transmissão CVT' });
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
    if (modelo === 'ADX125')   return (DADOS.haojue.pecasADX[k] || []).map(p=>({...p}));
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
    if (modelo === 'ZT368G') return DADOS.zontes.pecas368G[k] || [];
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

// Preco fechado por revisao, quando o modelo tiver. undefined = calcula por TMO.
function getPacote(brand, modelo, km) {
  const k = parseInt(km);
  
  // Regra existente da Zontes
  if (brand === 'zontes' && modelo === 'E350') {
    return DADOS.zontes.pacoteE350[k];
  }
  
  // NOVA REGRA: Travar revisão de 6.000 km da Suzuki em R$ 520
  if (brand === 'suzuki' && k === 6000) {
    const modelos520 = [
      'GSX800', 'HAYABUSA', 'GSXR1000', 'GSXS1000', 'GSXS1000GX', 'GSXS1000GT', 
      'VSTROM800', 'VSTROM1000', 'VSTROM1050XT',
      'SV650A', 'GSX750', 'VSTROM650'
    ];
    
    if (modelos520.includes(modelo)) {
      return 520;
    }
  }

  return undefined;
}

function calcularTotais(brand, modelo, km) {
  const pecas      = getPecas(brand, modelo, km);
  const tmo        = getTmo(brand, modelo, km);        // duração exibida (mín 1h)
  const tmoReal    = getTmoReal(brand, modelo, km);    // TMO real para custo
  const hora       = getValorHoraMO(brand, modelo);
  const totalPecas = pecas.reduce((s, p) => s + p.qtd * p.valor, 0);

  // Modelos com preco fechado por revisao: o total e o pacote e a mao de obra
  // e o que sobra depois das pecas (no 1.000 km da 350 E, a MO e cortesia).
  const pacote = getPacote(brand, modelo, km);
  if (pacote !== undefined) {
    const moPacote = Math.max(0, pacote - totalPecas);
    return { pecas, tmo, tmoReal, hora, totalPecas, totalMO: moPacote, total: pacote, pacote };
  }

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
  tipo:       'revisao',  // chave de TIPOS_ATENDIMENTO
  idAgendamento: null,    // gerado na 1ª tentativa; repetido se o cliente tentar de novo
  descricao:  '',         // o que o cliente pede (Serviços / Garantia)
  calEventId: null,
  sheetUrl:   null,
};

// ── TIPOS DE ATENDIMENTO ──────────────────────────────
// Revisão tem preço e km; Serviços e Garantia são orçados na oficina
// e o veículo fica em posse da loja pelo prazo indicado.
const TIPOS_ATENDIMENTO = {
  revisao:  { label: 'Revisão',  icone: '🔧', sub: 'Plano de manutenção por km' },
  servicos: { label: 'Serviços', icone: '🛠️', sub: 'Instalação ou verificação',
    prazo: 'Prazo médio de 72 h com o veículo na oficina para orçamento e verificações.' },
  garantia: { label: 'Garantia', icone: '🛡️', sub: 'Verificação dentro da garantia',
    prazo: 'Prazo médio de 72 h para verificação e prazo máximo de 30 dias para o atendimento em garantia.' },
};

const AVISO_VALORES = 'Os valores da revisão são aproximados, podendo sofrer alterações. ' +
  'O cliente será informado caso seja necessária a troca ou se algum item tiver atualização de preço.';
const AVISO_CERTIFICADO = 'É obrigatória a apresentação do certificado de garantia para a realização das revisões. ' +
  'A ausência deste documento impede a execução do serviço, que poderá ser reagendado assim que o certificado for apresentado.';

// Valida a etapa "Atendimento". Devolve { erro } ou { erro: null, descricao }.
function validarAtendimento({ tipo, km, descricao } = {}) {
  if (!TIPOS_ATENDIMENTO[tipo]) return { erro: 'Escolha o tipo de atendimento.' };
  if (tipo === 'revisao') {
    return km ? { erro: null, descricao: '' } : { erro: 'Selecione a quilometragem de revisão.' };
  }
  const d = String(descricao == null ? '' : descricao).trim().slice(0, 500);
  if (d.length < 5) return { erro: 'Descreva o que você precisa (ex: instalar baú, barulho na suspensão).' };
  return { erro: null, descricao: d };
}

// Avisos exibidos na etapa de confirmação, conforme o tipo.
function avisosConfirmacao(tipo) {
  if (tipo === 'revisao')  return [AVISO_VALORES, AVISO_CERTIFICADO];
  if (tipo === 'garantia') return [TIPOS_ATENDIMENTO.garantia.prazo, AVISO_CERTIFICADO];
  return TIPOS_ATENDIMENTO[tipo] ? [TIPOS_ATENDIMENTO[tipo].prazo] : [];
}

// Linha curta "o que será feito", usada no WhatsApp, planilha e telas.
function descricaoAtendimento() {
  return S.tipo === 'revisao' ? 'Revisão ' + fmtKm(S.km) : TIPOS_ATENDIMENTO[S.tipo].label;
}

// ── APPS SCRIPT BACKEND ──────────────────────────────
// A URL vive só em CONFIG.APPS_SCRIPT_URL (agendamento.html).
// Manter uma cópia aqui já causou divergência ao republicar o Web App.
const APPS_SCRIPT_URL = CONFIG.APPS_SCRIPT_URL;

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
// Não engole o erro: se devolvesse [] numa falha, todos os horários
// apareceriam livres e dois clientes poderiam marcar o mesmo horário.
// Quem chama (onDateChange) decide o que mostrar.
async function buscarOcupados(dateStr) {
  const data = await chamarBackend({
    action:  'horarios_ocupados',
    data:    dateStr,
    unidade: S.unidade,
  });
  return data.ocupados || [];
}

// ── CRIAR EVENTO + GRAVAR PLANILHA (via Apps Script) ──
// Tudo enviado em uma única chamada ao backend
async function confirmarNoBackend() {
  const revisao    = S.tipo === 'revisao';
  const totais     = revisao ? calcularTotais(S.brand, S.modelo, S.km) : null;
  const brand      = capitalize(S.brand);
  const labelModelo= getModeloLabel(S.brand, S.modelo);
  const unidadeInfo= CONFIG.UNIDADES[S.unidade];
  const pecasStr   = revisao
    ? totais.pecas.map(p => `${p.nome} (${p.qtd}x) - R$ ${fmtBRL(p.qtd * p.valor)}`).join('\n')
    : S.descricao;

  // Mesmos campos de sempre (o Apps Script e a planilha continuam funcionando);
  // em Serviços/Garantia vão sem preço, e a descrição entra também em "obs"
  // para aparecer no dashboard sem precisar mudar o Apps Script.
  const tipoLabel = TIPOS_ATENDIMENTO[S.tipo].label;
  // Mesmo id em todas as tentativas: o Apps Script não grava duas vezes.
  if (!S.idAgendamento) S.idAgendamento = 'AG-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
  const payload = {
    action:          'confirmar_agendamento',
    idAgendamento:   S.idAgendamento,
    tipoAtendimento: tipoLabel,
    descricao:       S.descricao,
    unidade:     S.unidade,
    nomeUnidade: unidadeInfo.label,
    endUnidade:  unidadeInfo.end,
    data:        S.data,
    dataFmt:     fmtDate(S.data),
    hora:        S.hora,
    marca:       brand,
    modelo:      labelModelo,
    kmLabel:     revisao ? fmtKm(S.km) : tipoLabel,
    // Serviços/Garantia: 1 h de recepção no Calendar. O carro fica até 72 h, mas
    // mandar "72" faria o Apps Script criar um evento de 3 dias e travar a agenda.
    tmo:         revisao ? totais.tmo.toFixed(1).replace('.',',') : '1',
    valorHora:   revisao ? totais.hora : '',
    totalPecas:  revisao ? fmtBRL(totais.totalPecas) : 'A orçar',
    totalMO:     revisao ? fmtBRL(totais.totalMO) : 'A orçar',
    total:       revisao ? fmtBRL(totais.total) : 'A orçar',
    pecasStr:    pecasStr,
    cliente:     revisao ? S.cliente
      : { ...S.cliente, obs: `[${tipoLabel}] ${S.descricao}` + (S.cliente.obs ? ` | ${S.cliente.obs}` : '') },
  };

  const result = await chamarBackend(payload);
  // O Apps Script responde 200 mesmo quando falha por dentro; o erro vem no JSON.
  if (result && (result.erro || result.error)) {
    // Mensagem escrita pelo Apps Script (ex.: horário ocupado) — o cliente vê o texto dela.
    throw Object.assign(new Error(result.erro || result.error), { doServidor: true });
  }
  return result;
}

// ── WHATSAPP (mensagem para a COMERI) ────────────────
function gerarMsgWA() {
  const brand       = capitalize(S.brand);
  const label       = getModeloLabel(S.brand, S.modelo);
  const unidadeInfo = CONFIG.UNIDADES[S.unidade];
  const revisao     = S.tipo === 'revisao';
  const tipo        = TIPOS_ATENDIMENTO[S.tipo];
  const tmoExib     = revisao ? getTmo(S.brand, S.modelo, S.km) : 0;
  const durLabel    = tmoExib >= 3 ? '3 horas' : tmoExib >= 1.5 ? '1h30' : '1 hora';

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
    revisao ? `🔧 Revisão: *${fmtKm(S.km)}*` : `${tipo.icone} Atendimento: *${tipo.label}*`,
    revisao ? null : `🗒️ ${S.descricao}`,
    ``,
    `📅 Data: *${fmtDate(S.data)}* às *${S.hora}*`,
    revisao ? `⏱ Duração estimada: ${durLabel}` : `⏱ ${tipo.prazo}`,
    revisao ? `` : null,
    revisao ? `💵 *Total estimado: R$ ${fmtBRL(calcularTotais(S.brand, S.modelo, S.km).total)}*` : null,
    S.cliente.obs ? `\n📝 Obs: ${S.cliente.obs}` : null,
  ].filter(l => l !== null);

  // 1. Identifica o WhatsApp da loja selecionada (ou usa o central de fallback)
  const numZap = (unidadeInfo && unidadeInfo.tel) ? unidadeInfo.tel : CONFIG.WA_NUM_PADRAO;

  // 2. Codifica o texto para o formato URL
  const textoEncoded = encodeURIComponent(linhas.join('\n'));

  // 3. Retorna a URL final apontando especificamente para a loja escolhida
  return `https://wa.me/${numZap}?text=${textoEncoded}`;
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

// ── UI: TIPO DE ATENDIMENTO ───────────────────────────
// Revisão mostra a grade de km; Serviços/Garantia pedem uma descrição
// e mostram o prazo em que o veículo fica na oficina.
function selectTipo(tipo) {
  S.tipo = tipo;
  if (tipo !== 'revisao') S.km = null;
  document.querySelectorAll('.tipo-card').forEach(c => {
    const sel = c.dataset.tipo === tipo;
    c.classList.toggle('selected', sel);
    c.setAttribute('aria-pressed', String(sel));
  });
  const revisao = tipo === 'revisao';
  document.getElementById('bloco-revisao').hidden = !revisao;
  document.getElementById('bloco-descricao').hidden = revisao;
  if (!revisao) {
    document.querySelectorAll('.km-btn').forEach(x => x.classList.remove('selected'));
    document.getElementById('prazo-atendimento').textContent = TIPOS_ATENDIMENTO[tipo].prazo;
  }
  document.getElementById('alert2').hidden = true;
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
// `aviso`: mensagem a manter visível quando a data foi trocada automaticamente
// (antes ela sumia assim que os horários carregavam).
async function onDateChange(val, aviso = '') {
  S.data = null;
  S.hora = null;
  const status = document.getElementById('cal-status');
  if (!val) { buildTimeGrid([]); return; }

  // O "min" do input só limita o calendário; digitando dá para pôr uma data passada.
  const minima = dataMinimaAgendamento(new Date());
  if (val < minima) {
    document.getElementById('appt-date').value = minima;
    return onDateChange(minima, `Datas passadas não estão disponíveis — mostrando ${fmtDate(minima)}.`);
  }

  // Valida dia útil
  if (!isDiaUtil(val)) {
    const parts = val.split('-');
    const data  = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]));
    const diaSem = data.getDay();
    const motivo = isFeriado(val) ? 'Feriado' : diaSem === 0 ? 'Domingo' : 'Sábado';
    buildTimeGrid([]);
    // Pula para próximo dia útil
    const proximo = proximoDiaUtil(val);
    document.getElementById('appt-date').value = proximo;
    S.data = proximo;
    return onDateChange(proximo, `${fmtDate(val)} é ${motivo.toLowerCase()} — mostrando o próximo dia útil, ${fmtDate(proximo)}.`);
  }

  S.data = val;

  status.innerHTML = '<div class="spinner"></div> Consultando agenda...';
  document.querySelectorAll('.time-btn').forEach(b => {
    b.classList.add('loading-slot');
    b.classList.remove('selected');
  });

  try {
    const ocupados = await buscarOcupados(val);
    // Se o cliente trocou de data enquanto esperava, esta resposta é velha.
    if (document.getElementById('appt-date').value !== val) return;
    buildTimeGrid(ocupados);
    // Mostra aviso só se agenda estiver completamente lotada
    const horariosLivres = CONFIG.HORARIOS.filter(h => !ocupados.includes(h));
    const msgs = aviso ? [aviso] : [];
    if (horariosLivres.length === 0) msgs.push('Agenda lotada para esta data. Por favor, escolha outra data.');
    status.innerHTML = msgs.map(m => `<span style="color:var(--red);font-weight:600">⚠️ ${esc(m)}</span>`).join('<br>');
  } catch(e) {
    if (document.getElementById('appt-date').value !== val) return;
    console.warn('Calendar error:', e.message);
    buildTimeGrid([]);
    const msgs = aviso ? [aviso] : [];
    msgs.push('Não conseguimos consultar a agenda agora. O horário escolhido ainda precisa ser confirmado pela loja.');
    status.innerHTML = msgs.map(m => `<span style="color:var(--red);font-weight:600">⚠️ ${esc(m)}</span>`).join('<br>');
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
  const revisao = S.tipo === 'revisao';
  if (revisao && !S.km) return;
  const tipo   = TIPOS_ATENDIMENTO[S.tipo];
  const brand  = capitalize(S.brand);
  const label  = getModeloLabel(S.brand, S.modelo);
  const tmo    = revisao ? getTmo(S.brand, S.modelo, S.km) : 0;

  const checklist = revisao ? getChecklist(S.brand, S.modelo, S.km) : [];
  const opLabel   = { T:'Trocar', I:'Inspecionar', L:'Limpar', IAL:'Insp./Ajust./Lubr.', IL:'Insp./Lubr.', A:'Ajustar' };
  const checkRows = checklist.map(c =>
    `<div class="summary-row checklist-row">
      <span class="check-op op-${c.op}">${opLabel[c.op]||c.op}</span>
      <span class="check-item">${c.item}</span>
    </div>`
  ).join('');

  // Revisão: checklist + total. Serviços/Garantia: o pedido do cliente + prazo.
  const blocoAtendimento = revisao ? `
    <div class="summary-section">
      <div class="summary-section-title">Revisão ${fmtKm(S.km)} — o que será realizado</div>
      ${checkRows}
    </div>
    <div class="summary-divider"></div>
    <div class="summary-section">
      <div class="total-row"><span>Total estimado</span><span class="total-val">R$ ${fmtBRL(calcularTotais(S.brand, S.modelo, S.km).total)}</span></div>
    </div>` : `
    <div class="summary-section">
      <div class="summary-section-title">${tipo.icone} ${tipo.label}</div>
      <div class="summary-row"><span class="lbl">Solicitação</span><span class="val" style="max-width:65%;text-align:right">${esc(S.descricao)}</span></div>
      <div class="summary-row"><span class="lbl">Valor</span><span class="val">A orçar na oficina</span></div>
    </div>`;

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
      <div class="summary-row"><span class="lbl">Placa</span><span class="val">${esc(S.cliente.placa) || '—'}</span></div>
      ${S.cliente.odo ? `<div class="summary-row"><span class="lbl">Odômetro</span><span class="val">${Number(S.cliente.odo).toLocaleString('pt-BR')} km</span></div>` : ''}
    </div>
    <div class="summary-divider"></div>
    ${blocoAtendimento}
    <div class="summary-divider"></div>
    <div class="summary-section">
      <div class="summary-section-title">Agendamento</div>
      <div class="summary-row"><span class="lbl">Data</span><span class="val">${fmtDate(S.data)}</span></div>
      <div class="summary-row"><span class="lbl">Horário</span><span class="val">${S.hora}</span></div>
    </div>
    <div class="summary-divider"></div>
    <div class="summary-section">
      <div class="summary-section-title">Cliente</div>
      <div class="summary-row"><span class="lbl">Nome</span><span class="val">${esc(S.cliente.nome)}</span></div>
      <div class="summary-row"><span class="lbl">Telefone</span><span class="val">${esc(S.cliente.tel)}</span></div>
      ${S.cliente.obs ? `<div class="summary-row"><span class="lbl">Obs</span><span class="val" style="max-width:60%;text-align:right">${esc(S.cliente.obs)}</span></div>` : ''}
    </div>
  `;

  // Avisos ao cliente, logo acima do botão "Confirmar"
  document.getElementById('avisos-confirmacao').innerHTML = avisosConfirmacao(S.tipo)
    .map(t => `<li>${esc(t)}</li>`).join('');
}

// ── FLUXO: CONFIRMAR ──────────────────────────────────
async function confirmar() {
  const nav     = document.getElementById('confirm-nav');
  const overlay = document.getElementById('confirming-overlay');
  const step    = document.getElementById('confirming-step');
  const alerta  = document.getElementById('alert5');
  nav.style.display = 'none';
  overlay.hidden    = false;
  alerta.hidden     = true;

  S.calEventId = null;
  S.sheetUrl   = null;

  try {
    if (step) step.textContent = 'Registrando agendamento...';
    const result  = await confirmarNoBackend();
    S.calEventId  = result.calEventId  || null;
    S.sheetUrl    = result.sheetUrl    || null;
  } catch(e) {
    // Antes ia para a tela de sucesso mesmo com erro: o cliente achava que
    // estava agendado e nada tinha sido gravado. Agora ele pode tentar de novo.
    console.warn('Backend error:', e.message);
    overlay.hidden    = true;
    nav.style.display = 'flex';
    alerta.textContent = e.doServidor ? e.message
      : 'Não foi possível registrar o agendamento. Verifique sua conexão e toque em “Confirmar” de novo.';
    alerta.hidden     = false;
    return;
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
  const revisao = S.tipo === 'revisao';
  const tmo     = revisao ? getTmo(S.brand, S.modelo, S.km) : 0;
  const duracao = !revisao ? 'até 72 h na oficina' : tmo > 0 ? tmo.toFixed(1).replace('.',',') + ' h' : '< 30 min';

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
      <div class="summary-row"><span class="lbl">Placa</span><span class="val">${esc(S.cliente.placa)}</span></div>
      <div class="summary-row"><span class="lbl">Atendimento</span><span class="val">${descricaoAtendimento()}</span></div>
      <div class="summary-divider"></div>
      ${revisao
        ? `<div class="total-row"><span>Total estimado</span><span class="total-val">R$ ${fmtBRL(calcularTotais(S.brand, S.modelo, S.km).total)}</span></div>`
        : `<div class="summary-row"><span class="lbl">Valor</span><span class="val">A orçar na oficina</span></div>`}
    </div>
  `;

  // Esconde info de Calendar/planilha — uso interno
  const calInfo = document.getElementById('cal-event-info');
  calInfo.style.display = 'none';

  // Botão WhatsApp → envia para a COMERI
  document.getElementById('btn-wa-final').onclick = () => {
  window.open(gerarMsgWA(), '_blank');
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
    selectTipo(S.tipo);
    document.getElementById('duration-display').value = '';
  }
  // Step 2 → Atendimento (Revisão com km, ou Serviços/Garantia com descrição)
  if (from === 2) {
    const r = validarAtendimento({ tipo: S.tipo, km: S.km, descricao: document.getElementById('atend-descricao').value });
    if (r.erro) {
      document.getElementById('alert2').textContent = r.erro;
      showAlert('alert2');
      return;
    }
    S.descricao = r.descricao;
    hideAlert('alert2');
    renderUnidadeBadge(3);
    const inp = document.getElementById('appt-date');
    inp.min   = dataMinimaAgendamento(new Date());
    inp.value = ''; S.data = null; S.hora = null;
    document.getElementById('cal-status').innerHTML = '';
    buildTimeGrid([]);
    const tmo = S.tipo === 'revisao' ? getTmo(S.brand, S.modelo, S.km) : 0;
    const durLabel = S.tipo !== 'revisao' ? 'Até 72 h na oficina'
      : tmo >= 3 ? '3 horas' : tmo >= 1.5 ? '1h30' : tmo > 0 ? '1 hora' : '< 30 min';
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
    const campo = id => document.getElementById(id).value;
    const r = validarCliente({
      nome: campo('cli-nome'), tel: campo('cli-tel'), placa: campo('cli-placa'),
      odo: campo('cli-odo'), obs: campo('cli-obs'),
    });
    if (r.erro) {
      document.getElementById('alert4').textContent = r.erro;
      showAlert('alert4');
      return;
    }
    S.cliente = r.cliente;
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
function esc(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
// Valida e normaliza os dados do passo "Dados do cliente".
// Devolve { erro: 'mensagem' } ou { erro: null, cliente: {...} }.
function validarCliente(d) {
  const txt = (v, max) => String(v == null ? '' : v).trim().slice(0, max);
  const nome  = txt(d.nome, 100);
  const tel   = txt(d.tel, 20);
  const placa = txt(d.placa, 10).toUpperCase().replace(/[^A-Z0-9]/g, '');
  const odo   = txt(d.odo, 10);
  const obs   = txt(d.obs, 500);

  if (!nome || !tel || !placa) return { erro: 'Preencha nome, telefone e placa.' };

  const telDigitos = tel.replace(/\D/g, '');
  if (telDigitos.length < 10 || telDigitos.length > 11) {
    return { erro: 'Informe um telefone/WhatsApp válido com DDD (ex: 13 99999-9999).' };
  }
  if (!/^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/.test(placa)) {
    return { erro: 'Placa inválida. Utilize o formato ABC-1234 ou Mercosul ABC1D23.' };
  }
  if (odo && !(/^\d+$/.test(odo) && Number(odo) <= 999999)) {
    return { erro: 'Informe o odômetro só com números (ex: 12500).' };
  }
  return {
    erro: null,
    cliente: { nome, tel, placa: placa.slice(0, 3) + '-' + placa.slice(3), odo, obs },
  };
}

// Primeiro dia que o cliente pode escolher: o próximo dia útil depois de hoje.
function dataMinimaAgendamento(hoje) {
  const amanha = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + 1);
  const iso = amanha.getFullYear() + '-' +
    String(amanha.getMonth() + 1).padStart(2, '0') + '-' +
    String(amanha.getDate()).padStart(2, '0');
  return proximoDiaUtil(iso);
}

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
  const modelSelect = document.getElementById('model-select');
  if (modelSelect) {
    modelSelect.addEventListener('change', function() {
      S.modelo = this.value || null;
    });
  }

  // Máscara amigável de telefone: (13) 99999-9999
  const telInput = document.getElementById('cli-tel');
  if (telInput) {
    telInput.addEventListener('input', function() {
      let v = this.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 6) {
        v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
      } else if (v.length > 2) {
        v = `(${v.slice(0,2)}) ${v.slice(2)}`;
      } else if (v.length > 0) {
        v = `(${v}`;
      }
      this.value = v;
    });
  }

  // Formatação de placa (caixa alta e hífen): ABC-1234 ou ABC1D23
  const placaInput = document.getElementById('cli-placa');
  if (placaInput) {
    placaInput.addEventListener('input', function() {
      let v = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 7);
      if (v.length > 3) {
        v = `${v.slice(0,3)}-${v.slice(3)}`;
      }
      this.value = v;
    });
  }
});