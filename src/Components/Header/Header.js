import React from 'react';
import './Header.css';

const header = () => {
  return(
    <header className='header'>
      <div className='header_logo'>
        <img src='https://devsoft.co.ao/wp-content/uploads/2020/06/cropped-devsoft.png' width='200px' alt='Logotipo da devsoft'/>
      </div>
      <button className='btn'>Adicionar</button>
    </header>
  )
}

export default header;