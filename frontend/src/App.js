import React, { useState } from 'react';
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
    <div id="app">
      <main>
        <Form onSubmit={handleFormSubmitted}/>
      </main>
      <aside>
        <Result res={result} />
      </aside>
    </div>
  );
}

export default App;
