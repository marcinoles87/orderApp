import database from '../json/MGL.json'
import { useEffect, useState } from 'react'



function Stany() {

 const [stany,setStany] = useState([])

 useEffect( () => {


    
    async function loadData() {

        setStany(database.slice(0,10))
    }  

    loadData()

 },[])

 console.log(stany)

   
  return (
    <div className='stany-container'>
        <div className='stany-datas'>
            <h1>Stany</h1>
            <table>
                <thead>
                   <tr>
                        <th>Grupa</th>
                        <th>Nazwa</th>
                        <th>Stan</th>
                    </tr> 
                </thead>
                
                <tbody>

                   {stany.map( (item) =>{
                    return(
                            <>
                            <tr key={item.INDEKS}>
                                <th>{item.GRUPA}</th>
                                <th>{item.NAZWA}</th>
                                <th>{Math.trunc(item.STAN_KIL)}</th>
                            </tr>
                            </>
                    
                    
                )
            })} 
                </tbody>
                


            </table>
        </div>

    </div>
  )
}

export default Stany
