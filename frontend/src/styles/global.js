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
    font-size: 14px;
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
  /* theres is the aside on devradar */
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
    font-size: 25px;
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

  #app aside {
      margin-left: 30px;
      width: 320px;
      background: #fff;
      box-shadow:  0 0 14px 0 rgba(74, 73, 73, 0.75);
      border-radius: 2px;
      padding: 30px 20px;
  }

  @media (max-width: 1000px) {
      #app {
          flex-direction: column;
      }

      #app aside {
          margin-left: 0;
          margin-top: 30px;
      }

      #app main {
          width: 100%;
      }
  }


`;
