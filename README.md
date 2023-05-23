# Delivery App

Este foi um projeto FullStack desenvolvido no curso da Trybe onde foi construída uma aplicação inteira do zero.

O objetivo final era controllar um Delivery de bebidas, com suporte a usuário cliente, vendedor e administrador.

O projeto conta com um backend em node/nest, um front em NextJS e um database MySql.
Testes estão sendo feitos com Cypress no fron-end e mocha/chai no backend.

Este projeto está em andamento (cerca de 70% feito)

## Instalação

Temos duas maneiras para utilizar o projeto

1. Usando [Docker](https://www.docker.com/) (esta maneira ainda não está disponível)
<details>

Após clonar o repositório não esqueça de:

Dentro da pasta app, troque o nome do arquivo .env.example para .env

![env](https://i.imgur.com/Hilhzoe.png)

```bash
  # clone o repositório
  # entre na pasta app
  cd deliveryapp/app
  # rode o script de Instalação de dependencias
  npm run install:app
  # caso tenha problemas de permissão neste passo use:
  chmod +x app_install.sh
  # repita o npm run
  # Após isso rode o comando
  docker compose up
```

Depois é só esperar o tempo de build (pode demorar um pouco dependendo do computador/internet)

O front end estará rodando em localhost:3000 (broswer)

A API em localhost:3001 (postman ou simular)

O banco de dado em localhost:3306 (workbench)

</details>
2. Docker apenas no banco de dados
<details>

Aqui vamos usar o docker apenas para o banco de dados e rodar a aplicação em terminais diferentes.

Após clonar o repositório não esqueça de:

Dentro da pasta app/backend, troque o nome do arquivo .env.examplenodocker para .env

Altere as variáveis de ambiente para irem de acordo ao seu database

Caso tenha criado um DB padrão com a senha do usuário root sendo password, não precisa mudar nada.

![env](https://i.imgur.com/f8jA2qx.png)

```bash
  # clone o repositório
  # entre na pasta do projeto e suba o banco de dados
  cd deliveryapp
  docker compose up
  # entre na pasta app
  cd app
  # rode o script de Instalação de dependencias
  npm run install:app
  # caso tenha problemas de permissão neste passo use:
  chmod +x app_install.sh
  # repita o passo antes desse
  # caso ainda tenha problemas, antes de cada npm start rode o comando
  npm i
  # abra dois terminais novos
  # um deve estar dentro de /app/fronend e rode o comando
  npm start
  # o outro deve estar dentro de /app/backend e rode o comando
  npm start
```

Depois é só esperar o tempo de build (pode demorar um pouco dependendo do computador/internet)

O front end estará rodando em localhost:3000 (browser)

A API em localhost:3001 (postman ou similar)

O banco de dado em localhost:3306 (workbench)

</details>

## Login

<details>
Para fazer login no aplicativo você pode utilizar o login admin@admin.com com a senha admin, onde vc logará como admin da plataforma (falta tela de controle de usuários)

Para acessar como vendedor utilize o login: vendedor@vendedor.com com a senha: fulana@123 para visualizar como vendedor (ainda faltando algumas coisas)

Ou criar uma conta nova com um email em formato válido com senha e usuário, assim você verá a aplicação como um usuário padrão (comprador, rota completa)

</details>

## Testes (Ainda estão sendo implementados)

<details>
Para os testes funcionarem, as dependencias tem que estar instaladas e o aplicativo rodando (pode ser pelo docker ou sem ele)

Entre na pasta de frontend (/app/frontend)

Use o comando: npx cypress open

Selecione o browser e rode o teste app_test

</details>

## Screenshots

<details>

![photo](https://i.imgur.com/soslHPL.png)
![photo](https://i.imgur.com/fVkR53o.png)
![photo](https://i.imgur.com/NF9vR1y.png)

</details>

## Stacks Utilizadas

<details>
Front-end: NextJS, Cypress, Typescript

Back-end: Node, Nest, Sequelize, Typescript

</details>

## Sobre Mim

Sou um desenvolvedor Full-Stack, trabalho com a stack de node/react e estou sempre procurando coisas novas para aprender :)

## Autor

- [@ThiDurante](https://www.github.com/ThiDurante)
- [Linkedin](https://www.linkedin.com/in/thidurante/)

## Agradecimentos
