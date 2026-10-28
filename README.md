# Douglas Games
**Nicho:** Loja de Jogos Usados e Plataforma de Troca/Venda · **Grupo:** [Preencher nº da planilha]
**Dupla:** Lucas da Silva Abreu Souza (Luccas-A3) · Rafael da Silva Gil (Gilzz5689)
**Sistema no ar:** https://loja-de-games-usados-m5po.vercel.app/

## O que o sistema faz
O **Douglas Games** é uma plataforma e e-commerce completa voltada para o mercado de jogos de videogame usados. O sistema permite que visitantes naveguem pelo catálogo completo de títulos organizados por plataformas (PlayStation, Xbox, Nintendo, PC) e realizem pesquisas em tempo real. Usuários autenticados podem submeter propostas de compra/negociação com mensagens personalizadas. Além disso, o sistema conta com um **Painel Administrativo com controle de acesso baseado em cargos (RBAC)**, onde apenas administradores podem cadastrar novos jogos (com upload direto de capa via Vercel Blob) e aprovar ou recusar as propostas recebidas.

## Páginas para testar
- **Pública:** `/` (Home com jogos em destaque e navegação por plataformas: `/playstation`, `/xbox`, `/nintendo`, `/pc`)
- **Busca (exemplo que encontra algo):** `/pesquisa?q=God`
- **Protegida (pede login / acesso administrativo):** `/admin` (requer conta autenticada com cargo `ADMIN` no banco de dados)

## Banco de dados
O banco de dados utilizado é o **Neon PostgreSQL**, integrado via **Prisma ORM**. As principais entidades e seus relacionamentos são:

1. **User (Usuários e Autenticação)**
   - **Campos:** `id`, `name`, `email`, `role` (ADMIN/USER), `createdAt`, `updatedAt`
   - **Relação:** Possui relação 1:N com `Jogo` (jogos cadastrados pelo admin) e 1:N com `PropostaCompra` (propostas enviadas pelo usuário).

2. **Jogo (Catálogo de Jogos)**
   - **Campos:** `id`, `titulo`, `descricao`, `preco` (Decimal), `plataforma` (PlayStation, Xbox, Nintendo, PC), `imagem` (URL pública do Vercel Blob), `userId` (FK), `createdAt`
   - **Relação:** Pertence a um `User` (Admin criador) e possui relação 1:N com `PropostaCompra`.

3. **PropostaCompra (Negociações)**
   - **Campos:** `id`, `valor` (Decimal), `mensagem`, `status` (PENDENTE, ACEITA, RECUSADA), `jogoId` (FK), `userId` (FK), `createdAt`
   - **Relação:** Pertence a um `Jogo` e a um `User` (comprador).

## Como rodar no computador
1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/Luccas-A3/loja-de-games-usados.git
   cd loja-de-games-usados
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Configurar as variáveis de ambiente (`.env`):**
   Crie um arquivo `.env` na raiz do projeto com as chaves:
   ```env
   DATABASE_URL="postgresql://usuario:senha@ep-xxx.neon.tech/neondb?sslmode=require"
   BETTER_AUTH_SECRET="sua-chave-secreta"
   BETTER_AUTH_URL="http://localhost:3000"
   BLOB_READ_WRITE_TOKEN="seu-token-vercel-blob"
   ```

4. **Sincronizar a base de dados com o Prisma:**
   ```bash
   npx prisma db push
   ```

5. **Preencher o banco de dados:**
   ```bash
   npx prisma db seed
   ```

6. **Executar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse no navegador: `http://localhost:3000`

## Como usamos a IA
- **IA usada:** Gemini (Google)
- **Os 3 pedidos (prompts) que mais ajudaram:**
  1. *"Como integrar o Vercel Blob no formulário do Server Action para fazer upload de imagens de jogos e salvar a URL no Prisma?"*
  2. *"Como fazer o tratamento de erros de compilação do TypeScript para alinhar a tipagem do GameCard com o modelo do Prisma Decimal?"*
  3. *"Como tornar o Header e a barra de busca responsivos no Tailwind CSS sem gerar rolagem horizontal no celular?"*
- **Um erro da IA que percebemos e como corrigimos (arquivo e o que mudou):**
  - **Arquivo:** `app/components/GameCard.tsx`
  - **O erro:** A IA sugeriu manter a tipagem `Jogo` vinda do arquivo estático local (`@/app/data/catalogo`), o que fez o build da Vercel falhar com erro `TS2739` alegando a ausência das propriedades `categoria`, `estado` e `detalhes` que não existiam no modelo real do Prisma.
  - **Como corrigimos:** Atualizamos a interface do `GameCardProps` para aceitar os tipos reais e dinâmicos do Prisma (`id`, `titulo`, `preco`, `plataforma`, `imagem`, `descricao`) e tratamos a conversão de `Decimal` para `number` na exibição do preço.
- **O que aprendemos:**
  - Aplicação prática de Server Actions no Next.js (App Router) sem a necessidade de APIs REST tradicionais.
  - Implementação de segurança com RBAC (Role-Based Access Control) diretamente no nível do servidor.
  - Gerenciamento e persistência de uploads de mídia em nuvem com Vercel Blob.
  - Importância do design mobile-first e prevenção de inconsistências de layout com unidades flexíveis e responsivas no Tailwind CSS.