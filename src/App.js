import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/header/Header';
import Backdrop from './components/backdrop/Backdrop';
import Popup from './components/popup/Popup';

import CompaniesListPage from './pages/companiesListPage/CompaniesListPage';
import CompanyDetailPage from './pages/companyDetailPage/companyDetailPage';

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
        <Routes>
          <Route path='/' element={<Navigate replace to='/companieslist' />} />
          <Route path='/companieslist' element={<CompaniesListPage />} />
          <Route path='/companieslist/:companyid' element={<CompanyDetailPage />} />
          <Route path='*' element={<CompaniesListPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;