import './App.scss';
import React, { useState } from 'react';
import AddFilter from './components/AddFilter';
import FilterList from './components/FilterList';
import Render from './components/Render';

function App() {
  const [filters, setFilters] = useState([]);
  const [render, setRender] = useState(true);

  return (
    <>
      <AddFilter setFilters={setFilters} />
      <FilterList filters={filters} setFilters={setFilters} />
      <button onClick={() => setRender((bananinha) => !bananinha)}>Renderize</button>
      {render ? <Render /> : ''}
    </>
  );
}

export default App;