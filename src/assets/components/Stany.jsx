import stany from '../json/MGL.json'



function Stany() {

   
  return (
    <div className='stany-container'>
        <div className='stany-datas'>
            <h1>Stany</h1>
            <table>
                <tr>
                        <th>Grupa</th>
                        <th>Nazwa</th>
                    </tr>
                {stany.map( (item,index) =>{
                return(
                    <>
                    <tr>
                        <th>{item.GRUPA}</th>
                        <th>{item.NAZWA}</th>
                    </tr>
                    </>
                    
                    
                )
            })}


            </table>
        </div>

    </div>
  )
}

export default Stany
