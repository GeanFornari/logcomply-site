# Roadmap: Seção de Conteúdo (Blog / Knowledge Base) — Vektor Aero

> Análise estratégica e técnica para implementação de uma seção de conteúdo focada nas dores do usuário no nicho de aviação brasileira.

---

## 1. Diagnóstico do Contexto Atual

### O site hoje

O site **vektoraero.com.br** hospeda três produtos distintos:

| Produto | Público-alvo | Dor Central |
|---|---|---|
| **Journey Comply** | Operadores de voo, gestores de segurança | Conformidade RBAC 117 (gestão de fadiga) |
| **AIS BR** | Pilotos, despachantes, instrutores | Acesso e interpretação de informações aeronáuticas (ROTAER, NOTAMs, METAR) |
| **KontrolSub** | Pessoas físicas e pequenos negócios | Gastos com assinaturas digitais fora de controle |

O stack é **Astro 5 + Tailwind CSS**, já com suporte a Content Collections (`src/content/`) — isso é um ativo enorme, pois a infraestrutura técnica para um blog está a poucos passos de ser implementada.

### O que falta

- Não existe nenhuma rota de conteúdo editorial (blog, artigos, glossário)
- Não há tag `<link rel="canonical">` contextualizado por artigo
- Não existe estratégia de internal linking entre produtos e conteúdo
- O tráfego orgânico, se existe, vem exclusivamente das landing pages estáticas

---

## 2. Estratégia: Por que "Dores do Usuário" é a abordagem certa

### O problema com conteúdo genérico

Conteúdo genérico ("O que é RBAC?") compete com centenas de fontes. A Vektor Aero tem uma vantagem competitiva única: **conhecimento profundo e aplicado** de um nicho regulatório muito específico. Isso precisa ser o diferencial editorial.

### O princípio orientador

> Cada artigo deve responder a uma pergunta que o usuário já está fazendo antes de conhecer a Vektor Aero.

Isso transforma o blog em um **funil de descoberta** — o usuário chega buscando uma resposta, encontra o artigo, descobre o produto que resolve o problema.

### Funil esperado

```
Busca Google ("como interpretar NOTAM")
          ↓
    Artigo no blog
          ↓
  CTA contextual para o AIS BR
          ↓
   Download / Cadastro
```

---

## 3. Arquitetura Técnica Recomendada

### 3.1 Usar Astro Content Collections (já existe a base)

O projeto já tem `src/content/legal/` funcionando com Glob loader. A extensão para blog é natural e sem fricção.

**Estrutura de pastas proposta:**

```
src/
└── content/
    ├── legal/              # já existe
    └── blog/
        ├── journey-comply/ # artigos sobre RBAC 117, fadiga, ops
        ├── aisbr/          # artigos sobre NOTAMs, AIS, ROTAER
        ├── kontrolsub/     # artigos sobre gestão de assinaturas
        └── aviacao/        # artigos gerais sobre aviação civil brasileira
```

**Roteamento proposto:**

```
/blog/                          → Lista geral de artigos
/blog/[slug]/                   → Artigo individual
/blog/journey-comply/           → Artigos do produto
/blog/aisbr/                    → Artigos do produto
/blog/kontrolsub/               → Artigos do produto
```

### 3.2 Schema de Frontmatter para Artigos

Cada artigo `.md` ou `.mdx` teria um frontmatter padronizado:

```yaml
---
title: "Como o RBAC 117 impacta a jornada de pilotos de helicóptero?"
description: "Entenda os limites de jornada, períodos de descanso e como a regulação afeta operações reais."
pubDate: 2026-05-01
updatedDate: 2026-05-15        # opcional — sinaliza conteúdo atualizado para SEO
author: "Equipe Vektor Aero"
category: journey-comply        # journey-comply | aisbr | kontrolsub | aviacao
tags: ["RBAC 117", "helicóptero", "jornada de trabalho", "fadiga"]
image:
  src: /images/blog/rbac-117-helicoptero.webp
  alt: "Piloto de helicóptero em cockpit"
relatedProduct: journey-comply  # usado para CTA contextual automático
draft: false
---
```

### 3.3 Layout do Artigo

Um novo `BlogLayout.astro` que herda do `Layout.astro` existente, adicionando:

- Schema.org `Article` / `BlogPosting` (JSON-LD) para rich snippets no Google
- Breadcrumb: Home → Blog → Categoria → Artigo
- Barra lateral ou seção de CTA contextual baseada em `relatedProduct`
- Estimativa de tempo de leitura (calculado no build)
- Artigos relacionados ao final (mesma categoria)
- Open Graph com imagem do artigo

### 3.4 Integração com o Header existente

Adicionar "Blog" no dropdown "Soluções" ou como item standalone no Header principal — com sub-links por categoria de produto.

---

## 4. Roadmap de Implementação

### Fase 1 — Fundação (2 semanas)

**Objetivo:** Infraestrutura técnica pronta, zero artigos publicados.

| Tarefa | Detalhe |
|---|---|
| Definir schema do Content Collection `blog` | Zod schema com todos os campos obrigatórios e opcionais |
| Criar `BlogLayout.astro` | Herda Layout.astro, adiciona JSON-LD Article, breadcrumb |
| Criar página `/blog/index.astro` | Lista de artigos com filtro por categoria |
| Criar página `/blog/[slug].astro` | Renderiza artigo individual com CTA contextual |
| Criar componente `ArticleCard.astro` | Card de preview com imagem, título, data, tempo de leitura |
| Criar componente `CTAContextual.astro` | Banner ou seção chamando para o produto relacionado ao artigo |
| Adicionar "Blog" na navegação | Header principal |
| Configurar sitemap para incluir `/blog/*` | `astro.config.mjs` já tem `@astrojs/sitemap` |

### Fase 2 — Conteúdo Inicial (4 semanas)

**Objetivo:** Publicar os primeiros 6 artigos fundadores — 2 por produto.

| Semana | Artigo | Produto |
|---|---|---|
| S1 | Como o RBAC 117 impacta a jornada de pilotos de helicóptero? | Journey Comply |
| S1 | Guia prático: Como interpretar NOTAMs complexos no AIS BR | AIS BR |
| S2 | 5 dicas para economizar com assinaturas digitais usando KontrolSub | KontrolSub |
| S2 | RBAC 117: O que muda para operadores de transporte aéreo regional | Journey Comply |
| S3 | ROTAER: como usar informações de aeródromos na prática | AIS BR |
| S4 | Assinatura digital vs. assinatura eletrônica: qual usar nos contratos de voo? | Aviação geral |

### Fase 3 — SEO & Distribuição (ongoing, a partir do mês 2)

**Objetivo:** Transformar conteúdo em tráfego orgânico consistente.

| Ação | Detalhe |
|---|---|
| Google Search Console | Monitorar indexação e performance por artigo |
| Internal linking | Cada landing page menciona 1-2 artigos relevantes |
| Link building passivo | Compartilhar artigos em grupos de pilotos (WhatsApp, Telegram, fóruns ANAC) |
| Rich snippets | Implementar FAQ schema em artigos com perguntas frequentes |
| Velocidade | Garantir que `/blog/*` mantém nota A no PageSpeed (Astro já ajuda muito) |

### Fase 4 — Escala & Autoridade (a partir do mês 3)

| Ação | Detalhe |
|---|---|
| Cadência editorial | 2 artigos/mês por produto = 6 artigos/mês |
| Guest posts | Convidar instrutores, despachantes, DPOs da aviação para contribuir |
| Glossário interativo | `/blog/glossario/` com termos técnicos da aviação civil brasileira |
| Newsletter | Integrar com o campo de newsletter já existente no Footer do KontrolSub |
| Série de conteúdo | "Guia completo RBAC 117 em 5 partes" como âncora de SEO de cauda longa |

---

## 5. Banco de Pautas por Produto

### Journey Comply — RBAC 117 / Fadiga

| Pauta | Palavra-chave principal | Intenção |
|---|---|---|
| Como o RBAC 117 impacta a jornada de pilotos de helicóptero? | "RBAC 117 helicóptero" | Educacional |
| RBAC 117 x FAR 117: diferenças que todo piloto brasileiro precisa saber | "RBAC 117 diferenças" | Comparação |
| Como montar uma escala de voo dentro da RBAC 117 sem erros | "escala de voo RBAC 117" | Prático |
| O que é fadiga operacional e como a ANAC regula isso? | "fadiga operacional aviação" | Educacional |
| Auditoria de jornada: o que a ANAC verifica numa fiscalização? | "fiscalização ANAC jornada piloto" | Alerta/Dor |
| Multas por descumprimento do RBAC 117: casos reais e como evitar | "multa RBAC 117" | Alta intenção |
| FRMS: o que é e quando a regulação exige para sua operação? | "FRMS aviação Brasil" | Educacional |
| Diferença entre tempo de serviço e tempo de voo no RBAC 117 | "tempo serviço voo RBAC 117" | Conceitual |

### AIS BR — Informações Aeronáuticas

| Pauta | Palavra-chave principal | Intenção |
|---|---|---|
| Guia prático: Como interpretar NOTAMs complexos | "como interpretar NOTAM" | Prático |
| ROTAER digital: como consultar informações de aeródromos no celular | "ROTAER digital celular" | Prático |
| METAR e TAF: diferenças e quando usar cada um no planejamento de voo | "METAR TAF diferença" | Educacional |
| AIS BR vs. REDEMET: qual usar para planejamento de voo VFR? | "AIS BR REDEMET diferença" | Comparação |
| O que é um SIGMET e quando ele cancela seu voo? | "SIGMET cancelamento voo" | Alerta |
| Como acompanhar restrições de espaço aéreo em tempo real | "restrição espaço aéreo tempo real" | Prático |
| Checklist pré-voo usando apenas o celular: o que o AIS BR oferece | "checklist pré-voo celular" | Prático |
| Cartografia aeronáutica brasileira: o que mudou com a digitalização? | "carta aeronáutica digital Brasil" | Educacional |

### KontrolSub — Gestão de Assinaturas

| Pauta | Palavra-chave principal | Intenção |
|---|---|---|
| 5 dicas para economizar com assinaturas digitais | "economizar assinaturas digitais" | Prático |
| Quanto você gasta por mês em assinaturas sem perceber? | "quanto gasto assinaturas digitais" | Dor/Diagnóstico |
| Como cancelar assinaturas esquecidas no cartão de crédito | "cancelar assinatura esquecida cartão" | Alta intenção |
| App de controle de assinaturas: vale a pena usar? | "app controle assinaturas" | Comparação |
| Assinatura digital vs. compra única: quando cada uma vale a pena? | "assinatura digital vs compra única" | Educacional |
| Como organizar assinaturas da empresa e não perder dinheiro | "assinaturas digitais empresa controle" | B2B |

### Aviação Geral (Cross-brand / Topo de Funil)

| Pauta | Palavra-chave principal | Intenção |
|---|---|---|
| Assinatura digital na aviação: o que é válido legalmente no Brasil? | "assinatura digital aviação Brasil" | Educacional |
| Como a ANAC está modernizando a regulação para operadores digitais? | "ANAC digitalização regulação" | Tendência |
| Glossário da aviação civil brasileira: 50 termos que todo piloto precisa conhecer | "glossário aviação civil brasileira" | SEO/âncora |
| Carreiras na aviação: o que muda com a digitalização dos documentos? | "carreira aviação digitalização" | Topo de funil |

---

## 6. Considerações de SEO

### Schema.org prioritário

- `BlogPosting` em cada artigo (já temos o padrão em `Layout.astro` para `Organization`)
- `BreadcrumbList` automático a partir do frontmatter
- `FAQPage` em artigos com seção de perguntas frequentes

### Canonical e hreflang

- O blog será apenas em **Português** inicialmente (público-alvo Journey Comply e AIS BR é 100% Brasil)
- KontrolSub tem suporte multilingual — considerar traduzir artigos relevantes no futuro
- Tag `<link rel="canonical">` obrigatória em cada artigo para evitar duplicação

### Core Web Vitals

- Astro gera HTML estático — artigos terão LCP excelente por padrão
- Imagens: usar formato `.webp`, definir `width`/`height` explícitos, `loading="lazy"` em imagens abaixo da dobra
- Fontes: já temos `ethnocentric.css` com `font-display: swap`

### Internal Linking Strategy

- Cada landing page de produto deve referenciar 2-3 artigos relevantes ("Saiba mais sobre RBAC 117")
- Cada artigo deve linkar para 1-2 outros artigos relacionados
- Criar um componente `RelatedArticles.astro` para automatizar isso por tag/categoria

---

## 7. Métricas de Sucesso

| KPI | Meta 3 meses | Meta 6 meses |
|---|---|---|
| Artigos publicados | 6 | 18 |
| Cliques orgânicos/mês (GSC) | 200 | 1.000 |
| Impressões orgânicas/mês | 5.000 | 20.000 |
| Conversões via CTA do blog | 10 leads | 50 leads |
| Artigos na primeira página do Google | 1 | 5 |

---

## 8. Decisões a Tomar

Antes de iniciar a implementação, alinhar:

1. **Quem escreve?** Equipe interna, freelancer especializado em aviação, ou híbrido?
2. **Cadência de publicação:** 1 artigo/semana ou 2/mês no início?
3. **URL do blog:** `/blog/` (recomendado — mesmo domínio, consolida autoridade) ou subdomínio `blog.vektoraero.com.br`?
4. **Comentários:** Implementar Disqus / comentários nativos ou manter o blog estático?
5. **Newsletter:** Usar o formulário já existente no Footer do KontrolSub ou criar uma lista separada para o blog?
6. **Imagens dos artigos:** Criar banco de imagens próprio (aviação tem boas fotos no Unsplash) ou usar ilustrações?

---

## 9. Recomendação Final

**Comece pequeno, com qualidade alta.**

A tentação é lançar com 10 artigos rasos. O caminho certo é lançar com **6 artigos profundos** (1.500–2.500 palavras cada), que respondam completamente a perguntas reais do usuário. Um artigo que ranqueia na primeira página do Google por "como interpretar NOTAM" vale mais do que 20 artigos medianos.

**Prioridade de execução:**

1. Fase 1 técnica primeiro (2 semanas) — sem ela, nada vai a ar
2. Artigo piloto: **"Guia prático: Como interpretar NOTAMs complexos no AIS BR"** — maior volume de busca e menor concorrência
3. Segundo artigo: **"Como o RBAC 117 impacta a jornada de pilotos de helicóptero?"** — alta dor, alta conversão potencial
4. Medir, ajustar, escalar

---

*Documento gerado em: 2026-04-22*  
*Responsável: Equipe Vektor Aero*
