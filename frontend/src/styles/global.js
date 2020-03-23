import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #0099ff;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  div#app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  main {
    width: 320px;
    background: #fff;
    box-shadow:  0 0 14px 0 rgba(74, 73, 73, 0.75);
    border-radius: 2px;
    padding: 30px 20px;
  }

  main strong {
    font-size: 30px;
  }

  strong {
    text-align: center;
    display: block;
    color: #333;
  }

  #app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 30px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

  #app aside.result {
      margin-left: 30px;
      width: 320px;
      background: #fff;
      box-shadow:  0 0 14px 0 rgba(74, 73, 73, 0.75);
      border-radius: 2px;
      padding: 30px 20px;
  }

  #app aside.result strong {
    font-size: 24px;
  }

  #app aside.history {
      margin-left: 30px;
      width: 320px;
      border-radius: 2px;
  }

  #app aside.history strong {

    background: #292929;
    color:  #fff;
    border-radius: 2px;
    width: 100%;
    border: 0;
    /* margin-top: 30px; */
    padding: 15px 20px;
    font-size: 24px;
    font-weight: bold;
  }

  #app aside.history ul {
    box-shadow:  0 0 14px 0 rgba(74, 73, 73, 0.75);
  }

  @media (max-width: 1000px) {
      #app {
          flex-direction: column;
      }

      #app aside.result {
          margin-left: 0;
          margin-top: 30px;
      }

      #app main {
          width: 100%;
      }
  }


`;
