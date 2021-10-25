import React from 'react';
import CardList from './Components/Cards/Card-list/Card-list';


const App = () => {
    const passwords = [
        {
            "id": 1,
            "companyName": "devsoft", 
            "username": "Félix",
            "email": "felix.pereira@devsoft.co.ao", 
            "password": "felix123",
            "loginLink": "https://devsoft.co.ao/webmail"
          },
      
          {
            "id": 2,
            "companyName": "devsoft", 
            "username": "Félix",
            "email": "felix.pereira@devsoft.co.ao", 
            "password": "felix123",
            "loginLink": "https://devsoft.co.ao/webmail"
          },
      
          {
            "id": 3,
            "companyName": "devsoft", 
            "username": "Félix",
            "email": "felix.pereira@devsoft.co.ao", 
            "password": "felix123",
            "loginLink": "https://devsoft.co.ao/webmail"
          },
      
          {
            "id": 4,
            "companyName": "devsoft", 
            "username": "Félix",
            "email": "felix.pereira@devsoft.co.ao", 
            "password": "felix123",
            "loginLink": "https://devsoft.co.ao/webmail"
          }
    ]

    return(
        <main className='container'>
            <CardList passwords={ passwords } />
        </main>
    )
}

export default App;