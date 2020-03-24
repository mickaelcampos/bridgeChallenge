import React from 'react';
import StyledHistoryItem from './styles';

export default function HistoryItem({ res }) {

  return (
    <StyledHistoryItem>
      <p>{res.searchValue} {(res.isPrime) ? 'é Primo!' : 'não é Primo!'}</p>
    </StyledHistoryItem>
  )
}
