import React, { useState, useEffect } from 'react';

function Render() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Montado!');
    return () => console.log('Desmontei!')
  }, [contador])

  return (
    <>
      <h1>Render</h1>
      <button onClick={() => setContador((prevState) => prevState + 1)}>Adicionar</button>
    </>
  );
}

export default Render;