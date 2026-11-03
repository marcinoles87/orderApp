import { useState } from "react"

function Filters({stany,setStany,filtered,setFiltered,setStanyPoprawne}) {


  const [grupa,setGrupa] = useState('')
  const [produkt,setProdukt] = useState('')
  const [kod,setKod] = useState('')

  const stanyNowe = [...stany]


  const handleSearch = () =>{

   
    
    const filteredGrupa = stany.filter( item => item.GRUPA.includes(grupa) )
    const filteredKod = stany.filter( item =>item.INDEKS.includes(kod) )
    const filteredProdukt = stany.filter( item =>item.NAZWA.includes(produkt) || stany.filter( item => item.GRUPA.includes(grupa)  ))

    console.log(filteredGrupa)
    console.log(filteredKod)
    console.log(filteredProdukt)


  

    if(filteredProdukt.length >=1){
      setFiltered(filteredProdukt)
      setStanyPoprawne(false)
    }

    if(filteredGrupa.length >=1){
      setFiltered(filteredGrupa)
      setStanyPoprawne(false)
    }


  
  }

  const handleReset = () =>{
    setStanyPoprawne(true)
  }

  return (
    <div className='filters-container'>
        <div>
            <h2>Filters</h2>
            <input type="text" placeholder="grupa" onChange={(e) =>setGrupa(e.target.value.toUpperCase())}/>
            <input type="text" placeholder="kod SKU" onChange={(e) =>setKod(e.target.value.toUpperCase())}/>
            <input type="text" placeholder="produkt" onChange={(e) =>setProdukt(e.target.value.toUpperCase())}/>
            <button onClick={handleSearch}>Zastosuj</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Filters