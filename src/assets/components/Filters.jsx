import { useState } from "react"

function Filters({stany,setStany,filtered,setFiltered,setStanyPoprawne}) {


  const [grupa,setGrupa] = useState('')
  const [produkt,setProdukt] = useState('')
  const [kod,setKod] = useState('')

  const stanyNowe = [...stany]

  console.log(stany)
  console.log(stanyNowe)
  console.log(produkt)

  const handleSearch = () =>{

    

    const filteredStany = stany.filter( item => item.GRUPA.includes(grupa))
    const filteredStanyProdukt = stany.filter( item => item.NAZWA.includes(produkt))
    const filteredStanyKod = stany.filter( item => item.INDEKS.includes(kod))

    console.log(filteredStanyProdukt)
    console.log(filteredStany)
    console.log(filteredStanyKod)

      if(filteredStany.length ===0){
      setStanyPoprawne(true)
      alert('brak wyszukiwania')

    }else{
      setFiltered(filteredStany)
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
            <input type="text" placeholder="produkt" onChange={(e) =>setProdukt(e.target.value)}/>
            <input type="text" placeholder="kod" onChange={(e) =>setKod(e.target.value)}/>
            <button onClick={handleSearch}>Zastosuj</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Filters