# XXIII Semana Brasileira de Informática Biomédica - Homepage

Uma homepage moderna e responsiva para o evento "Semana Brasileira de Informática Biomédica" desenvolvida com Next.js e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React 18** - Biblioteca para interfaces de usuário

## 📁 Estrutura do Projeto

```
/
|-- /app
|   |-- /_components
|   |   |-- About.tsx          # Seção sobre a SBIB
|   |   |-- Countdown.tsx      # Contagem regressiva
|   |   |-- Footer.tsx         # Rodapé
|   |   |-- Header.tsx         # Cabeçalho com navegação
|   |   |-- Hero.tsx           # Seção principal
|   |   |-- Schedule.tsx       # Cronograma do evento
|   |   |-- Sponsors.tsx       # Patrocinadores
|   |   |-- Venues.tsx         # Sedes presenciais
|   |-- layout.tsx             # Layout principal
|   |-- page.tsx               # Página inicial
|   |-- globals.css            # Estilos globais
|-- tailwind.config.ts         # Configuração do Tailwind
|-- package.json               # Dependências do projeto
```

## 🎨 Design e Identidade Visual

- **Paleta de Cores**: Azul escuro (#0F172A), ciano (#4FD1C5), rosa (#F687B3)
- **Fonte**: Montserrat (Google Fonts)
- **Layout**: Responsivo e moderno
- **Componentes**: Reutilizáveis e modulares

## ⚡ Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd sbib-homepage
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Abra o navegador:**
   Acesse [http://localhost:3000](http://localhost:3000)

## 🛠️ Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- Dispositivos móveis
- Tablets
- Desktops
- Telas grandes

## 🔧 Personalização

### Cores
Edite o arquivo `tailwind.config.ts` para alterar as cores principais.

### Conteúdo
Modifique os componentes em `/app/_components/` para alterar textos e informações.

### Estilos
Ajuste o arquivo `globals.css` para modificações nos estilos globais.

## 📄 Licença

Este projeto foi desenvolvido para a Semana Brasileira de Informática Biomédica.

## 👥 Desenvolvimento

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Abra um Pull Request

---

**Comissão Organizadora da SBIB** - 2025


