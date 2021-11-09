import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Backdrop from './Components/Backdrop/Backdrop';
import Popup from './Components/Popup/Popup';

import './app.css';

import HomePage from './Pages/HomePage/homePage';



const App = () => {
  const [display, setDisplay] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  const handleAddCompany = () => {
    setDisplay(!display);
    setBackdrop(!backdrop);
  }

  return(
    <div>
      {backdrop ? <Backdrop handleAddCompany={handleAddCompany}  /> : null}
      {display ? <Popup /> : null}
      <Header handleAddCompany={handleAddCompany}/>
      <HomePage />
    </div>
  )
}

export default App;