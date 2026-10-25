import database from '../json/MGL.json'
import { useEffect, useState } from 'react'
import Filters from './Filters'



function Stany({stany,setStany,setKoszyk}) {



 useEffect( () => {

    async function loadData() {

        setStany(database.slice(0,10))
    }  

    loadData()

 },[])

 const getColor = (stan) =>{
    if(stan <2) return 'red';
    if(stan >=2) return 'green';
   
 }

 /*dodawanie produktu do zamowienia */

 const addItem = (item) =>{

    const koszyk = document.querySelector('.koszyk-container')
    koszyk.classList.toggle('resize')
    setKoszyk( prev => [...prev,item])
 }
   
  return (
    <div className='stany-container'>
        <div className='stany-datas'>
            <h1>Stany</h1>

                <Filters stany={stany} setStany={setStany}></Filters>

                   {stany.map( (item) =>{
                    return(
                            
                            <div className='stany-data' key={item.INDEKS}>
                                <p>{item.GRUPA} </p>
                                <p>{item.INDEKS} </p>
                                <p>{item.NAZWA} </p>
                                <p style={{color:getColor(item.STAN_KIL)}}>{Math.trunc(item.STAN_KIL)} szt </p>
                                <button onClick={ () => addItem(item)}> ADD</button>
                                
                            </div>
                            
                            
                            
                    
                    
                )
            })} 
                
        </div>

    </div>
  )
}

export default Stany
