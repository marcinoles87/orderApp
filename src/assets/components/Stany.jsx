import database from '../json/MGL.json'
import { useEffect, useState } from 'react'



function Stany() {

 const [stany,setStany] = useState([])

 useEffect( () => {


    
    async function loadData() {

        setStany(database)
    }  

    loadData()

    console.log(stany)
 },[])

   
  return (
    <div className='stany-container'>
        <div className='stany-datas'>
            <h1>Stany</h1>
            <table>
                <thead>
                   <tr>
                        <th>Grupa</th>
                        <th>Nazwa</th>
                    </tr> 
                </thead>
                
                <tbody>
                   {database.map( (item) =>{
                return(
                    <>
                    <tr key={item.INDEKS}>
                        <th>{item.GRUPA}</th>
                        <th>{item.NAZWA}</th>
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
