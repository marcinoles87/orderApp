import { useState } from "react"

function Filters({stany,setStany,filtered,setFiltered,setStanyPoprawne}) {


  const [grupa,setGrupa] = useState('')
  const [produkt,setProdukt] = useState('')
  const [kod,setKod] = useState('')

  const stanyNowe = [...stany]


  const handleSearch = () =>{


    if(grupa.length>0){
        const filteredGrupa = stanyNowe.filter( item => item.GRUPA.includes(grupa) )
        setFiltered(filteredGrupa)
        setStanyPoprawne(false)
        console.log('grupa')

    }

     if(kod.length>0){
       const filteredKod = stanyNowe.filter( item =>item.INDEKS.includes(kod) )
        setFiltered(filteredKod)
        setStanyPoprawne(false)
        console.log('kod')

    }

    if(produkt.length>0){
       const filteredProdukt = stanyNowe.filter( item =>item.NAZWA.includes(produkt) )
        setFiltered(filteredProdukt)
        setStanyPoprawne(false)
        console.log('produkt')

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