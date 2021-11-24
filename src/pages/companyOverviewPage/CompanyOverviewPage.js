import React from 'react';
import { useParams } from 'react-router-dom';


import './companyOverviewPage.css';

import {getCompany} from '../../db';
import Sidebar from '../../components/sidebar/Sidebar';
import CompanyItem from '../../components/companyItem/CompanyItem';


const CompanyOverview = () => {
  const params = useParams();
  const company = getCompany(parseInt(params.companyid, 10))

  return(
    <section className='companyOverview'>
      <Sidebar companyName='teste' />
      <CompanyItem company={company} />
    </section>
  )
}

export default CompanyOverview;