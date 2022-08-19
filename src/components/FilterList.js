import React from 'react';

function FilterList({ filters, setFilters }) {

  function handleDeleteFilter(filterName) {
    const newFilters = filters.filter((filter) => filter !== filterName);
    setFilters(newFilters);
  }

  return (
    <>
      <h2>Filtros</h2>
      <ul>
        {
          filters.length > 0 ? filters.map((filter) => (
            <>
              <li key={filter}>{filter}</li>
              <button onClick={ () => handleDeleteFilter(filter)}>X</button>
            </>
          )) : <p>Sem filtros adicionados</p>
        }
      </ul>
    </>
  );
}

export default FilterList;