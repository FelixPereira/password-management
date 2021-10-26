import React from 'react';
import './Card.css';

const Card = ({ password }) => {
  return(
    <article className='passwords__item'>
      <h3 className='passwords__companyName'> { password.companyName } </h3>
      <p className='passwords__userNAme'> <span> Nome de usuário: </span> { password.username } </p>
      <p className='passwords__email'> <span> Email: </span> { password.email } </p>
      <p className='passwords__password'> <span> Password: </span> { password.password } </p>
      <p className='passwords__loginLink'> <span> Link para login </span> { password.loginLink } </p>
    </article>
  )
}

export default Card;