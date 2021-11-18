import React from 'react';
import Card from '../companyItem/CompanyItem';
import './companiesList.css';


const companysList = ({ companies }) => {
  return(
    <div className='companies'>
      {
        companies.map(company => (
          <Card 
            key={ company.id } 
            id={ company.id } 
            name={ company.companyName }
            telephone={ company.telephone }
            email={ company.email }
            website={ company.website }
            detailBtn={ true }
            />
        ))
      }
    </div>
  )
  
}

export default companysList;