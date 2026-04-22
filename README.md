# Vektor Aero — Site Institucional

Site institucional da **Vektor Aero** hospedando três produtos voltados ao setor de aviação civil brasileira e gestão de assinaturas digitais.

**URL de produção:** https://vektoraero.com.br  
**Deploy:** Vercel (static)

---

## Produtos

| Produto | Rota | Descrição |
|---|---|---|
| **Journey Comply** | `/journeycomply` | Gestão de fadiga e conformidade RBAC 117 |
| **AIS BR** | `/aisbr` | Informações aeronáuticas (ROTAER, NOTAMs, METAR) |
| **KontrolSub** | `/kontrolsub/[lang]` | Controle de assinaturas digitais (multilíngue) |

---

## Stack

- [Astro 5](https://astro.build/) — geração de site estático
- [Tailwind CSS 4](https://tailwindcss.com/) — estilização
- [Vercel](https://vercel.com/) — hospedagem e deploy

---

## Estrutura do Projeto

```
/
├── public/                         # Assets estáticos (robots.txt, favicon, fontes)
├── docs/                           # Documentação e planejamento do projeto
├── src/
│   ├── assets/                     # Imagens e mídias importadas pelo Astro
│   ├── components/
│   │   ├── Button.astro
│   │   ├── Header.astro            # Header principal com dropdown "Soluções"
│   │   ├── HeaderProduct.astro     # Header reutilizável para páginas de produto
│   │   ├── HeaderJourneyComply.astro
│   │   ├── Welcome.astro
│   │   └── kontrolsub/             # Componentes exclusivos do KontrolSub
│   │       ├── Header.astro
│   │       ├── Footer.astro        # Inclui formulário de newsletter
│   │       ├── FeatureCard.astro
│   │       └── AppMockup.astro
│   ├── content/
│   │   └── legal/
│   │       └── kontrolsub/         # Documentos legais do KontrolSub em 5 idiomas
│   │           ├── terms-of-use/   # pt, en, es, fr, de
│   │           ├── privacy-policy/ # pt, en, es, fr, de
│   │           └── delete-account/ # pt, en, es, fr, de
│   ├── i18n/
│   │   └── kontrolsub/
│   │       ├── ui.ts               # 244 chaves de tradução (pt, en, es, fr, de)
│   │       └── utils.ts            # getLangFromUrl(), useTranslations()
│   ├── layouts/
│   │   ├── Layout.astro            # Layout principal (GA, schema.org, meta tags)
│   │   └── KontrolSubLayout.astro  # Layout do KontrolSub (hreflang, OpenGraph)
│   ├── pages/
│   │   ├── index.astro             # Home
│   │   ├── sobre-nos.astro
│   │   ├── journeycomply.astro
│   │   ├── privacidade.astro
│   │   ├── termos-de-uso.astro
│   │   ├── eula.astro
│   │   ├── exclusao-de-conta.astro
│   │   ├── obrigado.astro
│   │   ├── aisbr/
│   │   │   ├── index.astro
│   │   │   ├── privacidade.astro
│   │   │   ├── termos-de-uso.astro
│   │   │   ├── eula.astro
│   │   │   └── exclusao-de-conta.astro
│   │   └── kontrolsub/
│   │       ├── index.astro         # Redireciona para /pt/
│   │       └── [lang]/
│   │           ├── index.astro     # Landing page multilíngue (pt, en, es, fr, de)
│   │           └── legal/
│   │               └── [document].astro  # Documentos legais dinâmicos
│   └── styles/
│       ├── global.css
│       ├── ethnocentric.css        # Fonte customizada Ethnocentric
│       └── kontrolsub.css          # Animações reveal, efeitos glass
├── astro.config.mjs
├── tailwind.config.mjs             # Cores: orange #FF6B35, blue #1E3A5F
├── vercel.json                     # Headers de segurança, redirects, cache
└── content.config.ts               # Schema do Content Collection (legal)
```

---

## Comandos

Todos os comandos são executados na raiz do projeto:

| Comando | Ação |
|---|---|
| `npm install` | Instala dependências |
| `npm run dev` | Servidor local em `localhost:4321` |
| `npm run build` | Build de produção em `./dist/` |
| `npm run preview` | Preview do build antes do deploy |
| `npm run astro ...` | CLI do Astro (`astro add`, `astro check`, etc.) |

---

## i18n — KontrolSub

O KontrolSub suporta 5 idiomas via roteamento estático:

| Idioma | Rota |
|---|---|
| Português (padrão) | `/kontrolsub/pt/` |
| English | `/kontrolsub/en/` |
| Español | `/kontrolsub/es/` |
| Français | `/kontrolsub/fr/` |
| Deutsch | `/kontrolsub/de/` |

A detecção de idioma usa `getLangFromUrl()` em `src/i18n/kontrolsub/utils.ts`. O redirect da raiz `/kontrolsub/` para `/pt/` é gerenciado no `vercel.json`.

---

## Content Collections

Configurado em `content.config.ts` com Glob loader:

- **`legal`** — documentos legais do KontrolSub em Markdown, organizados por tipo e idioma
- Renderizados dinamicamente em `/kontrolsub/[lang]/legal/[document]`

---

## Identidade Visual

| Token | Valor |
|---|---|
| Cor primária | `#FF6B35` (laranja) |
| Cor secundária | `#1E3A5F` (azul escuro) |
| Background | `#0B1726` (escuro) |
| Fonte display | Ethnocentric |
| Fonte corpo | Inter |

---

## Deploy

O site é deployado automaticamente na Vercel a cada push na branch `main`. O `vercel.json` configura:

- Headers de segurança (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)
- Cache de longa duração para fontes e imagens (1 ano)
- Redirect de `/kontrolsub` → `/kontrolsub/pt/`
