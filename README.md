# XXIV Semana Brasileira de Informática Biomédica - Homepage

Uma homepage moderna e responsiva para a **24ª Semana Brasileira de Informática Biomédica (SBIB)**, desenvolvida com **Next.js 15**, **Tailwind CSS v4** e **TypeScript**.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router e Server Actions
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS v4** - Framework CSS utilitário para estilização

## 📁 Estrutura do Projeto

/|-- /app|   |-- /_components|   |   |-- About.tsx          # Seção sobre a SBIB (USP, UFCSPA, UFPR)|   |   |-- Countdown.tsx      # Contagem regressiva (21 a 25 de Setembro de 2026)|   |   |-- Footer.tsx         # Rodapé|   |   |-- Header.tsx         # Cabeçalho com navegação|   |   |-- Hero.tsx            # Seção principal|   |   |-- Schedule.tsx        # Cronograma do evento (Palestras, Minicursos, Mesas Redondas)|   |   |-- Sponsors.tsx       # Patrocinadores e Planos de Patrocínio|   |   |-- Venues.tsx         # Sedes (USP, UFCSPA e UFPR)|   |-- layout.tsx             # Layout principal|   |-- page.tsx               # Página inicial|   |-- globals.css            # Estilos globais|-- tailwind.config.ts         # Configuração do Tailwind CSS|-- package.json               # Dependências do projeto
## 🎨 Design e Identidade Visual (SBIB 2026)

A identidade visual da 24ª edição reflete o dinamismo e a conexão multidisciplinar do curso de Informática Biomédica[cite: 3, 4, 12]:

### 🎨 Paleta de Cores
- **Cores Principais:**
  - Amarelo Suave: `#F2E5B8` [cite: 3]
  - Verde Salvia: `#B7C7BA` [cite: 3]
  - Verde Esmeralda: `#3FA178` [cite: 3]
  - Verde Médio: `#4D955A` [cite: 3]
  - Verde Escuro: `#435E4E` [cite: 3]
- **Cores Secundárias e de Apoio:**
  - Preto: `#000000` [cite: 3]
  - Verde Muted: `#658368` [cite: 3]
  - Azul Claro: `#74B4C6` [cite: 3]
  - Off-White: `#FFFCF2` [cite: 3]

### 🔤 Tipografia Oficial
- **Títulos:** `SF Pro Text` [cite: 1]
- **Subtítulos:** `Manifold Extended CF` [cite: 1]
- **Corpo do Texto:** `Forma DJR` [cite: 1]

## ⚡ Como Executar

### Pré-requisitos
- Node.js 20+ instalado
- npm, yarn ou pnpm

### Instalação 

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd sbib-homepage
Instale as dependências:Bashnpm install
# ou
yarn install
Execute o servidor de desenvolvimento:Bashnpm run dev
# ou
yarn dev
Abra o navegador:Acesse http://localhost:3000🛠️ Scripts Disponíveisnpm run dev - Servidor de desenvolvimentonpm run build - Build de produçãonpm run start - Servidor de produçãonpm run lint - Verificação de código com ESLint📅 Sobre o Evento (SBIB 2026)Data: 21 a 25 de Setembro de 2026   Formato: Híbrido (Transmissão via YouTube e atividades presenciais)   Realização em Parceria: USP, UFCSPA e UFPR   📄 LicençaEste projeto foi desenvolvido para a XXIV Semana Brasileira de Informática Biomédica.  👥 DesenvolvimentoPara contribuir com o projeto:Faça um fork do repositórioCrie uma branch para sua feature (git checkout -b feature/minha-feature)Commit suas mudanças (git commit -m 'feat: minha nova feature')Envie para a branch (git push origin feature/minha-feature)Abra um Pull RequestComissão Organizadora da SBIB — 2026
