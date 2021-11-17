import React, { useState } from 'react';
import Filter from '../../components/filter/FilterInput';
import CompaniesList from '../../components/companies/companiesList/CompaniesList';
import companies from '../../db';



const CompaniesListPage = () => {

 
  const [inputTerm, setTerm] = useState('');

  const filteredCompanies = companies.filter(company => company.companyName.toLowerCase().includes(inputTerm.toLocaleLowerCase()));

  const handleFilter = e => {
    setTerm( e.target.value);
  }

  return(
    <div>
      <Filter handleFilter={handleFilter} />
      <CompaniesList companies={ filteredCompanies } />
    </div>
  )
}

export default CompaniesListPage;