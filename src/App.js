import React, { useState } from 'react';
import './app.css';
import CompanysList from './Components/Companys/Companys-list/Companys-list';
import Filter from './Components/Filter/Input';
import companys from './db'; 
import Header from './Components/Header/Header';
import Popup from './Components/Popup/Popup';


const App = () => {
  const [inputTerm, setTerm] = useState('');
  
  const handleFilter = e => {
    setTerm( e.target.value);
  }

  const filteredCompanys = companys.filter(company => company.username.toLocaleLowerCase().includes(inputTerm.toLocaleLowerCase()))

  return(
    <div>
      <Header />
      <main className='container'>
        <Popup />
        <Filter handleFilter={handleFilter} />
        <CompanysList passwords={ filteredCompanys } />
      </main>
    </div>
  )
}

export default App;