import { useState } from "react"


function App() {

  const [text,setText] = useState('')
 
  const handleUploadFile = (e) =>{

    console.log(e)
    e.preventDefault()

    const file = e.target.files[0]
    const fr = new FileReader()

     fr.readAsText(file)

     fr.onload = () =>{

      const content = document.getElementById('output')
      setText(fr.result)
     }
    


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
        </div>

     
    </div>
  )
}

export default App
