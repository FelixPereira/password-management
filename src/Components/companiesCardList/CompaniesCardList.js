import React from 'react';
import Card from '../companyCard/CompanyCard';
import './companiesCardList.css';


const CompaniesCardList = ({ companies }) => {
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

export default CompaniesCardList;