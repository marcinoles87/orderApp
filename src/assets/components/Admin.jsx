import React from 'react'

function Admin({zamowienia}) {
  return (
    <div>Admin
    {zamowienia.map( (item,index) =>{
        return(
            <div key={index}>
                <p>{item.Filia}</p>
                <p>{item.Nazwa}</p>
                <p>{item.Kod}</p>
            </div>

        )
    })}
    </div>
  )
}

export default Admin