import React from 'react';
import Card from '../card/card';
import './cards-list.css';

const companysList = ({ companys }) => {
  return(
    <div className='companys'>
      <div className='companys__innerSection'>
        {
          companys.map(company => (
            <Card key={ company.id } company={ company } />
          ))
        }
      </div>
    </div>
  )
}

export default companysList;