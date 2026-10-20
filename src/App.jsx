import { useState } from "react"
import {  BrowserRouter, Link, Route, Routes } from "react-router-dom"
import '../src/App.css'

import Stany from "./assets/components/Stany"
import Zamowienie from "./assets/components/Zamowienie"
import Koszyk from "./assets/components/Koszyk"
import Main from "./assets/components/Main"


function App() {


  const [text,setText] = useState('')
  const [koszyk,setKoszyk] = useState([])
 
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
      <BrowserRouter>
      <h1>Platforma do tworzenia zamówień</h1>

        <div>
          <p>Dodaj najnowsze stany magazynu</p>
          <input type="file"  id="fileUpload" onChange={ (e) => handleUploadFile(e)}/>
        </div>

        
        <Link to={'zamowienie'}>Zamawiam</Link>
        <Koszyk koszyk={koszyk}></Koszyk>


        <div>
          <p>Login Admin</p>
        </div>

        <div>
          <p>Login User</p>
        </div>

       

        <Routes>
          <Route path="*" element={<Main text={text} setKoszyk={setKoszyk}></Main>} ></Route>
          <Route path="zamowienie" element={<Zamowienie></Zamowienie>}></Route>
        </Routes>

     </BrowserRouter>
    </div>
  
  )
}

export default App
