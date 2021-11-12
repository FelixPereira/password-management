import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const header = ({ handleAddCompany }) => {

  return(
    <header className='header'>
      <div className='header__items'>
        <Link to='/'>
          <img src='https://devsoft.co.ao/wp-content/uploads/2020/06/cropped-devsoft.png' width='200px' alt='Logotipo da devsoft'/>
        </Link>
        <button onClick={handleAddCompany} className='btn'>Adicionar</button>
      </div>
    </header>
  )
}

export default header;