import React, { useState } from 'react';
import './app.css';
import CardList from './Components/Cards/Card-list/Card-list';
import Filter from './Components/Filter/Input';
import passwords from './db'; 


const App = () => {
  let [inputTerm, setTerm] = useState('');
  console.log(inputTerm)

  setTerm = () => {
    this.inputTerm = 'ola'
  }

  return(
      <main className='container'>
        <Filter />
        <CardList passwords={ passwords } />
      </main>
  )
}

export default App;