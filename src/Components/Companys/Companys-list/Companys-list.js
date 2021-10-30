import React from 'react';
import Company from '../Company/Company';
import './Companys-list.css';

const companysList = ({ passwords }) => {
  return(
    <div className='passwords'>
      <div className='passwords__innerSection'>
        {
          passwords.map(password => (
            <Company key={ password.id } password={ password } />
          ))
        }
      </div>
    </div>
  )
}

export default companysList;