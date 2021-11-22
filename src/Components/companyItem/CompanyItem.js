import React from 'react';
import Card from '../companyCard/CompanyCard';
import './companyItem.css';


const CompanyItem = ({company}) => {
  return (
    <section className='teste'>
      {
        company.items.map(item => (
          <Card key={item.id} name={item.name} email={item.email} password={item.password} />
        ))
      }
    </section>
  )
}

export default CompanyItem;