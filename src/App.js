import React from 'react';
import './app.css';
import CardList from './Components/Cards/Card-list/Card-list';
import passwords from './db'; 


const App = () => {
    return(
        <main className='container'>
            <CardList passwords={ passwords } />
        </main>
    )
}

export default App;