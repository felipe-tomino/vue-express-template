# Como criar um repositório como este

## Requisitos

- Conta no [GitHub](https://github.com/) para hospedar o seu projeto

Instalar:
- [VSCode](https://code.visualstudio.com/) para editar o código
- [NodeJS](https://nodejs.org/en) para rodar o projeto
    - [npm (Node Package Manager)](https://www.npmjs.com/) (já vem com o NodeJS) para instalar as dependências do projeto
- [Git](https://git-scm.com/) para integrar o seu projeto ao GitHub
- [PostgreSQL](https://www.postgresql.org/) para armazenar os dados do projeto

## Passo a passo

1. Crie uma pasta para o seu projeto
1. Abra a pasta do seu projeto no VSCode
1. Abra um novo terminal no VSCode
    1. Rode o comando `npm create vue@latest` para criar o frontend
        a. Escreva `frontend` como nome do projeto
        a. Escolha No (Não) para todas as próximas perguntas
    1. Mude para a pasta do frontend: `cd frontend`
    1. Rode o comando `npm install` para instalar as dependências do projeto
    1. Rode o comando `npm install axios` para instalar o axios (para fazer as requisições para o backend)
    1. Feche o terminal
1. Crie uma pasta para o seu backend
1. Abra um novo terminal no VSCode
    1. Mude para a pasta do backend: `cd backend`
    1. Rode o comando `npm init` para inicializar o projeto
        a. Use as opções padrão, exceto para o campo `entry point`, escreva `index.mjs` neste campo
    1. Rode o comando `npm install express body-parser cors knex pg` para instalar as dependências do projeto
    1. Rode o comando `npm install -D nodemon` para instalar o nodemon (para reiniciar o servidor automaticamente)
    1. Rode o comando `knex init` para criar o arquivo `knexfile.js` e configurar o banco de dados
    1. Feche o terminal
1. Abra o arquivo `package.json` do seu backend
    1. Mude a propriedade `scripts` para que fique assim:
        ```json
        "scripts": {
            "dev": "nodemon index.mjs",
            "start": "node index.mjs",
            "knex:migrate": "knex migrate:latest",
            "knex:migrate:rollback": "knex migrate:rollback",
            "knex:migrate:new": "knex migrate:make"
        }
        ```
1. Crie um repositório no [GitHub](https://github.com/new)
    1. Escreva o nome do seu projeto como nome do repositório
    1. Escolha se o repositório será público ou privado
    1. Clique em `Create repository` (ou `Criar repositório` se estiver em português)
1. Configure o repositório remoto no seu projeto:
    1. Abra um novo terminal no VSCode
    1. Rode o comando `git init` para inicializar o repositório local
    1. Rode o comando `git remote add origin <URL_DO_REPOSITORIO>` para adicionar o repositório remoto ao seu projeto
    1. Rode o comando `git branch -M main` para definir a branch main como a branch principal
    1. Rode o comando `git push -u origin main` para enviar os arquivos para o repositório remoto
