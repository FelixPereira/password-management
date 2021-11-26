import React from 'react';

import './button.css';

const Button = ({ children }) => {
  return(
    <button 
      className={
        if(children == 'Remover') {
          return 'companies__btn--delete'
        } else if(children === 'Sign in with Google') {
            return 'sign-with-google btn'
        } else {
          return 'btn'
        }

        children === 'Remover' ? 'companies__btn--delete' : 'btn' : 
        children === 'Sign in with Google' ? 'sign-with-google btn' : 'btn' 

        }>
      {children}


    </button>
  )
}

export default Button;