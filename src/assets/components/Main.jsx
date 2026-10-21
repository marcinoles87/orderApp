import Stany from './Stany'

function Main({text,setKoszyk}) {
  return (
    <div className='main-container'>
         <div>
          <p id="output">{text}</p>
          <Stany setKoszyk={setKoszyk}></Stany>
        </div>
        
    </div>
  )
}

export default Main