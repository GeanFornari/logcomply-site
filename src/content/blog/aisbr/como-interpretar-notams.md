---
title: "Guia prático: Como interpretar NOTAMs complexos no AIS BR"
description: "Aprenda a decodificar os principais tipos de NOTAM emitidos pelo DECEA, com exemplos reais e dicas para pilotos e despachantes."
pubDate: 2026-05-01
author: "Equipe Vektor Aero"
category: aisbr
tags: ["NOTAM", "AIS BR", "planejamento de voo", "DECEA", "aviação"]
relatedProduct: aisbr
draft: false
---

O NOTAM (Notice to Air Missions) é uma das ferramentas mais críticas no planejamento de voo. Mas sua linguagem compacta e cheia de abreviações pode ser um desafio — especialmente para pilotos que estão começando ou que voam com pouca frequência.

Neste guia, você vai aprender a interpretar os tipos de NOTAM mais comuns emitidos pelo DECEA, com exemplos reais e o que cada campo significa.

## O que é um NOTAM?

Um NOTAM é uma notificação oficial emitida por autoridades de aviação para alertar pilotos sobre condições temporárias que afetam a segurança ou a operação de aeronaves. Pode ser uma pista fechada, uma restrição de espaço aéreo, uma navegacional fora de serviço ou uma mudança de procedimento.

No Brasil, o DECEA (Departamento de Controle do Espaço Aéreo) é o responsável pela emissão e distribuição de NOTAMs.

## Estrutura básica de um NOTAM

Todo NOTAM segue uma estrutura padronizada definida pela ICAO. Veja o exemplo abaixo:

```
A1234/26 NOTAMN
Q) SBBS/QMRLC/IV/NBO/A/000/999/2327S04649W005
A) SBCF
B) 2605010800
C) 2605012000
E) RWY 17/35 CLSD DUE TO MAINTENANCE WORK
```

### Campo Q — A linha de decodificação rápida

É a linha mais densa, mas também a mais útil. Ela contém:

- **FIR**: `SBBS` — FIR de Brasília
- **Código Q**: `QMRLC` — Pista fechada (`MRL` = runway, `C` = closed)
- **Tráfego**: `IV` — IFR e VFR
- **Propósito**: `NBO` — Navegação, briefing, operações
- **Escopo**: `A` — Aeródromo
- **Limites de altitude**: `000/999` — do solo ao FL999
- **Coordenadas + raio**: `2327S04649W005` — posição do SBCF, raio de 5 nm

### Campo A — Aeródromo afetado

`SBCF` é o indicador ICAO do Aeroporto Internacional de Confins (BH). Se um NOTAM afetar múltiplos aeródromos, você verá vários códigos separados por espaço.

### Campos B e C — Vigência

- `B) 2605010800` — Início: 01 de maio de 2026 às 08:00 UTC
- `C) 2605012000` — Término: 01 de maio de 2026 às 20:00 UTC

Atenção: **todos os horários em NOTAM são em UTC**, não no horário local do aeródromo.

### Campo E — Texto descritivo

É aqui que está a informação principal, em texto livre: `RWY 17/35 CLSD DUE TO MAINTENANCE WORK` — a pista 17/35 está fechada para manutenção.

## Abreviações essenciais para saber de cor

| Abreviação | Significado |
|---|---|
| RWY | Runway (Pista) |
| TWY | Taxiway |
| CLSD | Closed (Fechado) |
| WIP | Work in progress |
| AVBL | Available (Disponível) |
| OPR | Operational / Operate |
| APRX | Approximately |
| BTN | Between |
| TIL | Until |
| PERM | Permanent |

## NOTAMs de espaço aéreo — os mais críticos

Os NOTAMs de restrição de espaço aéreo (`QRXXX`) são os que mais impactam o planejamento de rota. Veja um exemplo:

```
E) RESTRICTED AREA R-201 ACT BTN SFC/FL100 DUE TO MILITARY EXERCISE.
ATC CLR MANDATORY.
```

Neste caso, a área restrita R-201 está ativa do solo até FL100, e você vai precisar de autorização do ATC para cruzar.

## Como o AIS BR facilita a leitura de NOTAMs

O app AIS BR organiza automaticamente os NOTAMs por aeródromo, tipo e vigência — eliminando a necessidade de vasculhar arquivos NOTAM brutos. Você vê apenas o que é relevante para o seu voo, com os campos traduzidos e organizados visualmente.

Além disso, o AIS BR cruza os NOTAMs ativos com a sua rota planejada, destacando as restrições que podem impactar a operação.

## Conclusão

Saber ler um NOTAM é uma habilidade fundamental. A chave está em entender a estrutura do campo Q para filtrar rapidamente o que é relevante, e prestar atenção sempre nos horários em UTC.

Com a prática — e com ferramentas como o AIS BR — essa leitura se torna cada vez mais rápida e precisa.
