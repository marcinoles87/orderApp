import database from '../json/MGL.json'
import { useEffect, useState } from 'react'
import Filters from './Filters'



function Stany({setKoszyk}) {


 const [stany,setStany] = useState([])

 useEffect( () => {

    async function loadData() {

        setStany(database.slice(0,10))
    }  

    loadData()

 },[])


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

                <Filters></Filters>

                   {stany.map( (item) =>{
                    return(
                            
                            <div className='stany-data' key={item.INDEKS}>
                                <p>{item.GRUPA} </p>
                                <p>{item.INDEKS} </p>
                                <p>{item.NAZWA} </p>
                                <p>{Math.trunc(item.STAN_KIL)} szt </p>
                                <button onClick={ () => addItem(item)}> ADD</button>
                                
                            </div>
                            
                            
                            
                    
                    
                )
            })} 
                
        </div>

    </div>
  )
}

export default Stany
