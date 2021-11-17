import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import './companyItem.css';


const Company = ({ company }) => {
  return(
    <article className='companies__item'>
      <div className='companies__name'>
        <h3> { company.companyName } </h3>
      </div>

      <div className='companies__details'>
        <p> <span> Telefone: </span> { company.telephone } </p>
        <p> <span> Email: </span> { company.email } </p>
        <p> <span> Website: </span> { company.website } </p>
      </div>

      <div className='companies__btn'>
        <Link to={`/companieslist/${company.id}`} className='btn'>Detalhes</Link>
        <Button>Arquivar</Button>
        <Button>Remover</Button>
      </div>
    </article>
  )
}

export default Company;