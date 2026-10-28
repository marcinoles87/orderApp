import { useState } from "react"

function Filters({stany,setStany,filtered,setFiltered,setStanyPoprawne}) {


  const [grupa,setGrupa] = useState('')
  const [produkt,setProdukt] = useState('')
  const [kod,setKod] = useState('')

  const stanyNowe = [...stany]


  const handleSearch = () =>{

    

    let filteredGrupa = stany.filter( item => item.GRUPA.includes(grupa) )
    let filteredKod = stany.filter( item =>item.INDEKS.includes(kod) )
    let filteredProdukt = stany.filter( item =>item.NAZWA.includes(produkt) )

    console.log(filteredGrupa)
    console.log(filteredKod)
    console.log(filteredProdukt)


      if(filteredGrupa.length >1){
      setFiltered(filteredGrupa)
      setStanyPoprawne(false)
    }

    if(filteredKod.length >1){
      setFiltered(filteredKod)
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
            <input type="text" placeholder="produkt" onChange={(e) =>setProdukt(e.target.value)}/>
            <button onClick={handleSearch}>Zastosuj</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Filters