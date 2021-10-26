import React from 'react';
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