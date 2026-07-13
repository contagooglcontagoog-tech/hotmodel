# hotmodel2026 🔥

Aplicação completa desenvolvida em React + TypeScript + Vite. Projetada para ser implantada de forma 100% estática na **Vercel** sem a necessidade de um banco de dados real (MySQL/PostgreSQL), utilizando persistência local (`localStorage`) para simular o banco de dados.

## 🚀 Funcionalidades

- **Vitrine Premium de Vendas**: Landing page moderna com tema escuro (dark mode), efeitos de vidro (glassmorphic) e bordas neon.
- **Validação de Maioridade**: Filtro inicial de 18+ para conformidade e segurança legal.
- **Funil com Captura de Lead**: Captura dados do cliente (Nome, WhatsApp, E-mail) antes de liberar o botão de redirecionamento de compra.
- **BackRedirect / PopUnder Ativo**: Popup com oferta especial por tempo limitado ao detectar que o usuário tenta sair da página (cursor saindo do navegador).
- **Painel Administrativo (/admin)**:
  - **Dashboard**: Gráficos e cartões de estatísticas com faturamento total, taxa de conversão, leads capturados, etc.
  - **CRUD de Modelos**: Permite adicionar, editar e excluir modelos do catálogo. Suporta uploads locais direto no navegador com conversão automática para Base64.
  - **Gerenciador de Leads**: Visualize e exclua os contatos capturados, com link direto de início de conversa do WhatsApp.
  - **Histórico de Vendas**: Tabela de transações com status (Aprovado, Pendente, Cancelado).
  - **Configurações**: Modifique a senha do painel.

## 💻 Desenvolvimento Local

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 🛠️ Build e Compilação

Para compilar para produção:
```bash
npm run build
```
Os arquivos gerados estarão no diretório `dist/` prontos para hospedagem.

## 🔑 Credenciais Padrão do Admin

- **Usuário**: `admin`
- **Senha**: `admin`
*(A senha pode ser alterada na aba de Configurações do painel).*
