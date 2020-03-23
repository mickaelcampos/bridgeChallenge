# Desafio Bridge

## Tecnologias utilizadas

  - ESLint (Pradronizar e validar o código durante o desenvolvimento);
  - Prettier (Formatador);

**Backend**

  - Node.js(Express);
  - DotENV (Definir variáveis de ambiente);

**Frontend**

  Template criado utilizando `create-react-app` CLI
  - React;
  - Axios (cliente HTTP);
  - Styled-Componets: lib que permite escrever códigos CSS dentro do JavaScript,
    cada componente conhece apenas o seu CSS, uma mudança em um componente será 
    refletida somente nele.

## Instruções

Depois de baixar/clonar o respositório, entre no diretório **backend** e digite

`yarn install`

para instalar os pacotes JavaScript utilizados na aplicação.

Dentro do diretório **backend**, crie o arquivo **.env** e adicione o seguinte conteúdo:

```
PORT=5000

```

Depois entre no diretório **fronted** e digite:

`yarn install`

para instalar os pacotes JavaScript utilizados na aplicação.


Quando as instalações forem concluídas, digite o comando:

`yarn start`

tanto no diretório **backend** como no diretório **frontend**.

A aplicação estará disponível no browser em `localhost:porta`
(porta definida no arquivo .env)