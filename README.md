# Expresso Lupo - Site Institucional

Site moderno e responsivo para a empresa Expresso Lupo, especializada em transportes e entregas rápidas.

## Características

- **Design Dinâmico & Energético**: Cores vibrantes (vermelho, amarelo e preto) com tipografia impactante
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Formulário de Contato**: Integrado com validação de campos
- **Links Sociais**: WhatsApp, Instagram, telefone e email
- **Otimizado para SEO**: Meta tags e estrutura semântica
- **Performance**: Build otimizado e assets comprimidos

## Stack Tecnológico

- **React 19**: Framework frontend moderno
- **Tailwind CSS 4**: Estilização utilitária
- **TypeScript**: Tipagem estática
- **Vite**: Build tool rápido
- **shadcn/ui**: Componentes UI reutilizáveis

## Estrutura do Projeto

```
expresso-lupo-site/
├── client/
│   ├── public/
│   │   └── images/          # Imagens do site
│   ├── src/
│   │   ├── pages/           # Páginas (Home, etc)
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── App.tsx          # Roteador principal
│   │   ├── main.tsx         # Entry point React
│   │   └── index.css        # Estilos globais
│   └── index.html           # Template HTML
├── vercel.json              # Configuração Vercel
├── package.json             # Dependências
└── README.md                # Este arquivo
```

## Instalação Local

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm

### Passos

1. **Clone o repositório**
   ```bash
   git clone <seu-repositorio>
   cd expresso-lupo-site
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## Build para Produção

```bash
npm run build
# ou
pnpm build
```

Os arquivos otimizados serão gerados em `client/dist/`.

## Hospedagem na Vercel

### Método 1: Via Git (Recomendado)

1. **Faça push para o GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Expresso Lupo website"
   git push origin main
   ```

2. **Conecte à Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Selecione seu repositório do GitHub
   - Clique em "Import"

3. **Configure o Build**
   - Build Command: `cd client && npm run build`
   - Output Directory: `client/dist`
   - Clique em "Deploy"

### Método 2: Via CLI

1. **Instale a CLI da Vercel**
   ```bash
   npm install -g vercel
   ```

2. **Faça deploy**
   ```bash
   vercel
   ```

3. **Siga as instruções no terminal**

## Configuração de Domínio Personalizado

1. Na dashboard da Vercel, vá para "Settings" > "Domains"
2. Clique em "Add Domain"
3. Digite seu domínio (ex: expressolupo.com.br)
4. Siga as instruções para configurar os DNS records

## Variáveis de Ambiente

O site não requer variáveis de ambiente obrigatórias. As variáveis de analytics são opcionais:

- `VITE_ANALYTICS_ENDPOINT`: URL do endpoint de analytics
- `VITE_ANALYTICS_WEBSITE_ID`: ID do website para analytics

## Customizações

### Cores
Edite as cores no arquivo `client/src/index.css`:
```css
:root {
  --primary: #DC143C;        /* Vermelho */
  --secondary: #FFD700;      /* Amarelo */
  --background: #FFFFFF;     /* Branco */
  --foreground: #0A0A0A;     /* Preto */
}
```

### Tipografia
As fontes estão configuradas no `client/index.html`:
- Poppins (Bold/900) para títulos
- Open Sans (Regular/400) para corpo

### Conteúdo
Edite o arquivo `client/src/pages/Home.tsx` para modificar:
- Textos e descrições
- Links de contato (WhatsApp, telefone, email, Instagram)
- Imagens e assets

## Contato e Suporte

Para dúvidas ou sugestões sobre o site, entre em contato:
- **WhatsApp**: (11) 9999-9999
- **Email**: contato@expressolupo.com
- **Instagram**: @expressolupo

## Licença

© 2026 Expresso Lupo. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para sua empresa**
