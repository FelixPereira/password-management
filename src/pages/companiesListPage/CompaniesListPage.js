import React, { useState } from 'react';
import Filter from '../../components/filter/FilterInput';
import CompaniesList from '../../components/companies/companiesList/CompaniesList';
import companys from '../../db';



const HomePage = () => {

  const [inputTerm, setTerm] = useState('');

  const filteredCompanys = companys.filter(company => company.companyName.includes(inputTerm))

  const handleFilter = e => {
    setTerm( e.target.value);
  }

  return(
    <div>
      <Filter handleFilter={handleFilter} />
      <CompaniesList companys={ filteredCompanys } />
    </div>
  )
}

export default HomePage;