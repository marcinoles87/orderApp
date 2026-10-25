import { useState } from "react"

function Filters({stany,setStany}) {


  const [grupa,setGrupa] = useState('')
  const [produkt,setProdukt] = useState('')
  const [kod,setKod] = useState('')

  const stanyNowe = [...stany]



  const handleClik = () =>{

    const filtered = stany.filter( item => item.GRUPA.includes(grupa))

    if(filtered.length ===0){
      setStany(stany)
      alert('brak wyszukiwania')
    }else{
       setStany(filtered)
    }
   
  }




  return (
    <div className='filters-container'>
        <div>
            <h2>Filters</h2>
            <input type="text" placeholder="grupa" onChange={(e) =>setGrupa(e.target.value)}/>
            <input type="text" placeholder="produkt" onChange={(e) =>setProdukt(e.target.value)}/>
            <input type="text" placeholder="kod" onChange={(e) =>setKod(e.target.value)}/>
            <button onClick={handleClik}>Zastosuj</button>
        </div>
    </div>
  )
}

export default Filters