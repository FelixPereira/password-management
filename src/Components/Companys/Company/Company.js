import React from 'react';
import './Company.css';

const company = ({ company }) => {
  return(
    <article className='companys__item'>
      <div className='companys__companyName'>
        <h3> { company.companyName } </h3>
      </div>

      <div className='companys__details'>
        <p> <span> Contacto: </span> { company.email } </p>
        <p> <span> Email: </span> { company.email } </p>
        <p> <span> Website: </span> { company.email } </p>
      </div>

      <div className='companys_btn'>
        <button className='btn company__detailsBtn'>Detalhes</button>
        <button className='btn company__archieveBtn'>Arquivar</button>
        <button className='btn company__btn-- companys__deleteBtn'>Remover</button>
      </div>
    </article>
  )
}

export default company;