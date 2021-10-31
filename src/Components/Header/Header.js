import React from 'react';
import './Header.css';
//import Popup from '../Popup/Popup';

const header = ({ handleAddCompany }) => {

  return(
    <header className='header'>
      <div className='header_logo'>
        <img src='https://devsoft.co.ao/wp-content/uploads/2020/06/cropped-devsoft.png' width='200px' alt='Logotipo da devsoft'/>
      </div>
      <button onClick={handleAddCompany} className='btn'>Adicionar</button>
    </header>
  )
}

export default header;