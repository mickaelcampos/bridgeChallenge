import React from 'react';

export default function Result({ res }) {

  function renderResult() {
    return (
      <>
        <h1>Resultado</h1>
        <strong>{(res.isPrime) ? 'é Primo' : 'nao é Primo'}</strong>
        <p>Divisores: {res.divisors.join(', ')}</p>
      </>
    )
  }

  return (
    <>
    {Object.keys(res).length !== 0 ? renderResult() : null}
    </>
  )
}
