import React from 'react';
import { useParams } from 'react-router-dom';

import './companyDetailPage.css';

import { getCompany } from '../../db';
import Sidebar from '../../components/sidebar/Sidebar';

const CompanyDetail = () => {
  const params = useParams();
  return(
    <section className='companyDetail'>
      <h2>Meu nome</h2>
    </section>
  )
}

export default CompanyDetail;