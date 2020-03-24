import React, { useState } from 'react';

import GlobalStyle from './styles/global';

import api from './services/api';

import Form from './components/Form';
import Result from './components/Result';
import HistoryItem from './components/HistoryItem';

function App() {

  const [results, setResults] = useState([]);
  const [result, setResult] = useState({});

  async function handleFormSubmitted(data) {
    const num = Number(data.value_typed);
    const response = await api.get(`/number/${num}`);
    setResults([...results, response.data]);
    setResult(response.data);
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
        <aside className="result">
          <strong>Veja o resultado aqui:</strong>
          <Result res={result} />
        </aside>
        <aside className="history">
        <strong>Histórico:</strong>
          <ul>
            {results.map(res => (
              <HistoryItem key={res.id} res={res} />
            ))}
          </ul>
        </aside>

      </div>
    </>
  );
}

export default App;
