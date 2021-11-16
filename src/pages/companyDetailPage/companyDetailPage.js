import React from 'react';
import { useParams } from 'react-router-dom';

import './companyDetailPage.css';


import companies from '../../db';
import Sidebar from '../../components/sidebar/Sidebar';

const CompanyDetail = () => {
  const params = useParams();

  const company = companies.find(company => company.id === parseInt(''));
  console.log(company)

  return(
    <section className='companyDetail'>
      <h2>Meu nome: {company.id}</h2>
    </section>
  )
}

export default CompanyDetail;