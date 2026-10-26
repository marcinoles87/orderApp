import Stany from './Stany'

function Main({text,setKoszyk,stany,setStany,filtered,setFiltered}) {
  return (
    <div className='main-container'>
         <div>
          <p id="output">{text}</p>
          <Stany stany={stany} setStany={setStany} setKoszyk={setKoszyk} filtered={filtered} setFiltered={setFiltered}></Stany>
        </div>
        
    </div>
  )
}

export default Main