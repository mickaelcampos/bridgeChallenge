import React, { useState } from 'react';
import StyledForm from './styles';


export default function Form({ onSubmit }) {

  const [value_typed, setValueTyped] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      value_typed
    })
    setValueTyped(' ');
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="value_typed"></label>
        <input
          name="value_typed"
          required
          type="number"
          max="1000000"
          value={value_typed}
          onChange={e => setValueTyped(e.target.value)}
        />
      </div>

      <button type="submit">Verificar</button>
    </StyledForm>
  )
}
