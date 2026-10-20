
function Zamowienie({koszyk}) {
  return (
    <div className="zamowienie-container">
      <h1>Zamowienie</h1>
              <table>
                <thead>
                   <tr>
                        <th>Grupa</th>
                        <th>Indeks</th>
                        <th>Nazwa</th>
                        <th>Ilosc</th>
                    </tr> 
                </thead>
                
                <tbody>

                   {koszyk.map( (item) =>{
                    return(
                            
                            <tr key={item.INDEKS}>
                                <th>{item.GRUPA}</th>
                                <th>{item.INDEKS}</th>
                                <th>{item.NAZWA}</th>
                                <th>1szt</th>
                                
                            </tr>
                            
                            
                            
                    
                    
                )
            })} 
                </tbody>
                


            </table>
     
    </div>
  )
}

export default Zamowienie