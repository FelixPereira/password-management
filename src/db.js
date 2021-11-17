const companies = [
  {
    id: 1,
    companyName: "Devsoft", 
    email: "gerala@devsoft.co.ao", 
    telephone: "+244 934654785",
    website: "devsoft.co.ao",
    items: [
      {
        id: 1,
        name: "António", 
        email: "antonio.@devsoft.co.ao", 
        password: "antonio123",
      },

      {
        id: 2,
        name: "Félix", 
        email: "felix.@devsoft.co.ao", 
        password: "felix23",
      },

      {
        id: 3,
        name: "Mauro", 
        email: "mauro.@devsoft.co.ao", 
        password: "mauro123",
      }
    ]
  },

  {
    id: 2,
    companyName: "Pocnotícias", 
    email: "geral@pocnoticias.ao", 
    telephone: "+244 934654785",
    website: "pocnoticias.ao",
    items: [
      {
        id: 1,
        name: "Jorge", 
        email: "jorge@pocnoticias.ao", 
        password: "jorge123",
      },

      {
        id: 2,
        name: "Pedro", 
        email: "pedro@pocnoticias.ao", 
        password: "pedro123",
      },

      {
        id: 3,
        name: "João", 
        email: "joao@pocnoticias.ao", 
        password: "joao123",
      }
    ]
  },

  {
    id: 3,
    companyName: "Ndaty shipping", 
    email: "geral@ndaty-shipping.com", 
    telephone: "+244 933894785",
    website: "ndaty-shipping.com",
    items: [
      {
        id: 1,
        name: "Abílio", 
        email: "abilio@ndaty-shipping.com", 
        password: "abilio123",
      },

      {
        id: 2,
        name: "Paulo", 
        email: "paulo@ndaty-shipping.com", 
        password: "paulo",
      },

      {
        id: 3,
        name: "João", 
        email: "joao@ndaty-shipping.com", 
        password: "joao123"
      }
    ]
  }
]

export function getCompanies() {
  return companies;
}

export function getCompany(id) {
  return companies.find(company => company.id === id);
}


