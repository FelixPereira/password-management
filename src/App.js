import React, { useState } from 'react';
import './app.css';
import CardList from './Components/Cards/Card-list/Card-list';
import Filter from './Components/Filter/Input';
import passwords from './db'; 
import Header from './Components/Header/Header';


const App = () => {
  const [inputTerm, setTerm] = useState('');
  
  const handleFilter = e => {
    setTerm( e.target.value);
  }

  const filteredPasswords = passwords.filter(password => password.username.toLocaleLowerCase().includes(inputTerm.toLocaleLowerCase()))

  return(
      <main className='container'>
        <Header />
        <Filter handleFilter={handleFilter} />
        <CardList passwords={ filteredPasswords } />
      </main>
  )
}

export default App;