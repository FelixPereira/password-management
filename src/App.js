import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header/Header';
import Backdrop from './components/backdrop/Backdrop';
import Popup from './components/popup/Popup';

import CompaniesListPage from './pages/companiesListPage/CompaniesListPage';

import './app.css';



const App = () => {
  const [popup, setPopup] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  const handleAddCompany = () => {
    setPopup(!popup);
    setBackdrop(!backdrop);
  }

  return(
    <Router>
      <Header handleAddCompany={handleAddCompany}/>
      <main className='container'>
        {backdrop ? <Backdrop handleAddCompany={handleAddCompany}  /> : null}
        {popup ? <Popup /> : null}
        <CompaniesListPage />
      </main>
    </Router>
  )
}

export default App;