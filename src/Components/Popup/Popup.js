import React from 'react';
import './Popup.css';

const popup = () => {
  return(
    <div className='form'>
      <form>
        <div className='form_filds'>
          <label htmlFor='name'> Nome da empresa </label>
          <input
            id='name'
            type='text'
            placeholder='Nome da empresa' />
        </div>

        <div className='form_filds'>
          <label htmlFor='contacto'> Contacto da empresa </label>
          <input
            id='contacto'
            type='tel'
            placeholder='Contacto da empresa' />
        </div>

        <div className='form_filds'>
          <label htmlFor='email'> Email da empresa </label>
          <input
            id='email'
            type='email'
            placeholder='Email da empresa' />
        </div>

        <div className='form_filds'>
          <label htmlFor='url'> URL do website </label>
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