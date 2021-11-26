const companies = [
  {
    id: 1,
    companyName: "Tulikeni", 
    email: "gerala@tulikeni.ao", 
    telephone: "",
    website: "tulikeni.ao",
    items: [
      {
        id: 1,
        name: "admin", 
        email: "felix.pereira@devsoft.co.ao", 
        password: "@Tulikeny123#",
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
    companyName: "Lac", 
    email: "felix.pereira@devsoft.co.ao", 
    telephone: "+244 9xx xx xx",
    website: "lac.ao",
    items: [
      {
        id: 1,
        name: "admin", 
        email: "felix.pereira@devsoft.co.ao", 
        password: "admin123",
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
      },
      {
        id: 4,
        name: "Jorge", 
        email: "jorge@pocnoticias.ao", 
        password: "jorge123",
      },

      {
        id: 5,
        name: "Pedro", 
        email: "pedro@pocnoticias.ao", 
        password: "pedro123",
      },

      {
        id: 6,
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


