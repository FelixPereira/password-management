import React, { useState } from 'react';
import Filter from '../../components/filter/FilterInput';
import CompaniesList from '../../components/companies/companiesList/CompaniesList';
import CompanyDetail from '../companyDetailPage/companyDetailPage';
import companies from '../../db';
import  { useHistory, useMatch } from 'react-router-dom';



const CompaniesListPage = (props) => {
  console.log(props);


  const [inputTerm, setTerm] = useState('');

  const filteredCompanies = companies.filter(company => company.companyName.includes(inputTerm));

  const handleFilter = e => {
    setTerm( e.target.value);
  }

  return(
    <div>
      <Filter handleFilter={handleFilter} />
      <CompaniesList companies={ filteredCompanies } />
      <CompanyDetail {...companies}/>
      
    </div>
  )
}

export default CompaniesListPage;