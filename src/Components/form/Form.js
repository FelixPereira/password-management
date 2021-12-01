import React from 'react';

import './form.css';

import Button from '../button/Button';


const Form = ({ signIn, popup }) => {
  return(
    <form className={`${popup ? 'popup-form' : ''} addNew__form`}>
      {
        popup ?
          <div>
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
            <Button>Adicionar</Button>
          </div>
        : ''
      }
      

      {
        signIn ?
          <idv>
            <div className='form_filds'>
              <label htmlFor='email'> Email </label>
              <input
                id='email'
                type='email'
                placeholder='Email' />
            </div>

            <div className='form_filds'>
              <label htmlFor='password'> Senha </label>
              <input
                id='password'
                type='password'
                placeholder='Senha' />
            </div>

            <div className='signin-btns'>
              <Button>Iniciar sessão</Button>
              <Button>Sign in with Google</Button>
            </div>
          </idv>
          : ''
      }

    </form>
  )
}

export default Form;