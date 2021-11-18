import React, { useState } from 'react';
import Filter from '../../components/filter/FilterInput';
import CompaniesCardList from '../../components/companiesCardList/CompaniesCardList';
import { getCompanies }  from '../../db';


const CompaniesListPage = () => {
  const companies = getCompanies();

  const [inputTerm, setTerm] = useState('');

  const filteredCompanies = companies.filter(company => company.companyName.toLowerCase().includes(inputTerm.toLocaleLowerCase()));

  const handleFilter = e => {
    setTerm( e.target.value);
  }

  return(
    <div>
      <Filter handleFilter={handleFilter} />
      <CompaniesCardList companies={ filteredCompanies } />
    </div>
  )
}

export default CompaniesListPage;