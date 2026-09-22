# Atividade Avaliativa de Versionamento

Este repositório contém uma aplicação web simples para cadastro, login e acesso a um dashboard. O projeto foi desenvolvido com HTML, CSS e JavaScript, utilizando `localStorage` para simular o armazenamento de sessão do usuário.

A aplicação permite que o usuário crie uma conta com nome e senha, faça login com as credenciais cadastradas e seja redirecionado para uma página de dashboard autenticada. Também há validações de campos e fluxo de logout.

## Funcionalidades principais

- Tela de login
- Tela de cadastro
- Validação de campos
- Autenticação simples por `localStorage`
- Redirecionamento para dashboard após login
- Logout com remoção da sessão

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## Estrutura do projeto

- `index.html`: página de login
- `cadastro.html`: página de cadastro de usuário
- `dashboard.html`: página exibida após autenticação
- `style.css`: estilos visuais da aplicação
- `script.js`: lógica de autenticação do login

## Como executar

1. Abra o arquivo `index.html` em um navegador.
2. A partir daí, é possível acessar a página de cadastro.
3. Cadastre um usuário e faça login com as informações informadas.
4. Após autenticação, você será redirecionado para o dashboard.

## Fluxo da aplicação

Na tela inicial, o usuário insere seu nome e senha. Caso os dados estejam corretos, ele é autenticado e enviado para o dashboard. Caso contrário, uma mensagem de erro é exibida.

No cadastro, o usuário informa os dados necessários e, após confirmação, pode retornar à tela de login para entrar no sistema.

## Observações

Este projeto é uma implementação simples e didática, voltada para prática de versionamento e organização de arquivos em repositório. Ele não utiliza backend, banco de dados nem autenticação real, sendo apenas uma simulação para fins de estudo e aprendizagem.
