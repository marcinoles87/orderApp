import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Users({login,stany,setStany,setKoszyk}) {

  const [zamowieniaKlienta,setZamowieniaKlienta] = useState([])

  useEffect( () =>{
    console.log('wykonano')
  },[])
  
    const thStyle = {
    borderBottom: "2px solid #ccc",
    padding: "8px",
    textAlign: "left",
    background:" rgb(35, 163, 168)",
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

 const showOrders = () =>{

  

  if(login){

      axios.get(`http://localhost:8080/${login}`)


    
    .then( res => {

      

      console.log(res.data[0].tablica)
      let newData = res.data[0].tablica.slice(1,184)
      console.log(newData)
      const newData2 = JSON.parse(newData)
      console.log(newData2)
      
      
      setZamowieniaKlienta(res.data)
      console.log(zamowieniaKlienta)
    } )
  }else{

    axios.get('http://localhost:8080/')
    
    .then( res => {

      
      console.log(res.data)
      setZamowieniaKlienta(res.data)
      console.log(zamowieniaKlienta)

  })
    

 }}
   
  
  
   
     
    return (
      <div className='users-container'>

        
        <div>
          <h2 style={{color:'white'}}>Witamy {login}</h2>
        </div>

      <div className='users-dashbord'>


        <div className='dashbord-zamowienia'>
          <p>Zamowienia</p>
          <p>Ilosc zamowien {zamowieniaKlienta.length}</p>
        </div>

        <div className='dashbord-zamowienia'>
          <p>Wartość zakupów</p>
          <p>--- zł</p>
        </div>

        <div className='dashbord-zamowienia'>
          <p>Kupione pozycje</p>
          <p>{zamowieniaKlienta.length}</p>
        </div>

        <div className='dashbord-zamowienia'>
          <p>Do zapłaty</p>
          <p>--- zł</p>
        </div>

        <button onClick={showOrders}>Pokaz zamowienia</button>

        <div className='zamowienia-klienta'>
          {zamowieniaKlienta.map( (item,index) =>{
            return(
              <div className='zamowienie' key={index}>
                <p>{item.Klient}</p>
                <p>{item.id_elementu}</p>
                <p>{item.tablica}</p>
               
                </div>
            )
          })}
        </div>


      </div>
      <div className='stany-container'>
          <div className='stany-datas'>
                                  
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
          
          {stany.map((item,index) => (
            <tr key={index} style={{textAlign :'center'}}>
              <td style={tdStyle}>{item.GRUPA}</td>
              <td style={tdStyle}>{item.INDEKS}</td>
              <td style={tdStyle}>{item.NAZWA}</td>
              <td style={{ ...tdStyle, color: getColor(item.STAN_KIL) }}>
                {Math.trunc(item.STAN_KIL)}
              </td>
                <button  className='buttonAddItem' onClick={ () =>addItem(item)}>+</button>

              
            </tr>
            
          ))}
  
         
        </tbody>
      </table>
                              
          </div>
  
      </div>
      </div>
    )
  }

export default Users