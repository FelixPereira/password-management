import React from 'react';
import Company from '../companyItem/CompanyItem';
import './companiesList.css';

const companysList = ({ companys }) => {
  return(
    <div className='companies'>
      {
        companys.map(company => (
          <Company key={ company.id } company={ company } />
        ))
      }
    </div>
  )
}

export default companysList;