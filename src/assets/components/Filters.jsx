import { useState } from "react"

function Filters({stany,setStany,filtered,setFiltered,setStanyPoprawne}) {


  const [grupa,setGrupa] = useState('')
  const [produkt,setProdukt] = useState('')
  const [kod,setKod] = useState('')

  const stanyNowe = [...stany]

  console.log(stany)
  console.log(stanyNowe)
  console.log(produkt)
  console.log(kod)

  const handleSearch = () =>{

    

    let filteredStany = stany.filter( item => item.GRUPA.includes(grupa))
    let filteredKod = stany.filter( item =>item.INDEKS.includes(kod) )

    console.log(kod)
    console.log(grupa)
    console.log(filteredKod)


      if(filteredStany.length ===0){
      setStanyPoprawne(true)
      alert('brak wyszukiwania')

    }else{
      setFiltered(filteredStany)
      setStanyPoprawne(false)
    }

  
      
    if(filteredKod.length ===0){
      setStanyPoprawne(true)
      alert('brak dopasowania')
    }else{
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