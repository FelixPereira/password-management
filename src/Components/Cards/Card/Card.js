import React from 'react';
import './Card.css';

const Card = ({ password }) => {
  return(
    <article className='passwords__item'>
      <p> Nome da empresa: { password.companyName } </p>
      <p> Nome de usuário: { password.username } </p>
      <p> Email: { password.email } </p>
      <p> Password: { password.password } </p>
      <p> Link para login { password.loginLink } </p>
    </article>
  )
}

export default Card;