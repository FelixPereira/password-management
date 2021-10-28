import React from 'react';
import './Header.css';

const header = () => {
  return(
    <header className='header'>
      <div className='header_logo'>
        <img src='#' alt='Logotipo da devsoft'/>
      </div>
      <button className='header_btn'>Adicionar</button>
    </header>
  )
}

export default header;