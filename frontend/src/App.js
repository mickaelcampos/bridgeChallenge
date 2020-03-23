import React, { useState, useEffect } from 'react';
import api from './services/api';

import Form from './components/Form';
import Result from './components/Result';

function App() {

  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   async function loadResults() {
  //     const response = await api.get('/number');
  //     setResults(response.data);
  //   }

  //   loadResults();
  // }, []);



  async function handleFormSubmitted(data) {
    //const response = await api.get('/number/:value', data);
    const number = Number(data.value_typed);
    console.log(number);
    const response = await api.get(`/number/${number}`);
    console.log(response);
    setResults([...results, response.data]);
  }

  return(
    <div id="app">
      <main>
        <Form onSubmit={handleFormSubmitted}/>
      </main>
      <aside>
        <Result res={results} />
      </aside>
    </div>
  );
}

export default App;
