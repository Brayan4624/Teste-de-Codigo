# Página de Login Fluida

Uma página de login moderna e responsiva desenvolvida com React, HTML, CSS e JSX, apresentando um design fluido com cores amarelo e roxo.

## Características

### Design Fluido
- **Gradiente animado**: Fundo com gradiente que transiciona suavemente entre amarelo dourado, laranja, rosa coral, roxo e roxo escuro
- **Formas flutuantes**: Elementos decorativos que flutuam pelo fundo com animações suaves
- **Glassmorphism**: Card de login com efeito de vidro fosco e transparência

### Funcionalidades
- **Campos de entrada**: Email e senha com ícones e validação
- **Mostrar/ocultar senha**: Botão para alternar visibilidade da senha
- **Checkbox "Lembrar-me"**: Opção para salvar credenciais
- **Link "Esqueci minha senha"**: Para recuperação de senha
- **Botões sociais**: Login com Google e Facebook
- **Animações**: Transições suaves e efeitos hover
- **Loading state**: Spinner durante o processo de login

### Responsividade
- **Design adaptativo**: Funciona perfeitamente em desktop, tablet e mobile
- **Breakpoints otimizados**: Ajustes específicos para diferentes tamanhos de tela
- **Touch-friendly**: Elementos otimizados para dispositivos touch

## Tecnologias Utilizadas

- **React 18**: Framework JavaScript para interface de usuário
- **Vite**: Build tool e servidor de desenvolvimento
- **Tailwind CSS**: Framework CSS utilitário
- **Lucide React**: Biblioteca de ícones
- **CSS3**: Animações e efeitos avançados

## Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou pnpm

### Instalação
```bash
# Navegar para o diretório do projeto
cd login-page

# Instalar dependências
npm install
# ou
pnpm install

# Iniciar servidor de desenvolvimento
npm run dev
# ou
pnpm run dev
```

### Acesso
Abra seu navegador e acesse: `http://localhost:5173`

## Estrutura do Projeto

```
login-page/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── ui/
│   ├── App.jsx          # Componente principal com a tela de login
│   ├── App.css          # Estilos personalizados
│   ├── index.css        # Estilos globais
│   └── main.jsx         # Ponto de entrada
├── index.html           # Template HTML
├── package.json         # Dependências e scripts
└── README.md           # Este arquivo
```

## Personalização

### Cores
As cores principais podem ser ajustadas no arquivo `App.css`:
- Gradiente de fundo: Modifique a propriedade `background` em `.background-gradient`
- Cores dos elementos: Ajuste as variáveis CSS ou classes Tailwind

### Animações
- Velocidade das animações: Modifique os valores de `animation-duration`
- Efeitos de hover: Personalize as transições em `.login-button:hover`

## Funcionalidades Implementadas

✅ Design fluido com gradientes animados  
✅ Card de login com glassmorphism  
✅ Campos de entrada com validação  
✅ Botão mostrar/ocultar senha  
✅ Animações e transições suaves  
✅ Responsividade completa  
✅ Botões de login social  
✅ Estados de loading  
✅ Efeitos hover e focus  

## Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Dispositivos**: Desktop, tablet, smartphone
- **Resoluções**: 320px até 4K+

## Licença

Este projeto é de uso livre para fins educacionais e comerciais.

