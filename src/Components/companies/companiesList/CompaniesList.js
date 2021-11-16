import React from 'react';
import Company from '../companyItem/CompanyItem';
import './companiesList.css';

const companysList = ({ companies }) => {
  return(
    <div className='companies'>
      {
        companies.map(company => (
          <Company key={ company.id } company={ company } />
        ))
      }
    </div>
  )
}

export default companysList;