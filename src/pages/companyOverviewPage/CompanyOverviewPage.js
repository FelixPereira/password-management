import React from 'react';
import { useParams } from 'react-router-dom';

import Card from '../../components/companyCard/CompanyCard';

import './companyOverviewPage.css';

import {getCompany} from '../../db';
import Sidebar from '../../components/sidebar/Sidebar';

const CompanyItem = ({company}) => {
  return (
      company.items.map(item => (
        <Card key={item.id} name={item.name} email={item.email} password={item.password} />
      ))
  )
}

const CompanyOverview = () => {
  const params = useParams();
  const company = getCompany(parseInt(params.companyid, 10))

  return(
    <section className='companyDetail'>
      <Sidebar />
      <CompanyItem company={company} />
    </section>
  )
}

export default CompanyOverview;