import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Backdrop from './Components/Backdrop/Backdrop';
import Popup from './Components/Popup/Popup';
import './app.css';

import HomePage from './Pages/HomePage/homePage';


const [inputTerm, setTerm] = useState('');
const [display, setDisplay] = useState(false);
const [backdrop, setBackdrop] = useState(false);
  
const handleFilter = e => {
  setTerm( e.target.value);
}

const filteredCompanys = companys.filter(company => company.companyName.toLocaleLowerCase().includes(inputTerm.toLocaleLowerCase()))



const handleAddCompany = () => {
  setDisplay(!display);
  setBackdrop(!backdrop);
}

const App = () => {
  return(
    <div>
      {backdrop ? <Backdrop handleAddCompany={handleAddCompany}  /> : null}
      {display ? <Popup /> : null}
      <Header handleAddCompany={handleAddCompany}/>
      <HomePage filteredCompanys={filteredCompanys} />
    </div>
  )
}

export default App;