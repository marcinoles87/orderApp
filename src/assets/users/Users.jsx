import React from 'react'

function Users({login,stany,setStany,setKoszyk}) {

  if(login ==='MARK4'){
    stany.slice(0,5)
    console.log(stany)
  }
  
    const thStyle = {
    borderBottom: "2px solid #ccc",
    padding: "8px",
    textAlign: "left",
    background: "#f5f5f5",
  };
  
  const tdStyle = {
    marginLeft: "10px",
    textAlign : 'left',
    borderBottom: "1px solid #eee",
    padding: "8px",
  };
  
  
  
   const getColor = (stan) =>{
      if(stan <2) return 'red';
      if(stan >=2) return 'blue';
     
   }

   const addItem = (item) =>{

    const koszyk = document.querySelector('.koszyk-container')
    koszyk.classList.toggle('resize')
    setKoszyk( prev => [...prev,item])
 }
   
  
  
   
     
    return (
      <div className='stany-container'>
          <div className='stany-datas'>
              <h1>Witamy {login} </h1>
  
  
                              
     <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{textAlign:'center'}}>
          <tr>
            <th style={thStyle}>Grupa</th>
            <th style={thStyle}>SKU</th>
            <th style={thStyle}>Produkt</th>
            <th style={thStyle}>Ilosc</th>
            <th style={thStyle}>Stan magazynu</th>
          </tr>
        </thead>
  
        <tbody>
          
          {stany.map((item) => (
            <tr key={item.sku} style={{textAlign :'center'}}>
              <td style={tdStyle}>{item.GRUPA}</td>
              <td style={tdStyle}>{item.INDEKS}</td>
              <td style={tdStyle}>{item.NAZWA}</td>
              <td style={{ ...tdStyle, color: getColor(item.STAN_KIL) }}>
                {Math.trunc(item.STAN_KIL)}
              </td>
                <button  className='buttonAddItem' onClick={ () =>addItem(item)}>Dodaj</button>

              
            </tr>
            
          ))}
  
         
        </tbody>
      </table>
                              
          </div>
  
      </div>
    )
  }

export default Users