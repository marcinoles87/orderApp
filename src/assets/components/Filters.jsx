import { useState } from "react"

function Filters({stany,setStany,filtered,setFiltered,setStanyPoprawne}) {


  const [grupa,setGrupa] = useState('')
  const [produkt,setProdukt] = useState('')
  const [kod,setKod] = useState('')

  const stanyNowe = [...stany]


  const handleSearch = () =>{

   
    
    const filteredKod = stanyNowe.filter( item =>item.INDEKS.includes(kod) )
    const filteredProdukt = stanyNowe.filter( item =>item.NAZWA.includes(produkt) )

    console.log(grupa)

    if(grupa.length>0){
        const filteredGrupa = stanyNowe.filter( item => item.GRUPA.includes(grupa) )
        setFiltered(filteredGrupa)
        setStanyPoprawne(false)
        console.log('grupa')

    }

    
  

    // if(filteredProdukt.length >=1){
    //   setFiltered(filteredProdukt)
    //   setStanyPoprawne(false)
    //   console.log('produkt')
    // }

    // if(filteredGrupa.length >=1){
      
      
    //   console.log('grupa')
    // }


  
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