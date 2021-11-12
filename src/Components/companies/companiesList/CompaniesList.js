import React from 'react';
import Card from '../companyItem/CompanyItem';
import './companiesList.css';

const companysList = ({ companys }) => {
  return(
    <div className='companys'>
      {
        companys.map(company => (
          <Card key={ company.id } company={ company } />
        ))
      }
    </div>
  )
}

export default companysList;