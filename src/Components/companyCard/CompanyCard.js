import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';
import './companyCard.css';


const Card = ({ id, name, telephone, email, website, password, detailBtn }) => {
  return(
    <article className='card'>
      <div className='card__header'>
        <h3> { name } </h3>
      </div>

      <div className='card__body'>
        {telephone ? (<p><strong> Telefone: </strong> { telephone } </p>) : null }

        {email ? (<p> <strong> Email: </strong> { email } </p>) : null }

        {website ? (<p><strong> Website: </strong> { website } </p>) : null }

        {password ? (<p><strong> Senha: </strong> { password } </p>) : null }
      </div>

      <div className='card__footer'>
        {detailBtn ? (<Link to={`/companieslist/${id}`}className='btn'>Detalhe</Link>) : null}
          
        <Button>Arquivar</Button>
        <Button>Remover</Button>
      </div>
    </article>
  )
}

export default Card;