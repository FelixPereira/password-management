import React from 'react';
import './filterInput.css';

const filter = ({ handleFilter }) => {
  return(
    <div className='form_filds'>
      <input
        onChange={handleFilter}
        type='search'
        placeholder='Insira um termo...'
      />
    </div>
  )
}

export default filter;