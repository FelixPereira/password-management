import React from 'react';
import './filterInput.css';

const FilterInput = ({ handleFilter }) => {
  return(
    <div className='form_filds'>
      <input
        className='filter__input'
        onChange={handleFilter}
        type='search'
        placeholder='Insira um termo paa pesquisar...'
      />
    </div>
  )
}

export default FilterInput;