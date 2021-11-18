import React from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../components/companies/companyItem/CompanyItem';

import './companyDetailPage.css';

import {getCompany} from '../../db';
//import Sidebar from '../../components/sidebar/Sidebar';

const CompanyDetail = () => {
  const params = useParams();
  const company = getCompany(parseInt(params.companyid, 10))

  return(
    <section className='companyDetail'>
      {
        company.items.map(item => (
          <Card key={item.id} name={item.name} email={item.email} password={item.password} />
        ))
      }
    </section>
  )
}

export default CompanyDetail;