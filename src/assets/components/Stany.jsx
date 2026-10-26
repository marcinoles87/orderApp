import database from '../json/MGL.json'
import { useEffect, useState} from 'react'
import Filters from './Filters'



function Stany({stany,setStany,setKoszyk, filtered, setFiltered}) {

const [stanyPoprawne,setStanyPoprawne] = useState(false)

 useEffect( () => {

    async function loadData() {

        setStany(database.slice(0,20))
    }  

    loadData()

 },)

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

                <Filters stany={stany} setStany={setStany} filtered={filtered} setFiltered={setFiltered} setStanyPoprawne={setStanyPoprawne}></Filters>

                            
   <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead style={{textAlign:'center'}}>
        <tr>
          <th style={thStyle}>Grupa</th>
          <th style={thStyle}>Produkt</th>
          <th style={thStyle}>SKU</th>
          <th style={thStyle}>Ilosc</th>
          <th style={thStyle}>Stan magazynu</th>
        </tr>
      </thead>

      <tbody>
        {stanyPoprawne ? 
        stany.map((item) => (
          <tr key={item.sku} style={{textAlign :'center'}}>
            <td style={tdStyle}>{item.GRUPA}</td>
            <td style={tdStyle}>{item.NAZWA}</td>
            <td style={tdStyle}>{item.INDEKS}</td>
            <td style={{ ...tdStyle, color: getColor(item.STAN_KIL) }}>
              {item.STAN_KIL}
            </td>
            <button onClick={ () =>addItem(item)}>Dodaj</button>
          </tr>
        ))

        : filtered}
      </tbody>
    </table>
                            
        </div>

    </div>
  )
}

export default Stany
