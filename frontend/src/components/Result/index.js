import React from 'react';
import StyledResult from './styles';


export default function Result({ res }) {

  function renderResult() {
    return (
      <StyledResult>
        <strong>{(res.isPrime) ? 'É Primo!' : 'Não é Primo!'}</strong>
        <p><strong>Divisores:</strong>{res.divisors.join(', ')}</p>
      </StyledResult>
    )
  }

  return (
    <>
    {Object.keys(res).length !== 0 ? renderResult() : null}
    </>
  )
}
