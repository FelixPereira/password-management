import React from 'react';
import Company from '../Company/Company';
import './Companys-list.css';

const companysList = ({ companys }) => {
  return(
    <div className='companys'>
      <div className='companys__innerSection'>
        {
          companys.map(company => (
            <Company key={ company.id } company={ company } />
          ))
        }
      </div>
    </div>
  )
}

export default companysList;