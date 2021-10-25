import React from 'react';
import Card from '../Card/Card';
import './Card-list.css';

const CardList = ({ passwords }) => {
  return(
    <div className='passwords'>
      <div className='passwords__innerSection'>
        {
          passwords.map(password => (
            <Card key={ password.id } password={ password } />
          ))
        }
      </div>
    </div>
  )
}

export default CardList;