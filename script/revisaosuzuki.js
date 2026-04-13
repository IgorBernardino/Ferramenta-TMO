/* ================================================================
   CALCULADORA DE REVISÃO — SUZUKI
   Script unificado: peças · checklist · card hero · UI completa
   ================================================================ */


// ─── 1. PEÇAS POR MODELO / KM ────────────────────────────────

var dadosRevisao = {

  BURGMAN_I: {
    tmoHora: 100,
    1000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70}],
    6000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510H05240H000',nome:'Filtro de Óleo',qtd:1,valor:50}],
    12000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510H05240H000',nome:'Filtro de Óleo',qtd:1,valor:50}],
    18000: [{codigo:'13780H7A001H000',nome:'Filtro de Ar',qtd:1,valor:115},{codigo:'09482-00406',nome:'Vela de Ignição',qtd:1,valor:150},{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510H05240H000',nome:'Filtro de Óleo',qtd:1,valor:50}],
    24000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510H05240H000',nome:'Filtro de Óleo',qtd:1,valor:50}],
    30000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510H05240H000',nome:'Filtro de Óleo',qtd:1,valor:50}],
    36000: [{codigo:'13780H7A001H000',nome:'Filtro de Ar',qtd:1,valor:115},{codigo:'09482-00406',nome:'Vela de Ignição',qtd:1,valor:150},{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510H05240H000',nome:'Filtro de Óleo',qtd:1,valor:50}],
    42000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510H05240H000',nome:'Filtro de Óleo',qtd:1,valor:50}],
    48000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510H05240H000',nome:'Filtro de Óleo',qtd:1,valor:50}],
    54000: [{codigo:'13780H7A001H000',nome:'Filtro de Ar',qtd:1,valor:115},{codigo:'09482-00406',nome:'Vela de Ignição',qtd:1,valor:150},{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510H05240H000',nome:'Filtro de Óleo',qtd:1,valor:50}],
    60000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:1,valor:70},{codigo:'16510H05240H000',nome:'Filtro de Óleo',qtd:1,valor:50}],
    tmo: {1000:0,6000:0,12000:0.8,18000:2.5,24000:1,30000:1,36000:2.5,42000:1,48000:1,54000:2.5,60000:1}
  },

  GSX800: {
    tmoHora: 800,
    1000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    6000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    12000: [{codigo:'09482-00635-000',nome:'Vela de Ignição',qtd:2,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    18000: [{codigo:'1378025L00000',nome:'Filtro de Ar',qtd:1,valor:320},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    24000: [{codigo:'09482-00635-000',nome:'Vela de Ignição',qtd:2,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    30000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    36000: [{codigo:'09482-00635-000',nome:'Vela de Ignição',qtd:2,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    42000: [{codigo:'1378025L00000',nome:'Filtro de Ar',qtd:1,valor:320},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    48000: [{codigo:'09482-00635-000',nome:'Vela de Ignição',qtd:2,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    54000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    60000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    tmo: {1000:0,6000:0,12000:0.4,18000:0.2,24000:0.4,30000:0.2,36000:0.4,42000:0.2,48000:0.4,54000:0.2,60000:0.4}
  },

  HAYABUSA: {
    tmoHora: 1300,
    1000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    6000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    12000: [{codigo:'0948200558000',nome:'Vela de Ignição',qtd:4,valor:242},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    18000: [{codigo:'13780-10L00-000',nome:'Filtro de Ar',qtd:1,valor:480},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    24000: [{codigo:'0948200558000',nome:'Vela de Ignição',qtd:4,valor:242},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    30000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    36000: [{codigo:'0948200558000',nome:'Vela de Ignição',qtd:4,valor:242},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    42000: [{codigo:'13780-10L00-000',nome:'Filtro de Ar',qtd:1,valor:480},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    48000: [{codigo:'0948200558000',nome:'Vela de Ignição',qtd:4,valor:242},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    54000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    60000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    tmo: {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3}
  },

  GSXR1000: {
    tmoHora: 1000,
    1000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    6000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    12000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'09482-00458',nome:'Vela de Ignição',qtd:4,valor:185}],
    18000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'13780-35F00',nome:'Filtro de Ar',qtd:1,valor:435}],
    24000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'09482-00458',nome:'Vela de Ignição',qtd:4,valor:185}],
    30000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    36000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'09482-00458',nome:'Vela de Ignição',qtd:4,valor:185}],
    42000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'13780-35F00',nome:'Filtro de Ar',qtd:1,valor:435}],
    48000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'09482-00458',nome:'Vela de Ignição',qtd:4,valor:185}],
    54000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    60000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'16510-07J00-000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    tmo: {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3}
  },

  GSX750: {
    tmoHora: 750,
    1000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    6000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    12000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'0948200557000',nome:'Vela de Ignição',qtd:4,valor:240}],
    18000: [{codigo:'13780-44G01-000',nome:'Filtro de Ar',qtd:1,valor:370},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    24000: [{codigo:'0948200557000',nome:'Vela de Ignição',qtd:4,valor:240},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    30000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    36000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'0948200557000',nome:'Vela de Ignição',qtd:4,valor:240}],
    42000: [{codigo:'13780-44G01-000',nome:'Filtro de Ar',qtd:1,valor:370},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    48000: [{codigo:'0948200557000',nome:'Vela de Ignição',qtd:4,valor:240},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    54000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    60000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    tmo: {1000:0,6000:0,12000:0.4,18000:0.2,24000:0.4,30000:0.2,36000:0.4,42000:0.2,48000:0.4,54000:0.2,60000:0.4}
  },

  GSXS1000: {
    tmoHora: 1000,
    1000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    6000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    12000: [{codigo:'0948200635000',nome:'Vela de Ignição',qtd:4,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    18000: [{codigo:'1378031J00000',nome:'Filtro de Ar',qtd:1,valor:430},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    24000: [{codigo:'0948200635000',nome:'Vela de Ignição',qtd:4,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    30000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    36000: [{codigo:'0948200635000',nome:'Vela de Ignição',qtd:4,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    42000: [{codigo:'1378031J00000',nome:'Filtro de Ar',qtd:1,valor:430},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    48000: [{codigo:'0948200635000',nome:'Vela de Ignição',qtd:4,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    54000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    60000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    tmo: {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3}
  },

  SV650A: {
    tmoHora: 650,
    1000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    6000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    12000: [{codigo:'0948200646000',nome:'Vela de Ignição',qtd:2,valor:160},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    18000: [{codigo:'13780-44H00-000',nome:'Filtro de Ar',qtd:1,valor:370},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    24000: [{codigo:'0948200646000',nome:'Vela de Ignição',qtd:2,valor:160},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    30000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    36000: [{codigo:'0948200646000',nome:'Vela de Ignição',qtd:2,valor:160},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    42000: [{codigo:'13780-44H00-000',nome:'Filtro de Ar',qtd:1,valor:370},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    48000: [{codigo:'0948200646000',nome:'Vela de Ignição',qtd:2,valor:160},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    54000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    60000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    tmo: {1000:0,6000:0,12000:0.5,18000:0.3,24000:0.5,30000:0.3,36000:0.5,42000:0.3,48000:0.5,54000:0.3,60000:0.5}
  },

  VSTROM650: {
    tmoHora: 650,
    1000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    6000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    12000: [{codigo:'0948200270000',nome:'Vela de Ignição',qtd:2,valor:135},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    18000: [{codigo:'13780-27G10',nome:'Filtro de Ar',qtd:1,valor:480},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    24000: [{codigo:'0948200270000',nome:'Vela de Ignição',qtd:2,valor:135},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    30000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    36000: [{codigo:'0948200270000',nome:'Vela de Ignição',qtd:2,valor:135},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    42000: [{codigo:'13780-27G10',nome:'Filtro de Ar',qtd:1,valor:480},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    48000: [{codigo:'0948200270000',nome:'Vela de Ignição',qtd:2,valor:135},{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    54000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70}],
    60000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:3,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    tmo: {1000:0,6000:0,12000:0.5,18000:0.3,24000:0.5,30000:0.3,36000:0.5,42000:0.3,48000:0.5,54000:0.3,60000:0.5}
  },

  VSTROM800: {
    tmoHora: 800,
    1000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    6000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    12000: [{codigo:'09482-00635-000',nome:'Vela de Ignição',qtd:2,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    18000: [{codigo:'13780-25L00-000',nome:'Filtro de Ar',qtd:1,valor:320},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    24000: [{codigo:'09482-00635-000',nome:'Vela de Ignição',qtd:2,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    30000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    36000: [{codigo:'09482-00635-000',nome:'Vela de Ignição',qtd:2,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    42000: [{codigo:'13780-25L00-000',nome:'Filtro de Ar',qtd:1,valor:320},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    48000: [{codigo:'09482-00635-000',nome:'Vela de Ignição',qtd:2,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    54000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    60000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    tmo: {1000:0,6000:0,12000:0.4,18000:0.2,24000:0.4,30000:0.2,36000:0.4,42000:0.2,48000:0.4,54000:0.2,60000:0.4}
  },

  VSTROM1000: {
    tmoHora: 1000,
    1000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    6000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    12000: [{codigo:'0948200635000',nome:'Vela de Ignição',qtd:4,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    18000: [{codigo:'1378031J00000',nome:'Filtro de Ar',qtd:1,valor:430},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    24000: [{codigo:'0948200635000',nome:'Vela de Ignição',qtd:4,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    30000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    36000: [{codigo:'0948200635000',nome:'Vela de Ignição',qtd:4,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    42000: [{codigo:'1378031J00000',nome:'Filtro de Ar',qtd:1,valor:430},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    48000: [{codigo:'0948200635000',nome:'Vela de Ignição',qtd:4,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    54000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    60000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    tmo: {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3}
  },

  VSTROM1050XT: {
    tmoHora: 1050,
    1000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    6000:  [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    12000: [{codigo:'0948200635000',nome:'Vela de Ignição',qtd:4,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    18000: [{codigo:'1378031J00000',nome:'Filtro de Ar',qtd:1,valor:430},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    24000: [{codigo:'0948200635000',nome:'Vela de Ignição',qtd:4,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    30000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    36000: [{codigo:'0948200635000',nome:'Vela de Ignição',qtd:4,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    42000: [{codigo:'1378031J00000',nome:'Filtro de Ar',qtd:1,valor:430},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    48000: [{codigo:'0948200635000',nome:'Vela de Ignição',qtd:4,valor:340},{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    54000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70}],
    60000: [{codigo:'MT114',nome:'Óleo do Motor',qtd:4,valor:70},{codigo:'1651007J00000',nome:'Filtro de Óleo',qtd:1,valor:185}],
    tmo: {1000:0,6000:0,12000:0.3,18000:0.1,24000:0.3,30000:0.1,36000:0.3,42000:0.1,48000:0.3,54000:0.1,60000:0.3}
  }
};


// ─── 2. CHECKLIST ─────────────────────────────────────────────
/*
   Padrão Suzuki (ciclo de 12k):
   1k   → inspeção inicial + troca óleo/filtro
   6k   → só óleo
   12k  → vela + filtro óleo + inspeções
   18k  → filtro ar + óleo + inspeções completas
   24k  → vela + filtro óleo + inspeções
   30k  → só óleo
   ... repete
*/

var _I_suzuki_base = [
    'Freio (pastilhas, discos, fluido)',
    'Pneus (desgaste e pressão)',
    'Corrente de transmissão (folga e lubrificação)',
    'Suspensão dianteira e traseira',
    'Acelerador (cabo e punho)',
    'Marcha lenta',
    'Sistema de iluminação',
    'Bateria',
    'Parafusos e fixações gerais',
];

var _I_suzuki_completo = _I_suzuki_base.concat([
    'Folga de válvulas (inspeção a frio)',
    'Tubulação de combustível e arrefecimento',
    'Sistema de emissão de poluentes',
    'Coletor de admissão',
    'Coluna de direção e rolamentos',
]);

/* Mapa explícito: tipo por km para Suzuki (todos os modelos compartilham o mesmo padrão de inspeção) */
function _gerarChecklistSZ(modelo) {
    var KMS = [1000,6000,12000,18000,24000,30000,36000,42000,48000,54000,60000];
    var res = {};
    KMS.forEach(function(km) {
        var ck;
        if (km === 1000) {
            ck = {
                prazo: '6 meses',
                T: ['Óleo do Motor — conforme volume do modelo', 'Filtro de Óleo — 1 un.'],
                I: _I_suzuki_base,
            };
        } else if ([18, 42].indexOf(km / 1000) !== -1) {
            /* 18k, 42k → filtro ar + óleo + inspeção completa */
            ck = {
                T: ['Filtro de Ar — 1 un.', 'Óleo do Motor — conforme volume do modelo'],
                I: _I_suzuki_completo,
            };
        } else if ([12, 24, 36, 48].indexOf(km / 1000) !== -1) {
            /* 12k, 24k, 36k, 48k → vela + filtro óleo + inspeção */
            ck = {
                T: ['Vela de Ignição — conforme qtd. do modelo', 'Filtro de Óleo — 1 un.', 'Óleo do Motor — conforme volume do modelo'],
                I: _I_suzuki_completo,
            };
        } else if ([6, 30, 54].indexOf(km / 1000) !== -1) {
            /* 6k, 30k, 54k → só óleo */
            ck = {
                T: ['Óleo do Motor — conforme volume do modelo'],
                I: _I_suzuki_base,
            };
        } else {
            /* 60k → filtro óleo + óleo */
            ck = {
                T: ['Óleo do Motor — conforme volume do modelo', 'Filtro de Óleo — 1 un.'],
                I: _I_suzuki_completo,
            };
        }
        res[km] = ck;
    });
    return res;
}

/* Burgman tem padrão ligeiramente diferente (18k = completo com vela) */
var _ckBurgman = (function() {
    var KMS = [1000,6000,12000,18000,24000,30000,36000,42000,48000,54000,60000];
    var res = {};
    KMS.forEach(function(km) {
        var ck;
        if (km === 1000) {
            ck = { prazo:'6 meses', T:['Óleo do Motor — 1L'], I:_I_suzuki_base };
        } else if ([18,36,54].indexOf(km/1000) !== -1) {
            ck = { T:['Filtro de Ar — 1 un.','Vela de Ignição — 1 un.','Óleo do Motor — 1L','Filtro de Óleo — 1 un.'], I:_I_suzuki_completo };
        } else if ([6,30].indexOf(km/1000) !== -1) {
            ck = { T:['Óleo do Motor — 1L'], I:_I_suzuki_base };
        } else {
            ck = { T:['Óleo do Motor — 1L','Filtro de Óleo — 1 un.'], I:_I_suzuki_base };
        }
        res[km] = ck;
    });
    return res;
})();

var _ckSZ = _gerarChecklistSZ();

var checklist = {
    BURGMAN_I:   _ckBurgman,
    GSX800:      _ckSZ,
    HAYABUSA:    _ckSZ,
    GSXR1000:    _ckSZ,
    GSX750:      _ckSZ,
    GSXS1000:    _ckSZ,
    SV650A:      _ckSZ,
    VSTROM650:   _ckSZ,
    VSTROM800:   _ckSZ,
    VSTROM1000:  _ckSZ,
    VSTROM1050XT:_ckSZ,
};


// ─── 3. DADOS DO MODELO (imagem + specs) ──────────────────────

var modeloInfo = {
    BURGMAN_I:   { nome:'Burgman i',          motor:'125cc · Scooter', trans:'CVT',      oleo:'Motul 10W40 · 1L',  intervalo:'6.000 km', img:'/images/SUZUKI/BURGMAN I.png'    },
    GSX800:      { nome:'GSX 800',            motor:'800cc · 2 cil.',  trans:'Corrente', oleo:'Motul 10W40 · 4L',  intervalo:'6.000 km', img:'/images/SUZUKI/GSX800.png'        },
    HAYABUSA:    { nome:'Hayabusa GSX1300R',  motor:'1300cc · 4 cil.', trans:'Corrente', oleo:'Motul 10W40 · 4L',  intervalo:'6.000 km', img:'/images/SUZUKI/HAYABUSA.png'      },
    GSXR1000:    { nome:'GSX-R1000 / A',      motor:'1000cc · 4 cil.', trans:'Corrente', oleo:'Motul 10W40 · 4L',  intervalo:'6.000 km', img:'/images/SUZUKI/GSXR1000.png'     },
    GSX750:      { nome:'GSX 750',            motor:'750cc · 4 cil.',  trans:'Corrente', oleo:'Motul 10W40 · 3L',  intervalo:'6.000 km', img:'/images/SUZUKI/GSX750.png'        },
    GSXS1000:    { nome:'GSX-S1000A',         motor:'1000cc · 4 cil.', trans:'Corrente', oleo:'Motul 10W40 · 4L',  intervalo:'6.000 km', img:'/images/SUZUKI/GSX-S1000GX.png'  },
    SV650A:      { nome:'SV 650A',            motor:'645cc · 2 cil.',  trans:'Corrente', oleo:'Motul 10W40 · 3L',  intervalo:'6.000 km', img:'/images/SUZUKI/SV650A.png'        },
    VSTROM650:   { nome:'V-Strom 650 A',      motor:'645cc · 2 cil.',  trans:'Corrente', oleo:'Motul 10W40 · 3L',  intervalo:'6.000 km', img:'/images/SUZUKI/VSTROM650.png'    },
    VSTROM800:   { nome:'V-Strom 800 DE',     motor:'776cc · 2 cil.',  trans:'Corrente', oleo:'Motul 10W40 · 4L',  intervalo:'6.000 km', img:'/images/SUZUKI/VSTROM800DE.png'  },
    VSTROM1000:  { nome:'V-Strom 1050',       motor:'1037cc · 2 cil.', trans:'Corrente', oleo:'Motul 10W40 · 4L',  intervalo:'6.000 km', img:'/images/SUZUKI/VSTROM1050.png'   },
    VSTROM1050XT:{ nome:'V-Strom 1050 XT',   motor:'1037cc · 2 cil.', trans:'Corrente', oleo:'Motul 10W40 · 4L',  intervalo:'6.000 km', img:'/images/SUZUKI/VSTROM1050XT.png' },
};


// ─── 4. CONFIGURAÇÕES ─────────────────────────────────────────

var KM_LISTA = [1000,6000,12000,18000,24000,30000,36000,42000,48000,54000,60000];

var pecasAvulsas = [
    { codigo:'MO-CORRENTE', nome:'Serviço: Regulagem Corrente',              valor:30  },
    { codigo:'MO-FREIO',    nome:'Serviço: Troca Pastilha Dianteira',         valor:60  },
    { codigo:'MO-FREIO2',   nome:'Serviço: Troca Pastilha Traseira',          valor:60  },
    { codigo:'MO-INJETOR',  nome:'Serviço: Limpeza Bico Injetor (por un.)',  valor:180 },
    { codigo:'MO-FREIO3',   nome:'Serviço: Verificar/Sangria (por un.)',     valor:220 },
    { codigo:'MO-TRANSM',   nome:'Serviço: Troca Kit Transmissão',           valor:280 },
    { codigo:'328185',      nome:'Produto: Kit Revisão',                      valor:70  },
    { codigo:'328186',      nome:'Produto: Kit Scooter',                      valor:70  },
    { codigo:'LUBMINI',     nome:'Lubrificante Corrente',                     valor:25  },
    { codigo:'DESMINI',     nome:'Desingripante',                             valor:20  },
    { codigo:'DESC01',      nome:'Descarbonizante',                           valor:35  },
];

var itensAdicionais = [];
function fmt(v) { return 'R$ ' + v.toFixed(2).replace('.', ','); }


// ─── 5. IMAGEM / CARD HERO ────────────────────────────────────

function atualizarImagemVeiculo() {
    var modelo = document.getElementById('veiculoSelect').value;
    var info   = modeloInfo[modelo] || null;

    /* Layout novo — #veiculoHero */
    var hero = document.getElementById('veiculoHero');
    if (hero) {
        if (!info) {
            hero.classList.remove('visivel');
        } else {
            var img   = document.getElementById('heroImg');
            var nome  = document.getElementById('heroNome');
            var specs = document.getElementById('heroSpecs');
            if (img)   img.src          = info.img;
            if (nome)  nome.textContent = info.nome;
            if (specs) specs.innerHTML  =
                '<span class="spec-pill spec-motor">'     + info.motor     + '</span>' +
                '<span class="spec-pill spec-trans">'     + info.trans     + '</span>' +
                '<span class="spec-pill spec-oleo">'      + info.oleo      + '</span>' +
                '<span class="spec-pill spec-intervalo">Rev. a cada ' + info.intervalo + '</span>';
            hero.classList.add('visivel');
        }
    }

    /* Layout legado — #veiculoCard */
    var card = document.getElementById('veiculoCard');
    if (card) {
        if (!info) {
            card.style.display = 'none';
        } else {
            var imgL = document.getElementById('img-veiculo');
            var nomeL = document.getElementById('veiculoNome');
            if (imgL)  imgL.src          = info.img;
            if (nomeL) nomeL.textContent = info.nome;
            card.style.display = 'block';
        }
    }
}


// ─── 6. LISTA DE KM ───────────────────────────────────────────

function atualizarKmPorVeiculo() {
    var sel = document.getElementById('kmSelect');
    sel.innerHTML = '<option value="">Selecione o KM</option>';
    KM_LISTA.forEach(function(km) {
        var o = document.createElement('option');
        o.value = km;
        o.textContent = km.toLocaleString('pt-BR') + ' km';
        sel.appendChild(o);
    });
}


// ─── 7. CÁLCULO (PEÇAS) ───────────────────────────────────────

function calcular() {
    var veiculo = document.getElementById('veiculoSelect').value;
    var km      = document.getElementById('kmSelect').value;
    var lista   = document.getElementById('listaPecas');

    if (!veiculo || !km) {
        lista.innerHTML = '<div class="no-result">👆 Selecione veículo e KM para ver as peças</div>';
        atualizarTotaisGerais();
        return;
    }

    var dv      = dadosRevisao[veiculo];
    var revisao = (dv && dv[parseInt(km)]) || [];

    if (!revisao.length) {
        lista.innerHTML = '<div class="no-result">Nenhuma peça cadastrada para esta revisão</div>';
    } else {
        var h = '<div class="peca-header"><div>Peça</div><div>Código</div><div>Qtd.</div><div>Total (R$)</div></div>';
        revisao.forEach(function(p) {
            h += '<div class="peca-item">' +
                 '<div class="peca-nome">'   + p.nome               + '</div>' +
                 '<div class="peca-codigo">' + p.codigo             + '</div>' +
                 '<div class="peca-qtd">'    + p.qtd                + '</div>' +
                 '<div class="peca-valor">'  + fmt(p.qtd * p.valor) + '</div>' +
                 '</div>';
        });
        lista.innerHTML = h;
    }
    atualizarTotaisGerais();
}


// ─── 8. CHECKLIST ─────────────────────────────────────────────

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
        { k:'T', lbl:'Trocar',      cls:'grupo-T' },
        { k:'I', lbl:'Inspecionar', cls:'grupo-I' },
        { k:'A', lbl:'Apertar',     cls:'grupo-A' },
    ];
    var h = '<div class="checklist-grupos">'; var tem = false;
    tipos.forEach(function(t) {
        var itens = ck[t.k];
        if (!itens || !itens.length) return; tem = true;
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

    var info = modeloInfo[veiculo] || {};
    h += '<div class="ck-nota"><strong>Suzuki ' + (info.nome || veiculo) + ':</strong> ' + (info.oleo || 'Motul 10W40') + ' por revisão.' +
         '<br>Corrente: verificar folga e lubrificar em toda revisão.' +
         '<br>Em condições severas (uso intenso, pista, clima extremo) reduza os intervalos.</div>';

    body.innerHTML = tem ? h : '<div class="ck-empty">Nenhum item cadastrado para esta revisão</div>';
    body.classList.add('aberto');
    document.getElementById('checklistToggle').classList.add('aberto');
}


// ─── 9. ITENS ADICIONAIS ──────────────────────────────────────

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


// ─── 10. TOTAIS ───────────────────────────────────────────────

function atualizarTotaisGerais() {
    var veiculo = document.getElementById('veiculoSelect').value;
    var km      = document.getElementById('kmSelect').value;
    var dv      = (veiculo && dadosRevisao[veiculo]) || {};
    var revisao = (km && dv[parseInt(km)]) || [];
    var tmoH    = (km && dv.tmo && dv.tmo[parseInt(km)]) || 0;
    var tmoHora = dv.tmoHora || 0;

    var totalP = revisao.reduce(function(s, p) { return s + p.qtd * p.valor; }, 0)
               + itensAdicionais.reduce(function(s, p) { return s + p.qtd * p.valor; }, 0);
    var totalT = tmoH * tmoHora;

    document.getElementById('totalPecas').textContent  = fmt(totalP);
    document.getElementById('totalTMO').textContent    = fmt(totalT);
    document.getElementById('totalGeral').textContent  = fmt(totalP + totalT);

    var n = revisao.length + itensAdicionais.length;
    document.getElementById('subPecas').textContent = n ? n + ' item(ns) no orçamento' : 'Sem itens selecionados';
    document.getElementById('subTMO').textContent   = tmoHora
        ? tmoH.toFixed(1).replace('.', ',') + ' h × R$ ' + tmoHora.toFixed(0) + ',00/h'
        : '0,0 h';
    document.getElementById('subTotal').textContent = 'Peças + Mão de Obra';
}


// ─── 11. EVENTOS ──────────────────────────────────────────────

function onVeiculoChange() {
    var veiculo = document.getElementById('veiculoSelect').value;
    atualizarImagemVeiculo();
    atualizarKmPorVeiculo();
    document.getElementById('kmSelect').value = '';
    calcular();
    renderizarChecklist(veiculo, '');
}

document.addEventListener('DOMContentLoaded', function() {
    var sel = document.getElementById('selectAvulso');
    pecasAvulsas.forEach(function(p, i) {
        var o = document.createElement('option');
        o.value = i;
        o.textContent = p.nome + ' — ' + fmt(p.valor);
        sel.appendChild(o);
    });
    renderizarItensAdicionais();

    document.getElementById('veiculoSelect').addEventListener('change', onVeiculoChange);
    document.getElementById('kmSelect').addEventListener('change', function() {
        calcular();
        renderizarChecklist(document.getElementById('veiculoSelect').value, this.value);
    });
});
