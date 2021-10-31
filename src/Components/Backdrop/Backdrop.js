import React from 'react';
import './Backdrop.css'

const backdrop = ({ handleAddCompany }) => {
  return(
    <div className='backdrop'>
      <span className='backdrop__closePopup' onClick={handleAddCompany}>Close</span>
      <div onClick={handleAddCompany} className='backdrop__backdrop'></div>
    </div>
  )
}

export default backdrop;