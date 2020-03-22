import React from 'react';

export default function Result({ res }) {

  function renderResult() {
    return (
      <>
        <strong>{(res.isPrime) ? 'ehPrimo' : 'naoEhPrimo'}</strong>
        <p>{res.divisors.join(', ')}</p>
      </>
    )
  }

  return (
    <>
    {res.length > 0 ? renderResult() : null}
    </>
  )
}
