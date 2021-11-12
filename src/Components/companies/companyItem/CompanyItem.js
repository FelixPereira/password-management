import React from 'react';
import './companyItem.css';

const company = ({ company }) => {
  return(
    <article className='card'>
      <div className='card__header'>
        <h3> { company.companyName } </h3>
      </div>

      <div className='card__body'>
        <p> <span> Telefone: </span> { company.telephone } </p>
        <p> <span> Email: </span> { company.email } </p>
        <p> <span> Website: </span> { company.website } </p>
      </div>

      <div className='card__footer'>
        <button className='btn company__detailsBtn'>Detalhes</button>
        <button className='btn company__archieveBtn'>Arquivar</button>
        <button className='btn company__btn-- companys__deleteBtn'>Remover</button>
      </div>
    </article>
  )
}

export default company;