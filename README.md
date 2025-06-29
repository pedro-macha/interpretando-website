# Interpretando - Website Replica

Uma réplica otimizada do site da [Interpretando](https://interpretando.com.br) construída com as tecnologias mais modernas para máxima performance e SEO.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router para máxima performance
- **TypeScript** - Tipagem estática para maior segurança e produtividade  
- **Tailwind CSS** - Framework CSS utilitário para design responsivo
- **Lucide React** - Ícones modernos e otimizados
- **React Hooks** - Estado e interatividade modernos

## ✨ Funcionalidades

### 🎯 Seções Principais
- **Hero Section** - Chamada principal com CTAs otimizados
- **Serviços** - Tradução juramentada e apostila de Haia
- **Orçamento** - Formulário interativo para solicitação
- **Sobre Nós** - Perfil dos fundadores e credenciais
- **FAQ** - Perguntas frequentes com accordion
- **Contato** - Informações de todos os escritórios

### 🔧 Características Técnicas
- **100% Responsivo** - Funciona perfeitamente em todos os dispositivos
- **SEO Otimizado** - Meta tags, estrutura semântica e performance
- **Acessibilidade** - Navegação por teclado e screen readers
- **Performance** - Carregamento rápido e otimizações automáticas
- **TypeScript** - Código type-safe e autocompletar

### 📱 Componentes Interativos
- Navigation responsiva com menu mobile
- Formulários com validação
- FAQ com accordion expansível
- Links diretos para WhatsApp e telefone
- Smooth scrolling entre seções

## 🏗️ Estrutura do Projeto

```
interpretando-replica/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página home
│   └── components/
│       ├── Header.tsx       # Cabeçalho e navegação
│       ├── HeroSection.tsx  # Seção principal
│       ├── ServicesSection.tsx # Serviços oferecidos
│       ├── QuoteSection.tsx # Formulário de orçamento
│       ├── AboutSection.tsx # Sobre a empresa
│       ├── FAQSection.tsx   # Perguntas frequentes
│       └── Footer.tsx       # Rodapé com contatos
├── public/                  # Arquivos estáticos
├── package.json            # Dependências
└── tailwind.config.ts      # Configuração do Tailwind
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório** (se aplicável)
```bash
git clone [url-do-repositorio]
cd interpretando-replica
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em desenvolvimento**
```bash
npm run dev
```

4. **Acesse o site**
```
http://localhost:3000
```

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Executar build de produção
npm start

# Linting
npm run lint
```

## 🎨 Design e UX

### Paleta de Cores
- **Primária**: Azul (#2563eb) - Confiança e profissionalismo
- **Secundária**: Índigo - Complemento elegante
- **Neutros**: Cinzas - Texto e backgrounds
- **Acentos**: Verde (WhatsApp), Roxo (email)

### Typography
- **Font**: Inter - Legibilidade moderna
- **Hierarquia**: h1-h6 bem definida
- **Responsiva**: Tamanhos adaptáveis

### Layout
- **Container**: Máximo 1280px centrado
- **Grid**: CSS Grid e Flexbox
- **Spacing**: Sistema consistente com Tailwind
- **Shadows**: Sutis para profundidade

## 📊 Otimizações Implementadas

### Performance
- **Next.js 14** - Server Components e otimizações automáticas
- **Lazy Loading** - Carregamento sob demanda
- **Bundling** - Código otimizado para produção
- **Images** - Next/Image com otimizações automáticas

### SEO
- **Meta Tags** - Título, descrição e keywords
- **Structured Data** - Markup semântico
- **OpenGraph** - Compartilhamento social
- **Sitemap** - Navegação para buscadores

### Acessibilidade
- **ARIA Labels** - Leitores de tela
- **Keyboard Navigation** - Navegação completa por teclado
- **Color Contrast** - Contraste adequado
- **Focus States** - Estados visuais claros

## 📞 Contatos Integrados

O site replica todos os contatos originais:

### Escritórios
- **Brasília-DF** - (61) 3034-1042
- **São Paulo-SP** - (11) 2548-1528  
- **Belo Horizonte-MG** - (31) 2520-0929
- **Curitiba-PR** - (41) 3343-6253
- **Florianópolis-SC** - (48) 3365-0052

### Contato Principal
- **Telefone**: (61) 3034-1042
- **WhatsApp**: (61) 98133-1104
- **Email**: contato@interpretando.com.br

## 🔄 Próximos Passos

Para tornar o site ainda mais completo, considere implementar:

1. **Blog** - Sistema de posts sobre tradução
2. **Dashboard** - Área do cliente para acompanhar pedidos
3. **Pagamentos** - Integração com gateways de pagamento
4. **CMS** - Sistema de gerenciamento de conteúdo
5. **Analytics** - Google Analytics e métricas
6. **Chatbot** - Atendimento automatizado
7. **Multi-idioma** - Versões em inglês e espanhol

## 📝 Licença

Este projeto é uma réplica educacional do site original da Interpretando para demonstração de técnicas modernas de desenvolvimento web.

---

**Desenvolvido com ❤️ usando Next.js 14 + Tailwind CSS**
