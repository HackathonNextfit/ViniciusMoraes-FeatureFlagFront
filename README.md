<h1>LER O READ.ME</h1>

<h2>Frontend de Gerenciamento de Feature Flags (Next Fit)</h2>

Este projeto é um frontend intuitivo para gerenciar as feature flags da Next Fit, 
permitindo a visualização e manipulação da ativação de funcionalidades.

<h3>Tecnologias e Implementações</h3>
Utilizei React e TypeScript. Para a interface, o Material-UI (MUI) 
foi essencial, com destaque para:

PieChart (@mui/x-charts): Criação de gráficos de pizza para visualizar a 
distribuição de acesso das feature flags (Whitelist, Blacklist, Rollout, Não Impactadas).

DataGrid (@mui/x-data-grid): Exibição organizada 
de tabelas de dados, como a lista de unidades cadastradas.

Outros componentes como Box, Paper, Stack, Button, Avatar 
e Typography foram amplamente usados para layout e elementos visuais.

Notistack foi integrado para feedback de usuário com notificações 
claras, enquanto Axios gerencia as requisições HTTP à API. 

O projeto é componentizado, reutilizando elementos como CustomTextDefault e 
CustomButtonDefault para consistência e modularidade.

A navegação é gerenciada com react-router-dom.

O build do projeto é feito com Vite. A estrutura do código é organizada por páginas,
não por módulos, porque é um projeto menor.

<h3>Interação com a API e Observações</h3>

O frontend interage com a API de feature flags via requisições 
POST (para criar novas features) e 
GET (para listar e buscar detalhes de features por ID).

Mas na exibição de detalhes fiz tudo através de mocks.

Durante o desenvolvimento, a funcionalidade de exclusão (DELETE) apresentou erros na API. 
Além disso, não consegui pegar a data de criação das feature flags.

Pontuando que em determinados pontos não fui 100% fiel ao figma, devido ao tempo, 
e porque aproveitei pra estudar o que eu estava fazendo, 
mas tentei manter a semelhança.


----

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
