# Birô Principia — Versão Inicial

Site institucional em **Next.js 14 + TypeScript** para publicação no **Vercel**, com estrutura inicial para evolução de serviços, portfólio e blog.

## O que esta versão entrega
- Home com seções: apresentação, sobre, serviços, portfólio (galeria), blog e contato.
- Visual moderno com paleta offwhite/cinza e acentos azul/vermelho.
- Estrutura de conteúdo desacoplada em `content/site.ts` para facilitar migração para CMS.
- Metadados básicos de SEO e JSON-LD de organização.
- Rotas iniciais (`/servicos`, `/portfolio`, `/blog`, `/contato`) para evolução incremental.

## Rodar localmente
```bash
npm install
npm run dev
```
Acesse: `http://localhost:3000`

## Validação
```bash
npm run lint
npm run build
```

## Deploy na Vercel
1. Suba o repositório no GitHub.
2. Importe o projeto na Vercel.
3. Framework detectado: Next.js.
4. Comandos padrão:
   - Install: `npm install`
   - Build: `npm run build`
5. Configure domínio customizado e variáveis de ambiente quando integrar APIs/CMS.

## Próxima evolução recomendada
1. Integrar CMS (Sanity ou Strapi) para conteúdo dinâmico.
2. Criar `app/blog/[slug]/page.tsx` e `app/portfolio/[slug]/page.tsx`.
3. Conectar formulário com rota API + envio de e-mail.
4. Adicionar analytics e monitoramento (GA4, Clarity, Sentry).
