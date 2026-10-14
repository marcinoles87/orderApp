import { useState } from "react"
import Stany from "./assets/components/Stany"
import '../src/App.css'


function App() {


  const [text,setText] = useState('')
 
  const handleUploadFile = (e) =>{

    console.log(e.target)
    e.preventDefault()

    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = (e) =>{

      document.getElementById('output').value = e.target.result
      setText(e.target.result)
     }

     reader.readAsText(file)
    


     console.log(text)
  

  }

  return (
    <div className='app-container'>
      <h1>Platforma do tworzenia zamówień</h1>

        <div>
          <p>Dodaj najnowsze stany magazynu</p>
          <input type="file"  id="fileUpload" onChange={ (e) => handleUploadFile(e)}/>
        </div>

        <div>
          <p>Login Admin</p>
        </div>

        <div>
          <p>Login User</p>
        </div>

        <div>
          <p>Stany</p>
          <p id="output">{text}</p>
          <Stany></Stany>
        </div>

     
    </div>
  )
}

export default App
