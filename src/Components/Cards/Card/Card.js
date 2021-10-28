import React from 'react';
import './Card.css';

const Card = ({ password }) => {
  return(
    <article className='companys__item'>
      <div className='companys__companyName'>
        <h3> { password.companyName } </h3>
      </div>

      <div className='companys__details'>
        <p> <span> Nome de usuário: </span> { password.username } </p>
        <p> <span> Email: </span> { password.email } </p>
        <p> <span> Email: </span> { password.email } </p>
      </div>
    </article>
  )
}

export default Card;