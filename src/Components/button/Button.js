import React from 'react';

import './button.css';

const Button = ({ children }) => {
  return(
    <button className={children === 'Remover' ? 'companies__btn--delete' : 'btn'}>
      {children}
    </button>
  )
}

export default Button;