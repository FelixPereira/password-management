import React from 'react';
import './Company.css';

const company = ({ password }) => {
  return(
    <article className='companys__item'>
      <div className='companys__companyName'>
        <h3> { password.companyName } </h3>
      </div>

      <div className='companys__details'>
        <p> <span> Contacto: </span> { password.email } </p>
        <p> <span> Email: </span> { password.email } </p>
        <p> <span> Website: </span> { password.email } </p>
      </div>

      <div className='companys_btn'>
        <button className='btn'>Detalhes</button>
        <button className='btn'>Arquivar</button>
        <button className='btn companys__btn--red'>Remover</button>
      </div>
    </article>
  )
}

export default company;