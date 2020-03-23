import React from 'react';
import StyledResult from './styles';


export default function Result({ res }) {

  function renderResult() {
    return (
      <StyledResult>
        <strong>{res.searchValue} {(res.isPrime) ? 'é Primo!' : 'não é Primo!'}</strong>
        <br/>
        <p>Divisores: {res.divisors.join(', ')}</p>
      </StyledResult>
    )
  }

  return (
    <>
    {Object.keys(res).length !== 0 ? renderResult() : null}
    </>
  )
}
