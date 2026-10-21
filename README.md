# 🏍️ Portal TMO — Suzuki, Haojue e Zontes

> Ferramenta interna de Pós-Vendas da **Comeri Suzuki** para cálculo de revisões, consulta de TMO (Tempo Médio de Obra) e vitrine de acessórios.

🔗 **[Acesse o Portal](https://igorbernardino.github.io/Ferramenta-TMO/)**

---

## 📋 Sobre o Projeto

O **Portal TMO** é uma aplicação web estática desenvolvida para agilizar o atendimento da equipe de pós-vendas. Centraliza em um único lugar as calculadoras de revisão por marca, a tabela consolidada de TMO e a vitrine virtual de capacetes e acessórios.

---

## ✨ Funcionalidades

### 🔧 Calculadoras de Revisão
Tabelas interativas de revisão com quilometragem, peças correspondentes e TMO em horas — pensadas para agilizar a geração de orçamentos.

| Marca | Modelos | Descrição |
|-------|---------|-----------|
| **Suzuki** | 11 modelos — Burgman i a Hayabusa | Peças, códigos, TMO e checklist por KM |
| **Haojue** | DK/DR/DL 160, NK 150, NK 160, Master Ride, Chopper Road, Lindy 125 | Peças, códigos, TMO e checklist por KM |
| **Zontes** | V/T/GK/S/R 350, 350 E (nova e antiga), 368G | Peças, códigos, TMO e checklist por KM |

> **350 E — duas versões:** as unidades vendidas **a partir de 01/02/2026** seguem o plano
> de 4 em 4 mil km; as anteriores a **31/01/2026** seguem o plano antigo, com troca de óleo
> a cada 3.000 km. As duas estão cadastradas separadamente.
>
> A 350 E nova é vendida por **preço fechado por revisão**, não por TMO × hora. A tabela
> fica em `dadosRevisao.E350.pacote` (revisão) e `DADOS.zontes.pacoteE350` (agendamento) —
> mantenha as duas iguais. A mão de obra exibida é `pacote − peças`; no 1.000 km ela sai
> zerada, porque a revisão de entrega é de cortesia. A correia CVT (R$ 1.150) entra no
> **20.000 km**.
>
> | KM | 1.000 | 4.000 | 8.000 | 12.000 | 16.000 | 20.000 | 24.000 |
> |----|------|------|------|-------|-------|-------|-------|
> | Total | R$ 260 | R$ 660 | R$ 980 | R$ 800 | R$ 980 | R$ 2.300 | R$ 1.200 |

> **368G:** plano de 6 em 6 mil km — 1.000 (entrega), 6.000, 12.000, 18.000 e 24.000.
> As revisões de 6.000 e 18.000 são leves (óleo + filtro de ar); as de 12.000 e 24.000
> são completas (acrescentam filtro de óleo, vela e óleo de CVT). A correia de
> transmissão CVT (R$ 1.150) entra no **18.000 km**. É uma Zontes: mão de obra a
> R$ 350/h, não a tabela Suzuki — antes estava cadastrada como `GSX_S800_368G`.

### 📊 Tabela TMO Completa
Base consolidada de tempos de serviço para **Suzuki, Haojue e Zontes**, com busca por código e descrição do serviço. Cobre múltiplos modelos de motocicletas.

### 📅 Agendamento e Dashboard
Formulário público de agendamento de revisão para as 5 unidades da Baixada Santista
(Guarujá, Santos, São Vicente, Praia Grande e Peruíbe), com cálculo do orçamento
estimado, validação de dia útil e feriados, e envio por WhatsApp para a loja escolhida.
O dashboard interno mostra o calendário mensal e permite alterar o status de cada
agendamento (Agendado · Confirmado · Concluído · Cancelado).

> ⚠️ O dashboard **não tem autenticação** e expõe dados de clientes. Ver *Pendências*.

### 🛒 Vitrine Virtual
Consulta de capacetes, acessórios e diversos com visualização de cores e disponibilidade de estoque por loja.

---

## 🗂️ Estrutura do Repositório

```
Ferramenta-TMO/
│
├── index.html                      # Portal de acesso (página inicial)
│
├── style/                          # CSS das páginas principais
│   ├── index.css
│   ├── revisoes.css
│   └── servicos.css
│
├── script/                         # Dados e lógica das calculadoras
│   ├── tmo-data.js                 # Base TMO — 34 modelos, ~5.200 serviços
│   ├── calculadora-tmo-unificada.js
│   ├── app-tmo.js
│   ├── revisaosuzuki.js            # Peças, TMO e checklist — Suzuki
│   ├── revisaohaojue.js            # Peças, TMO e checklist — Haojue
│   └── revisaozontes.js            # Peças, TMO e checklist — Zontes
│
├── Revisoes/                       # Calculadoras de revisão por marca
│   ├── tmosuzuki.html
│   ├── tmohaojue.html
│   └── tmozontes.html
│
├── TMO/
│   └── Servicos.html               # Tabela de Tempo Médio de Obra
│
├── agendamento/                    # Agendamento online + dashboard interno
│   ├── agendamento.html            # Formulário público (6 etapas)
│   ├── agendamento.js              # Planos de revisão, feriados, integração
│   ├── agendamento.css
│   ├── dashboard.html              # Calendário mensal das 5 unidades
│   └── dashboard.css
│
├── vitrine/                        # Vitrine virtual de acessórios
│   ├── vitrine.html
│   ├── style.css
│   └── acessorios/                 # Fotos dos produtos
│
├── test/                           # Testes automatizados (npm test)
├── package.json                    # Só o comando de teste — sem dependências
│
└── images/                         # Logos e fotos das motos
    ├── SUZUKI/  ├── HAOJUE/  └── ZONTES/
```

---

## 🚀 Como Usar

Este é um projeto puramente estático (HTML, CSS e JavaScript). Não requer instalação de dependências ou servidor backend.

### Acessar online
Acesse diretamente pelo link:
```
https://igorbernardino.github.io/Ferramenta-TMO/
```
---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura das páginas
- **CSS3** — Estilização e layout responsivo
- **JavaScript** — Lógica de cálculo e interatividade
- **GitHub Pages** — Hospedagem gratuita e deploy automático

---

## 📦 Deploy

O projeto utiliza o **GitHub Pages** para hospedagem. Qualquer push na branch principal (`main` ou `master`) atualiza automaticamente o site publicado.

Para ativar o GitHub Pages em um fork:
1. Vá em **Settings** → **Pages**
2. Em *Source*, selecione a branch `main` e a pasta `/ (root)`
3. Salve — o site estará disponível em `https://<seu-usuario>.github.io/Ferramenta-TMO/`

---

## 🧪 Testes Automatizados

O projeto conta com suíte de testes unitários e de integração utilizando o runner nativo do Node.js (sem dependências externas; Node 21 ou mais novo):

```bash
npm test
```

Os testes carregam os scripts reais do site numa "caixa de areia" (`test/helpers.js`),
com `window`/`document` falsos — não testam cópias das funções.

Cobre:
- Sincronização de **cada revisão** (peças e TMO) entre as calculadoras e o agendamento.
- Todas as combinações marca × modelo × km: total finito, não negativo e = peças + mão de obra.
- Regras de negócio de revisão (ciclos de peças, planos fechados, CVT, pacote Suzuki 6.000 km).
- Feriados móveis (Páscoa / Carnaval / Corpus Christi), dias úteis, virada de ano e ano bissexto.
- Validação dos dados do cliente (placa, telefone, odômetro, textos longos) e escape de HTML.
- Falhas de rede: consulta de horários e confirmação não podem esconder o erro do cliente.
- Itens adicionais das calculadoras (quantidade sempre entre 1 e 99) e formatação em R$.
- Horário vindo do Google Sheets no dashboard (formato `1899-12-30T…`).

---

## ⚠️ Pendências conhecidas e Segurança

- **Dashboard sem autenticação no Apps Script** — a URL do Apps Script está no frontend público, permitindo chamadas diretas às ações `listar_agendamentos` e `atualizar_status`. Recomenda-se adicionar validação de token ou PIN de acesso no Apps Script e no dashboard interno.
- **Feriados municipais** — só os nacionais são bloqueados. Feriados das cidades (ex.: aniversário de Santos, 26/01) ainda aparecem como dia útil.
- **Checklist do agendamento × calculadoras** — o checklist do agendamento é genérico (ciclo de 12 mil km) e não segue o plano da 350 E nova (4 mil km) nem da 368G (6 mil km); as peças e os preços já batem, só a lista de itens exibida ao cliente difere.
- **Caminhos relativos e portabilidade** — *(Resolvido)* Todos os caminhos foram convertidos para relativos, funcionando em qualquer subdiretório, domínio customizado ou localmente (`file://`).
- **Sincronização de preços** — *(Resolvido)* Preços de peças e óleo do agendamento sincronizados com as calculadoras e protegidos por testes automatizados.
---

## 📄 Licença

Este projeto é de uso interno. Todos os direitos reservados para <strong>Igor Bernardino<strong>.

---

<p align="center">
  Desenvolvido por <strong>Igor Bernardino</strong> · © 2025 Portal TMO Oficina
</p>


 
