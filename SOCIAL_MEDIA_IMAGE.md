# 🖼️ Imagem para WhatsApp e Redes Sociais

## ⚠️ AÇÃO NECESSÁRIA

O código já está atualizado para usar `og-image.png`. Você precisa criar essa imagem com as especificações abaixo.

## 📐 Especificações OBRIGATÓRIAS

### Dimensões:
- **1200 x 630 pixels** (proporção 1.91:1)
- Formato: **PNG** (melhor qualidade) ou JPG
- Tamanho: < 300KB (WhatsApp limita a 5MB, mas menor é melhor)
- Nome: **og-image.png**
- Local: **public/og-image.png**

### Área Segura (evita cortes no WhatsApp):
- Deixe **100px de margem** em todos os lados
- Centralize o logo e texto na área de **1000 x 430 pixels**
- O WhatsApp pode cortar as bordas em alguns dispositivos

## 🎨 Sugestões de Design

### Opção 1 - Layout Simples:
```
┌─────────────────────────────────────┐
│                                     │
│         [LOGO VEKTOR AERO]          │  ← Logo menor, centralizado
│                                     │
│  A plataforma indispensável para    │
│      sua cabine de comando          │
│                                     │
│   RBAC 117 | iOS & Android          │
│                                     │
└─────────────────────────────────────┘
```

### Opção 2 - Layout com Fundo:
- Usar `painel.png` como fundo (opacidade 30%)
- Logo branco/verde centralizado
- Texto em destaque sobre overlay escuro

### Cores Recomendadas:
- Fundo: **#0B1726** (azul escuro do site)
- Texto: **#FFFFFF** (branco)
- Destaque: **#22C55E** (verde do logo)

## 🛠️ Como Criar

### Usando Canva (Recomendado):
1. Acesse: https://www.canva.com
2. Criar design → Dimensões personalizadas → 1200 x 630 px
3. Adicione o logo (menor, centralizado)
4. Adicione texto: "Vektor Aero" + tagline
5. Baixe como PNG
6. Salve em: `public/og-image.png`

### Usando Photoshop/Figma:
1. Novo arquivo 1200x630px
2. Fundo: #0B1726
3. Logo centralizado (máx 400px de largura)
4. Texto legível (fonte > 36px)
5. Exportar como PNG
6. Salvar em: `public/og-image.png`

### Usando o Logo Atual:
Se quiser usar `logo.png`:
1. Abra em editor de imagens
2. Redimensione canvas para 1200x630px
3. Centralize o logo
4. Adicione padding/margens
5. Salve como `og-image.png`

## ✅ Checklist

Antes de fazer upload, verifique:
- [ ] Dimensões: exatamente 1200 x 630 pixels
- [ ] Logo visível e não cortado (com margens)
- [ ] Texto legível em dispositivos móveis
- [ ] Arquivo < 300KB
- [ ] Nome: `og-image.png`
- [ ] Local: pasta `public/`

## 🧪 Testar

Após fazer deploy:

1. **Limpar cache do WhatsApp:**
   - Abra: https://developers.facebook.com/tools/debug/
   - Cole: https://vektoraero.com.br
   - Clique: "Scrape Again"

2. **Testar no WhatsApp:**
   - Envie o link em uma conversa
   - Aguarde alguns segundos
   - Veja se aparece logo + título + descrição

3. **Outros testes:**
   - Facebook: https://developers.facebook.com/tools/debug/
   - LinkedIn: https://www.linkedin.com/post-inspector/
   - Twitter: https://cards-dev.twitter.com/validator

## 📊 Status Atual

✅ Código atualizado para usar `og-image.png`
✅ Meta tags Open Graph configuradas
✅ Dimensões otimizadas (1200x630)
⚠️ **FALTA:** Criar o arquivo `public/og-image.png`

## 💡 Dica Rápida

Se preferir usar temporariamente uma das imagens existentes:
- Use `tela_app.png` redimensionada e centralizada
- Ou `logo.png` com mais espaço ao redor

Mas o ideal é criar uma imagem específica seguindo as especificações acima!

