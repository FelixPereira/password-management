import React from 'react';

import './sidebar.css';

const Sidebar = ({ companyName }) => {
  return(
    <aside className='sidebar'>
      <h1 style={{color: '#ffffff'}}>{companyName}</h1>
    </aside>
  )
}

export default Sidebar;