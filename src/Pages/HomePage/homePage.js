import React from 'react';
import CompanysList from '../../Components/Companys/cards-list/cards-list';
import Filter from '../../Components/Filter/Input';
import companys from '../../db';



const HomePage = ({ filteredCompanys }) => {

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