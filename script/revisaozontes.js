/* ================================================================
   CALCULADORA DE REVISÃO — ZONTES
   Script unificado: peças · checklist · card hero · UI completa
   ================================================================ */

// ─── 1. PEÇAS POR MODELO / KM ─────────────────────────────────

const dadosRevisao = {
  V350: {
    1000:  [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'4134300001000',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    3000:  [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    6000:  [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'4134300001000',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    9000:  [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    12000: [{codigo:'1224300125000',nome:'Filtro de Ar',qtd:1,valor:106},{codigo:'1051158001000',nome:'Vela de Ignição',qtd:1,valor:108},{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'4134300001000',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'319717',nome:'Líquido de Arrefecimento',qtd:1,valor:30},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    15000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    18000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'4134300001000',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'324950',nome:'Fluido de Freio',qtd:1,valor:22},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    21000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    24000: [{codigo:'1224300125000',nome:'Filtro de Ar',qtd:1,valor:106},{codigo:'1051158001000',nome:'Vela de Ignição',qtd:1,valor:108},{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'4134300001000',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'319717',nome:'Líquido de Arrefecimento',qtd:1,valor:30},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    27000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    30000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'4134300001000',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    33000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    36000: [{codigo:'1224300125000',nome:'Filtro de Ar',qtd:1,valor:106},{codigo:'1051158001000',nome:'Vela de Ignição',qtd:1,valor:108},{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'4134300001000',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'319717',nome:'Líquido de Arrefecimento',qtd:1,valor:30},{codigo:'324950',nome:'Fluido de Freio',qtd:1,valor:22},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    39000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    42000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'4134300001000',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    45000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    48000: [{codigo:'1224300125000',nome:'Filtro de Ar',qtd:1,valor:106},{codigo:'1051158001000',nome:'Vela de Ignição',qtd:1,valor:108},{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'4134300001000',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'319717',nome:'Líquido de Arrefecimento',qtd:1,valor:30},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    51000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    54000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'4134300001000',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'324950',nome:'Fluido de Freio',qtd:1,valor:22},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    57000: [{codigo:'1224300125000',nome:'Filtro de Ar',qtd:1,valor:106},{codigo:'1051158001000',nome:'Vela de Ignição',qtd:1,valor:108},{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'4134300001000',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'319717',nome:'Líquido de Arrefecimento',qtd:1,valor:30},{codigo:'LUBMINI',nome:'Lubrificante Corrente',qtd:1,valor:25},{codigo:'DESMINI',nome:'Desingripante',qtd:1,valor:20}],
    tmo:{1000:0,3000:0.3,6000:0.6,9000:0.3,12000:1.5,15000:0.3,18000:1.0,21000:0.3,24000:1.5,27000:0.3,30000:0.6,33000:0.3,36000:1.5,39000:0.3,42000:0.6,45000:0.3,48000:1.5,51000:0.3,54000:1.0,57000:1.5},
  },
  E350: {
    1000:  [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'1050871006000',nome:'Filtro do Óleo',qtd:1,valor:120}],
    4000:  [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'1226400199000',nome:'Filtro Esponja Motor (ZT350-E)',qtd:1,valor:84}],
    8000:  [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'1050871006000',nome:'Filtro do Óleo',qtd:1,valor:120}],
    12000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70}],
    16000: [{codigo:'1226400175000',nome:'Filtro de Ar',qtd:1,valor:180},{codigo:'1050970004000',nome:'Vela de Ignição',qtd:1,valor:165},{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'1050871006000',nome:'Filtro do Óleo',qtd:1,valor:120},{codigo:'319717',nome:'Líquido de Arrefecimento',qtd:1,valor:30}],
    20000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70}],
    24000: [{codigo:'123079',nome:'Óleo de Motor',qtd:2,valor:70},{codigo:'1050871006000',nome:'Filtro do Óleo',qtd:1,valor:120},{codigo:'1050771003000',nome:'Correia CVT',qtd:1,valor:1150},{codigo:'324950',nome:'Fluido de Freio',qtd:1,valor:22}],
    tmo:{1000:0.0,4000:0.5,8000:0.8,12000:0.3,16000:1.0,20000:0.3,24000:2.0},
  },
  ZT368G: {
    1000:  [{codigo:'FILTRO-OLEO-368',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'123079',nome:'Óleo de Motor (SAE 10W-40/5W-40)',qtd:2,valor:70},{codigo:'CVT-OIL-368',nome:'Óleo Caixa de Velocidades (200mL)',qtd:1,valor:45}],
    4000:  [{codigo:'123079',nome:'Óleo de Motor (SAE 10W-40/5W-40)',qtd:2,valor:70},{codigo:'FILTRO-AR-368',nome:'Filtro de Ar (elemento)',qtd:1,valor:120}],
    8000:  [{codigo:'FILTRO-OLEO-368',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'VELA-368',nome:'Vela de Ignição',qtd:1,valor:165},{codigo:'123079',nome:'Óleo de Motor (SAE 10W-40/5W-40)',qtd:2,valor:70},{codigo:'CVT-OIL-368',nome:'Óleo Caixa de Velocidades (200mL)',qtd:1,valor:45}],
    12000: [{codigo:'123079',nome:'Óleo de Motor (SAE 10W-40/5W-40)',qtd:2,valor:70},{codigo:'FILTRO-AR-368',nome:'Filtro de Ar (elemento)',qtd:1,valor:120}],
    16000: [{codigo:'FILTRO-OLEO-368',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'VELA-368',nome:'Vela de Ignição',qtd:1,valor:165},{codigo:'123079',nome:'Óleo de Motor (SAE 10W-40/5W-40)',qtd:2,valor:70},{codigo:'CVT-OIL-368',nome:'Óleo Caixa de Velocidades (200mL)',qtd:1,valor:45}],
    20000: [{codigo:'123079',nome:'Óleo de Motor (SAE 10W-40/5W-40)',qtd:2,valor:70},{codigo:'FILTRO-AR-368',nome:'Filtro de Ar (elemento)',qtd:1,valor:120},{codigo:'CORREIA-CVT-368',nome:'Correia de Transmissão CVT',qtd:1,valor:1150}],
    24000: [{codigo:'FILTRO-OLEO-368',nome:'Filtro do Óleo',qtd:1,valor:130},{codigo:'VELA-368',nome:'Vela de Ignição',qtd:1,valor:165},{codigo:'123079',nome:'Óleo de Motor (SAE 10W-40/5W-40)',qtd:2,valor:70},{codigo:'CVT-OIL-368',nome:'Óleo Caixa de Velocidades (200mL)',qtd:1,valor:45},{codigo:'324950',nome:'Fluido de Freio',qtd:1,valor:22}],
    tmo:{1000:0.0,4000:0.8,8000:1.2,12000:0.8,16000:1.2,20000:2.0,24000:1.5},
  }
};

dadosRevisao.T350  = dadosRevisao.V350;
dadosRevisao.GK350 = dadosRevisao.V350;
dadosRevisao.S350  = dadosRevisao.V350;
dadosRevisao.R350  = dadosRevisao.V350;


// ─── 2. CHECKLIST ─────────────────────────────────────────────

const _I_base = ['Líquido de Arrefecimento','Manete da embreagem','Punho do acelerador','Cabo do acelerador','Marcha lenta','Corrente de transmissão (lubrif. a cada 1.000 km)','Freio','Manete do freio','Pneus','Raio das rodas','Parafusos/porcas Suspensão','Parafusos do chassi','Parafusos de montagem do motor','Eixos de roda'];
const _I_medio = ['Filtro de ar','Líquido de Arrefecimento','Manete da embreagem','Punho do acelerador','Cabo do acelerador','Marcha lenta','Tubulação do radiador','Tubulação combustível','Corrente de transmissão','Freio','Manete do freio','Pneus','Raio das rodas','Parafusos/porcas Suspensão','Coluna de direção','Parafusos do chassi','Parafusos de montagem do motor','Eixos de roda'];
const _I_completo = ['Parafuso de tubo de escape','Folga de válvula (inspeção a frio)','Manete da embreagem','Punho do acelerador','Cabo do acelerador','Marcha lenta','Sistema de emissão de poluentes','Corrente de transmissão','Freio','Manete do freio','Pneus','Raio das rodas','Parafusos/porcas Suspensão','Coluna de direção','Suspensão dianteira','Suspensão traseira','Parafusos do chassi','Parafusos de montagem do motor','Eixos de roda'];

const _ck350ccGerado = (() => {
  const KMS = [1000,3000,6000,9000,12000,15000,18000,21000,24000,27000,30000,33000,36000,39000,42000,45000,48000,51000,54000,57000];
  const prazos = {1000:'6 meses',6000:'12 meses',12000:'18 meses',18000:'24 meses',24000:'30 meses',30000:'36 meses',36000:'42 meses',42000:'48 meses',48000:'54 meses',54000:'60 meses'};
  const res = {};
  KMS.forEach(km => {
    let ck;
    if (km === 1000) {
      ck = { T:['Óleo de motor (Motul 10W40) — 2L','Filtro do óleo — 1 un.'], I:_I_base };
    } else if ([12,30,48].some(v => km/1000 === v || (km/1000 - v) % 36 === 0)) {
      ck = { T:['Óleo de motor (Motul 10W40) — 2L','Filtro do óleo — 1 un.','Filtro de ar — 1 un.','Vela de ignição — 1 un.','Líquido de Arrefecimento — conforme necessário'], I:_I_completo };
    } else if ([18,36,54].some(v => km/1000 === v)) {
      ck = { T:['Óleo de motor (Motul 10W40) — 2L','Filtro do óleo — 1 un.','Fluído de freio — conforme necessário'], I:_I_medio };
    } else if ([6,24,42].some(v => km/1000 === v)) {
      ck = { T:['Óleo de motor (Motul 10W40) — 2L','Filtro do óleo — 1 un.'], I:_I_medio };
    } else {
      ck = { T:['Óleo de motor (Motul 10W40) — 2L'], I:_I_base };
    }
    if (prazos[km]) ck.prazo = prazos[km];
    res[km] = ck;
  });
  return res;
})();

const checklist = {
  V350: _ck350ccGerado, T350: _ck350ccGerado, GK350: _ck350ccGerado, S350: _ck350ccGerado, R350: _ck350ccGerado,
  E350: {
    1000:  {prazo:'6 meses',  T:['Óleo de motor — 2L','Filtro do óleo — 1 un.','Óleo caixa transm. final — conf. manual'], I:['Corpo de Injeção','Folga do cabo acelerador','Marcha lenta','Freio','Pneus','Líquido de Arrefecimento','Correia CVT'], A:['Paraf./porcas escapamento — M8:22±4 / M10:45±5 N·m','Paraf./porcas chassi e motor — M12:65±5 / M16:80±5 N·m']},
    4000:  {T:['Óleo de motor — 2L'], I:['Filtro de ar','Folga do cabo acelerador','Marcha lenta','Tubulação do radiador','Tubulação combustível','Freio','Mangueira de freio','Fluido de freio','Pneus','Suspensão','Líquido de Arrefecimento','Correia CVT'], A:['Paraf./porcas caixa de direção — Decorativa:100±4 / 1ª ajuste:15±2 N·m','Paraf./porcas chassi e motor — M12:65±5 / M16:80±5 N·m']},
    8000:  {prazo:'12 meses', T:['Filtro de ar — 1 un.','Filtro do CVT — 1 un.','Óleo de motor — 2L','Filtro do óleo — 1 un.','Óleo caixa transm. final — conf. manual'], I:['Vela de ignição','Corpo de Injeção','Folga do cabo acelerador','Marcha lenta','Tubulação do radiador','Tubulação combustível','Freio','Mangueira de freio','Fluido de freio','Pneus','Amortecedor dianteiro','Amortecedor traseiro','Suspensão','Líquido de Arrefecimento','Correia CVT','Polias CVT — lubrif. (Shell Gadus S3 V220 C2)','Sist. controle poluentes evaporativos','Rolamentos do sistema de direção','Mecanismo trava do guidão','Folga das válvulas (a frio) — Adm:0,08–0,12mm / Esc:0,18–0,22mm'], A:['Paraf./porcas escapamento','Paraf./porcas caixa de direção','Paraf./porcas chassi e motor']},
    12000: {T:['Filtro do CVT — 1 un.','Óleo de motor — 2L'], I:['Coxins articulador do motor (Balança)','Filtro de ar','Folga do cabo acelerador','Marcha lenta','Tubulação do radiador','Tubulação combustível','Freio','Mangueira de freio','Fluido de freio','Pneus','Líquido de Arrefecimento','Correia CVT'], A:['Paraf./porcas caixa de direção','Paraf./porcas chassi e motor']},
    16000: {prazo:'18 meses', T:['Filtro de ar — 1 un.','Filtro do CVT — 1 un.','Óleo de motor — 2L','Filtro do óleo — 1 un.','Óleo caixa transm. final — conf. manual'], I:['Vela de ignição','Corpo de Injeção','Folga do cabo acelerador','Marcha lenta','Tubulação do radiador','Tubulação combustível','Freio','Mangueira de freio','Fluido de freio','Pneus','Amortecedor dianteiro','Amortecedor traseiro','Suspensão','Líquido de Arrefecimento','Correia CVT','Polias CVT — lubrificar','Sist. controle poluentes evaporativos','Rolamentos do sistema de direção','Mecanismo trava do guidão','Folga das válvulas (a frio)'], A:['Paraf./porcas escapamento','Paraf./porcas caixa de direção','Paraf./porcas chassi e motor']},
    20000: {T:['Filtro do CVT — 1 un.','Óleo de motor — 2L','Correia CVT — 1 un. (trocar a cada 20.000 km)'], I:['Filtro de ar','Folga do cabo acelerador','Marcha lenta','Tubulação do radiador','Tubulação combustível','Freio','Mangueira de freio','Fluido de freio','Pneus','Líquido de Arrefecimento'], A:['Paraf./porcas caixa de direção','Paraf./porcas chassi e motor']},
    24000: {prazo:'24 meses', T:['Filtro de ar — 1 un.','Filtro do CVT — 1 un.','Óleo de motor — 2L','Filtro do óleo — 1 un.','Óleo caixa transm. final — conf. manual','Líquido de Arrefecimento — conf. necessário','Fluido de freio — troca a cada 2 anos'], I:['Coxins articulador do motor (Balança)','Vela de ignição','Corpo de Injeção','Folga do cabo acelerador','Marcha lenta','Tubulação do radiador','Tubulação combustível','Freio','Mangueira de freio','Pneus','Amortecedor dianteiro','Amortecedor traseiro','Suspensão','Correia CVT','Polias CVT — lubrificar','Sist. controle poluentes evaporativos','Rolamentos do sistema de direção','Mecanismo trava do guidão','Folga das válvulas (a frio)'], A:['Paraf./porcas escapamento','Paraf./porcas caixa de direção','Paraf./porcas chassi e motor']},
  },
  ZT368G: {
    1000:  {prazo:'3 meses',  T:['Óleo de Motor — 1,75L (com filtro) · SAE 10W-40/5W-40, API SN','Filtro do Óleo — 1 un.','Óleo da Caixa de Velocidades (CVT) — 200mL'], I:['Tampa antiqueimaduras do tubo de escape','Folgas do tubo de óleo','Velocidade de ralenti (marcha lenta)','Tubos de combustível','Desgaste das pastilhas de travão','Raios da roda','Tubo de óleo do filtro de ar','Líquido de refrigeração','Pneus (pressão e desgaste)','Freios (operação e líquido)','Óleo do motor (nível)'], A:['Parafusos e porcas do tubo de escape','Parafusos e porcas dos mecanismos de direção']},
    4000:  {T:['Óleo de Motor — 1,55L · SAE 10W-40/5W-40, API SN','Filtro de Ar (elemento) — 1 un.'], I:['Tampa antiqueimaduras do tubo de escape','Amortecimento da base (coxins)','Velocidade de ralenti','Tubos do radiador','Travões (pastilhas, disco, líquido)','Pneus (pressão e desgaste)','Raios da roda','Amortecedor dianteiro','Amortecedor traseiro','Líquido de refrigeração','Tubo de óleo do filtro de ar','Roda ativa/motriz CVT — lubrif. Shell Gadus S3 V220 C2 a cada 10.000 km'], A:['Abraçadeiras, parafusos e porcas do veículo']},
    8000:  {prazo:'~15 meses', T:['Óleo de Motor — 1,75L (com filtro) · SAE 10W-40/5W-40, API SN','Filtro do Óleo — 1 un.','Vela de Ignição — 1 un.','Óleo da Caixa de Velocidades (CVT) — 200mL'], I:['Tampa antiqueimaduras do tubo de escape','Filtro de Ar (elemento)','Velocidade de ralenti','Tubos do radiador','Folgas do tubo de óleo','Travões (pastilhas, disco, líquido)','Pneus (pressão e desgaste)','Raios da roda','Amortecedor dianteiro','Amortecedor traseiro','Líquido de refrigeração','Tubo de óleo do filtro de ar','Rolamentos de direção','Roda ativa/motriz CVT','Correia de transmissão CVT (substituir se necessário)'], A:['Abraçadeiras, parafusos e porcas do veículo','Parafusos e porcas do tubo de escape','Parafusos e porcas dos mecanismos de direção']},
    12000: {T:['Óleo de Motor — 1,55L · SAE 10W-40/5W-40, API SN','Filtro de Ar (elemento) — 1 un.'], I:['Tampa antiqueimaduras do tubo de escape','Velocidade de ralenti','Tubos do radiador','Travões (pastilhas, disco, líquido)','Pneus (pressão e desgaste)','Raios da roda','Amortecedor dianteiro','Amortecedor traseiro','Líquido de refrigeração','Tubo de óleo do filtro de ar','Rolamentos de direção','Abraçadeiras, parafusos e porcas do veículo']},
    16000: {prazo:'~30 meses', T:['Óleo de Motor — 1,75L (com filtro) · SAE 10W-40/5W-40, API SN','Filtro do Óleo — 1 un.','Vela de Ignição — 1 un.','Óleo da Caixa de Velocidades (CVT) — 200mL'], I:['Tampa antiqueimaduras do tubo de escape','Filtro de Ar (elemento)','Amortecimento da base (coxins)','Velocidade de ralenti','Tubos do radiador','Folgas do tubo de óleo','Travões (pastilhas, disco, líquido)','Mangueira do líquido dos travões (substituir a cada 4 anos)','Pneus (pressão e desgaste)','Raios da roda','Amortecedor dianteiro','Amortecedor traseiro','Líquido de refrigeração','Tubo de óleo do filtro de ar','Rolamentos de direção','Roda ativa/motriz CVT — lubrif. Shell Gadus S3 V220 C2','Correia de transmissão CVT (substituir se necessário)'], A:['Abraçadeiras, parafusos e porcas do veículo','Parafusos e porcas do tubo de escape','Parafusos e porcas dos mecanismos de direção']},
    20000: {T:['Óleo de Motor — 1,55L · SAE 10W-40/5W-40, API SN','Filtro de Ar (elemento) — 1 un.','Correia de Transmissão CVT — 1 un. (trocar a cada 2 anos ou quando necessário)'], I:['Tampa antiqueimaduras do tubo de escape','Velocidade de ralenti','Tubos do radiador','Travões (pastilhas, disco, líquido)','Pneus (pressão e desgaste)','Raios da roda','Amortecedor dianteiro','Amortecedor traseiro','Líquido de refrigeração','Tubo de óleo do filtro de ar','Rolamentos de direção','Abraçadeiras, parafusos e porcas do veículo','Folga das válvulas (Adm: 0,08–0,12mm / Esc: 0,18–0,22mm) — ajustar a cada 20.000 km']},
    24000: {prazo:'~45 meses', T:['Óleo de Motor — 1,75L (com filtro) · SAE 10W-40/5W-40, API SN','Filtro do Óleo — 1 un.','Vela de Ignição — 1 un.','Óleo da Caixa de Velocidades (CVT) — 200mL','Fluido de Freio — conf. necessário (substituir a cada 4 anos)'], I:['Tampa antiqueimaduras do tubo de escape','Filtro de Ar (elemento)','Amortecimento da base (coxins)','Velocidade de ralenti','Tubos do radiador','Folgas do tubo de óleo','Mangueira do líquido dos travões (substituir a cada 4 anos)','Travões (pastilhas, disco)','Pneus (pressão e desgaste)','Raios da roda','Amortecedor dianteiro','Amortecedor traseiro','Líquido de refrigeração (substituir a cada 30.000 km)','Tubo de óleo do filtro de ar','Rolamentos de direção','Mecanismo trava da direção — limpar e lubrificar (a cada 10.000 km)','Roda ativa/motriz CVT — lubrif. Shell Gadus S3 V220 C2','Correia de transmissão CVT'], A:['Abraçadeiras, parafusos e porcas do veículo','Parafusos e porcas dos mecanismos de direção']},
  }
};


// ─── 3. INFO DO MODELO (card hero) ────────────────────────────

const modeloInfo = {
  V350:  {nome:'V 350',          motor:'350cc · Mono', trans:'Corrente', oleo:'Motul 10W40 · 2L', intervalo:'3.000 km', img:'/Ferramenta-TMO/images/ZONTES/V350.png'},
  T350:  {nome:'T 350 / T 350X', motor:'350cc · Mono', trans:'Corrente', oleo:'Motul 10W40 · 2L', intervalo:'3.000 km', img:'/Ferramenta-TMO/images/ZONTES/T350-T350X.png'},
  GK350: {nome:'GK 350',         motor:'350cc · Mono', trans:'Corrente', oleo:'Motul 10W40 · 2L', intervalo:'3.000 km', img:'/Ferramenta-TMO/images/ZONTES/GK350.png'},
  S350:  {nome:'S 350',          motor:'350cc · Mono', trans:'Corrente', oleo:'Motul 10W40 · 2L', intervalo:'3.000 km', img:'/Ferramenta-TMO/images/ZONTES/S350.png'},
  R350:  {nome:'R 350',          motor:'350cc · Mono', trans:'Corrente', oleo:'Motul 10W40 · 2L', intervalo:'3.000 km', img:'/Ferramenta-TMO/images/ZONTES/R350.png'},
  E350:  {nome:'350 E',          motor:'350cc · CVT',  trans:'CVT',      oleo:'Motul 10W40 · 2L', intervalo:'4.000 km', img:'/Ferramenta-TMO/images/ZONTES/350E.png'},
  ZT368G:{nome:'368G',           motor:'368cc · CVT',  trans:'CVT',      oleo:'SAE 10W-40 · 1,55–1,75L', intervalo:'4.000 km', img:'/Ferramenta-TMO/images/ZONTES/368G.png'},
};


// ─── 4. CONFIGURAÇÕES ─────────────────────────────────────────

const TMO_HORA   = 350;
const KM_PADRAO  = [1000,3000,6000,9000,12000,15000,18000,21000,24000,27000,30000,33000,36000,39000,42000,45000,48000,51000,54000,57000];
const KM_E350    = [1000,4000,8000,12000,16000,20000,24000];
const KM_368G    = [1000,4000,8000,12000,16000,20000,24000];

const pecasAvulsas = [
  {codigo:'MO-CORRENTE', nome:'Serviço: Regulagem Corrente',              valor:30},
  {codigo:'MO-FREIO',    nome:'Serviço: Troca Pastilha Dianteira',         valor:50},
  {codigo:'MO-FREIO2',   nome:'Serviço: Troca Pastilha Traseira',          valor:50},
  {codigo:'MO-INJETOR',  nome:'Serviço: Limpeza Bico Injetor (por un.)',  valor:150},
  {codigo:'MO-FREIO3',   nome:'Serviço: Verificar/Sangria (por un.)',      valor:160},
  {codigo:'MO-TRANSM',   nome:'Serviço: Troca Kit Transmissão',            valor:180},
  {codigo:'328185',      nome:'Produto: Kit Revisão',                      valor:70},
  {codigo:'328186',      nome:'Produto: Kit Scooter',                      valor:70},
  {codigo:'LUBMINI',     nome:'Lubrificante Corrente',                     valor:25},
  {codigo:'DESMINI',     nome:'Desingripante',                             valor:20},
  {codigo:'DESC01',      nome:'Descarbonizante',                           valor:35},
];

let itensAdicionais = [];
function fmt(v){return 'R$ '+v.toFixed(2).replace('.',',');}


// ─── 5. CARD HERO ─────────────────────────────────────────────

function atualizarCardVeiculo(modelo){
  const hero=document.getElementById('veiculoHero');
  if(!hero)return;
  if(!modelo){hero.classList.remove('visivel');return;}
  const info=modeloInfo[modelo];
  if(!info){hero.classList.remove('visivel');return;}
  document.getElementById('heroImg').src=info.img;
  document.getElementById('heroNome').textContent=info.nome;
  document.getElementById('heroSpecs').innerHTML=
    '<span class="spec-pill spec-motor">'+info.motor+'</span>'+
    '<span class="spec-pill spec-trans">'+info.trans+'</span>'+
    '<span class="spec-pill spec-oleo">'+info.oleo+'</span>'+
    '<span class="spec-pill spec-intervalo">Rev. a cada '+info.intervalo+'</span>';
  hero.classList.add('visivel');
}


// ─── 6. KM ────────────────────────────────────────────────────

function atualizarKmPorVeiculo(veiculo){
  const sel=document.getElementById('kmSelect');
  if(!sel) return;
  sel.innerHTML='<option value="">Selecione o KM</option>';
  const _lista = veiculo==='E350'?KM_E350:veiculo==='ZT368G'?KM_368G:KM_PADRAO;
  _lista.forEach(km=>{
    const o=document.createElement('option');
    o.value=km; o.textContent=km.toLocaleString('pt-BR')+' km';
    sel.appendChild(o);
  });
}


// ─── 7. CÁLCULO (PEÇAS) ───────────────────────────────────────

function calcular(){
  const veiculo=document.getElementById('veiculoSelect').value;
  const km=document.getElementById('kmSelect').value;
  const lista=document.getElementById('listaPecas');
  if(!veiculo||!km){
    if(lista) lista.innerHTML='<div class="no-result">👆 Selecione veículo e KM para ver as peças</div>';
    atualizarTotaisGerais();
    return;
  }
  const revisao=(dadosRevisao[veiculo]&&dadosRevisao[veiculo][parseInt(km)])||[];
  if(!revisao.length){
    lista.innerHTML='<div class="no-result">Nenhuma peça cadastrada para esta revisão</div>';
  } else {
    let h='<div class="peca-header"><div>Peça</div><div>Código</div><div>Qtd.</div><div>Total (R$)</div></div>';
    revisao.forEach(p=>{
      h+='<div class="peca-item"><div class="peca-nome">'+p.nome+'</div><div class="peca-codigo">'+p.codigo+'</div><div class="peca-qtd">'+p.qtd+'</div><div class="peca-valor">'+fmt(p.qtd*p.valor)+'</div></div>';
    });
    lista.innerHTML=h;
  }
  atualizarTotaisGerais();
}


// ─── 8. CHECKLIST ─────────────────────────────────────────────

function toggleChecklist(){
  const body = document.getElementById('checklistBody');
  const toggle = document.getElementById('checklistToggle');
  if(body) body.classList.toggle('aberto');
  if(toggle) toggle.classList.toggle('aberto');
}

function renderizarChecklist(veiculo,km){
  const secao=document.getElementById('secaoChecklist');
  const body=document.getElementById('checklistBody');
  const subtitle=document.getElementById('checklistSubtitle');
  if(!secao)return;
  if(!veiculo||!km||!checklist[veiculo]){secao.style.display='none';return;}
  const ck=checklist[veiculo][parseInt(km)];
  if(!ck){secao.style.display='none';return;}
  secao.style.display='block';
  subtitle.textContent='Revisão '+parseInt(km).toLocaleString('pt-BR')+' km'+(ck.prazo?' · '+ck.prazo:'');
  const tipos=[
    {k:'T',lbl:'Trocar',cls:'grupo-T'},
    {k:'I',lbl:'Inspecionar',cls:'grupo-I'},
    {k:'A',lbl:'Apertar / Torque',cls:'grupo-A'},
    {k:'IAL',lbl:'Insp. / Ajust. / Lubr.',cls:'grupo-IAL'},
    {k:'IL',lbl:'Insp. / Lubr.',cls:'grupo-IL'},
    {k:'L',lbl:'Limpar',cls:'grupo-L'},
  ];
  let h='<div class="checklist-grupos">'; let tem=false;
  tipos.forEach(t=>{
    const itens=ck[t.k]; if(!itens||!itens.length)return; tem=true;
    h+='<div class="grupo-card '+t.cls+'"><div class="grupo-titulo">'+t.lbl+'<span class="grupo-badge">'+itens.length+' item'+(itens.length>1?'s':'')+'</span></div><div class="grupo-itens">';
    itens.forEach(i=>{h+='<div class="grupo-item"><span class="item-bullet"></span><span>'+i+'</span></div>';});
    h+='</div></div>';
  });
  h+='</div>';
  const nota=veiculo==='E350'
    ?'<strong>350E Nova:</strong> Motul 10W40 · 2L. Próxima revisão a cada 4.000 km ou 6 meses.<br>Correia CVT: trocar a cada 20.000 km. Polias CVT: graxa Shell Gadus S3 V220 C2 a cada 12.000 km.'
    :veiculo==='ZT368G'
    ?'<strong>Zontes 368G:</strong> Óleo SAE 10W-40/5W-40 API SN · 1,55L (sem filtro) ou 1,75L (com filtro).<br>1ª revisão: 1.000 km ou 3 meses. Depois: a cada 4.000 km ou 15 meses.<br>Correia CVT: a cada 2 anos. Roda ativa/motriz: Shell Gadus S3 V220 C2 a cada 10.000 km. Líquido arrefecimento: a cada 30.000 km.'
    :'<strong>Zontes 350CC:</strong> Motul 10W40 · 2L por revisão. Corrente: lubrificar a cada 1.000 km.';
  h+='<div class="checklist-nota">'+nota+'<br>Em condições severas (litoral, poeira, chuva intensa) reduza os intervalos.</div>';
  body.innerHTML=tem?h:'<div class="checklist-empty">Nenhum item cadastrado para esta revisão</div>';
  body.classList.add('aberto');
  const toggle = document.getElementById('checklistToggle');
  if(toggle) toggle.classList.add('aberto');
}


// ─── 9. ITENS ADICIONAIS ──────────────────────────────────────

function renderizarItensAdicionais(){
  const c=document.getElementById('listaItensAdicionais');
  if(!c) return;
  if(!itensAdicionais.length){c.innerHTML='<div class="no-result">Nenhum item adicionado</div>';}
  else{
    let h='<div class="peca-header"><div>Peça / Serviço</div><div>Código</div><div>Qtd.</div><div>Total (R$)</div><div></div></div>';
    itensAdicionais.forEach((item,idx)=>{
      h+='<div class="peca-item"><div class="peca-nome">'+item.nome+'</div><div class="peca-codigo">'+item.codigo+'</div><div class="peca-qtd">'+item.qtd+'</div><div class="peca-valor">'+fmt(item.qtd*item.valor)+'</div><div><button class="btn-remover" onclick="removerItemAdicional('+idx+')" title="Remover">✕</button></div></div>';
    });
    c.innerHTML=h;
  }
  atualizarTotaisGerais();
}
function adicionarItemAdicional(){
  const sel=document.getElementById('selectAvulso');
  const qtd=parseInt(document.getElementById('qtdAvulso').value)||1;
  const idx=parseInt(sel.value); if(isNaN(idx))return;
  const peca=pecasAvulsas[idx];
  const ex=itensAdicionais.find(i=>i.codigo===peca.codigo);
  if(ex){ex.qtd+=qtd;}else{itensAdicionais.push(Object.assign({},peca,{qtd}));}
  sel.value=''; document.getElementById('qtdAvulso').value=1;
  renderizarItensAdicionais();
}
function removerItemAdicional(idx){itensAdicionais.splice(idx,1);renderizarItensAdicionais();}
window.adicionarItemAdicional=adicionarItemAdicional;
window.removerItemAdicional=removerItemAdicional;


// ─── 10. TOTAIS ───────────────────────────────────────────────

function atualizarTotaisGerais(){
  const veiculoElem = document.getElementById('veiculoSelect');
  const kmElem = document.getElementById('kmSelect');
  if(!veiculoElem || !kmElem) return;

  const veiculo=veiculoElem.value;
  const km=kmElem.value;
  const revisao=(veiculo&&km&&dadosRevisao[veiculo]&&dadosRevisao[veiculo][parseInt(km)])||[];
  const tmoH=(veiculo&&km&&dadosRevisao[veiculo]&&dadosRevisao[veiculo].tmo&&dadosRevisao[veiculo].tmo[parseInt(km)])||0;
  const totalP=revisao.reduce((s,p)=>s+p.qtd*p.valor,0)+itensAdicionais.reduce((s,p)=>s+p.qtd*p.valor,0);
  const totalT=tmoH*TMO_HORA;

  document.getElementById('totalPecas').textContent=fmt(totalP);
  document.getElementById('totalTMO').textContent=fmt(totalT);
  document.getElementById('totalGeral').textContent=fmt(totalP+totalT);
  const n=revisao.length+itensAdicionais.length;
  document.getElementById('subPecas').textContent=n?n+' item(ns) no orçamento':'Sem itens selecionados';
  document.getElementById('subTMO').textContent=tmoH.toFixed(1).replace('.',',')+' h × R$ '+TMO_HORA+',00/h';
  document.getElementById('subTotal').textContent='Peças + Mão de Obra';
}


// ─── 11. EVENTOS & INICIALIZAÇÃO ──────────────────────────────

function onVeiculoChange(){
  const veiculo=document.getElementById('veiculoSelect').value;
  atualizarCardVeiculo(veiculo);
  atualizarKmPorVeiculo(veiculo);
  calcular();
  renderizarChecklist(veiculo, document.getElementById('kmSelect').value);
}

function onKmChange(){
  const veiculo=document.getElementById('veiculoSelect').value;
  const km=document.getElementById('kmSelect').value;
  calcular();
  renderizarChecklist(veiculo, km);
}

document.addEventListener('DOMContentLoaded', () => {
  const veiculoSelect = document.getElementById('veiculoSelect');
  const kmSelect = document.getElementById('kmSelect');
  const checklistToggle = document.getElementById('checklistToggle');

  if(veiculoSelect) veiculoSelect.addEventListener('change', onVeiculoChange);
  if(kmSelect) kmSelect.addEventListener('change', onKmChange);
  if(checklistToggle) checklistToggle.addEventListener('click', toggleChecklist);
});