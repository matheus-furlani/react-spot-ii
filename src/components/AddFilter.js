import React, { useState } from 'react';

function AddFilter({ setFilters }) {
  const [input, setInput] = useState({
    filtro: '',
    email: ''
  });
  const [error, setError] = useState({
    filtro: '',
    email: ''
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setInput(prevState => ({ ...prevState, [name]: value }));
  }

  function handleError(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'filtro':
          if (value.length <= 2) {
            setError(prevState => ({ ...prevState, filtro: 'Campo precisa ter mais de 2 caracteres'}))
          } else {
            setError(prevState => ({...prevState, filtro: ''}))
          }
        break;
        case 'email':
          if (value.length <= 10) {
            setError(prevState => ({ ...prevState, email: 'Campo precisa ter mais de 10 caracteres'}))
          } else {
            setError(prevState => ({...prevState, email: ''}))
          }
        break;
      default:
        break;
    }
  }

  return (
    <>
    <form>
      <input value={input.filtro} type='text' onChange={handleInput} onBlur={handleError} placeholder='Filtro' name='filtro'/>
      {error.filtro ? <span>{error.filtro}</span> : ''}
      <input value={input.email} type='email' onChange={handleInput} onBlur={handleError} placeholder='Email' name='email'/>
      {error.email ? <span>{error.email}</span> : ''}
      <button onClick={() => setFilters((prevState) => [...prevState, input.filtro])}>Adicionar</button>
    </form>
    </>
  );
}

export default AddFilter;