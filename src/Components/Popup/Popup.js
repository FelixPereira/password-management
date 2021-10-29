import React from 'react';
import './Popup.css';

const popup = () => {
  return(
    <div className='form'>
      <form>
        <div className='form_filds'>
          <lable for='name'> Nome da empresa </lable>
          <input
            id='name'
            type='text'
            placeholder='Nome da empresa' />
        </div>

        <div className='form_filds'>
          <lable for='contacto'> Contacto da empresa </lable>
          <input
            id='contacto'
            type='tel'
            placeholder='Contacto da empresa' />
        </div>

        <div className='form_filds'>
          <lable for='email'> Email da empresa </lable>
          <input
            id='email'
            type='email'
            placeholder='Email da empresa' />
        </div>

        <div className='form_filds'>
          <lable for='url'> URL do website </lable>
          <input
            id='url'
            type='text'
            placeholder='URL do website' />
        </div>
        
        <button> Adicionar </button>
        
      </form>
    </div>
  )
}

export default popup;