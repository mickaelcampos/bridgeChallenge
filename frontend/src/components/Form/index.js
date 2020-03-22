import React, { useState } from 'react';

export default function Form({ onSubmit }) {

  const [value_typed, setValueTyped] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      value_typed
    })
    setValueTyped('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="value_typed"
        required
        value={value_typed}
        onChange={e => setValueTyped(e.target.value)}
      />

      <button type="submit">Verificar</button>
    </form>
  )
}
