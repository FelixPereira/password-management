import React, { useState } from 'react';
import Filter from '../../Components/Filter/Input';
import CompanysList from '../../Components/Companys/cards-list/cards-list';
import companys from '../../db';



const HomePage = () => {

  const [inputTerm, setTerm] = useState('');

  const filteredCompanys = companys.filter(company => company.companyName.includes(inputTerm))

  const handleFilter = e => {
    setTerm( e.target.value);
  }

  return(
    <div>
      <main className='container'>
        <Filter handleFilter={handleFilter} />
        <CompanysList companys={ filteredCompanys } />
      </main>
    </div>
  )
}

export default HomePage;