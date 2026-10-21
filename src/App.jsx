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

  }

  return (
    <div className='app-container'>
      <BrowserRouter>

      <div className="panel-left-container">

         <div className="stany-container">
          <p>Dodaj stany </p>
          <input type="file"  id="fileUpload" onChange={ (e) => handleUploadFile(e)}/>
        </div>

         <div className="admin-container">
          <p>Login Admin</p>
          <button>Login</button>
        </div>

        <div className="user-container">
          <p>Login User</p>
        </div>

      </div>

       

        
        


       
      <div className="panel-right-container">
              <h1>Platforma do tworzenia zamówień</h1>

        <Koszyk koszyk={koszyk}></Koszyk>

        <Routes>
          <Route path="*" element={<Main text={text} setKoszyk={setKoszyk}></Main>} ></Route>
          <Route path="zamowienie" element={<Zamowienie koszyk={koszyk}></Zamowienie>}></Route>
        </Routes>
      </div>
       

     </BrowserRouter>
    </div>
  
  )
}

export default App
