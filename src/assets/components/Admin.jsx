import React from 'react'

function Admin({zamowienia}) {
  return (
    <div>Admin
    {zamowienia.map( (item,index) =>{
        return(
            <div className='admin-container' key={index}>
              <div className='admin-items'>
                          <p>Klient : {item.Klient}</p>
                          <p>Email : {item.Email}</p>
                          <p>Produkt : {item.Nazwa}</p>
                          <p>Kod : {item.Kod}</p>
              </div>
              
            </div>

        )
    })}
    </div>
  )
}

export default Admin