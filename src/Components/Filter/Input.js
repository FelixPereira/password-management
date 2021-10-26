import React from 'react';
import './input.css';

const filter = ({ handleFilter }) => {
  return(
    <input
    onChange={handleFilter}
      type='search'
      placeholder='Insira um termo...'
    />
  )
}

export default filter;