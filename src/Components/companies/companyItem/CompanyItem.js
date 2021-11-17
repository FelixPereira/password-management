import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';
import './companyItem.css';


const Card = ({ id, name, telephone, email, website, senha, username, items }) => {
    items.map(item => (
      console.log(item[1])
    ))


  return(
    <div>
    <article className='card'>
      <div className='card__header'>
        <h3> { name } </h3>
      </div>

      <div className='card__body'>
        {telephone ? (<p> <strong> Telefone: </strong> { telephone } </p>) : null }

        {email ? (<p> <strong> Email: </strong> { email } </p>) : null }

        {website ? (<p> <strong> Website: </strong> { website } </p>) : null }

        {senha ? (<p> <strong> Senha: </strong> { senha } </p>) : null }

        {username ? (<p> <strong> Username: </strong> { username } </p>) : null }
      </div>

      <div className='card__footer'>
        <Link to={`/companieslist/${id}`} className='btn'>Detalhes</Link>
        <Button>Arquivar</Button>
        <Button>Remover</Button>
      </div>
    </article>
    </div>
  )
}

export default Card;