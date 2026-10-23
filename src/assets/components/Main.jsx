import Stany from './Stany'

function Main({text,setKoszyk,stany,setStany}) {
  return (
    <div className='main-container'>
         <div>
          <p id="output">{text}</p>
          <Stany stany={stany} setStany={setStany} setKoszyk={setKoszyk}></Stany>
        </div>
        
    </div>
  )
}

export default Main