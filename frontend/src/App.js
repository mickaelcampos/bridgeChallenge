import React, { useState } from 'react';

import GlobalStyle from './styles/global';

import api from './services/api';

import Form from './components/Form';
import Result from './components/Result';

function App() {

  // const [results, setResults] = useState([{}]); // will be used for history
  const [result, setResult] = useState({});

  async function handleFormSubmitted(data) {
    const num = Number(data.value_typed);
    const response = await api.get(`/number/${num}`);
    // setResults([...results, response.data]);
    setResult(response.data);
    console.log(result);
  }

  return(
    <>
      <GlobalStyle />
      <div id="app">
        <main>
          <strong>Verifique se o número digitado é primo e seus divisores :)</strong>
          <small>*números até 1000000</small>
          <Form onSubmit={handleFormSubmitted}/>
        </main>
        <aside>
          <strong>Veja o resultado aqui:</strong>
          <Result res={result} />
        </aside>
      </div>
    </>
  );
}

export default App;
