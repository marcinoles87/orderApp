import { useState } from "react"
import {  BrowserRouter,  Route, Routes } from "react-router-dom"
import '../src/App.css'

import Zamowienie from "./assets/components/Zamowienie"
import Koszyk from "./assets/components/Koszyk"
import Main from "./assets/components/Main"


function App() {


  const [admin,setAdmin] = useState('')
  const [adminHaslo,setAdminHaslo] = useState('')
  const [text,setText] = useState('')
  const [koszyk,setKoszyk] = useState([])
  const [stany,setStany] = useState([])
 
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

  const handleAdminLogin = () =>{
    if(admin==='m500' &adminHaslo==='m500pass' ){
      alert('dane poprawne moze dodac stany')
      document.querySelector('.stany-plik-container').classList.add('visible')
    }else{
      alert('zle dane')
    }
  }

  console.log(admin)

  return (
    <div className='app-container'>
      <BrowserRouter>

      <div className="panel-left-container">

      <p>MEGAPUNKT 500 B2B PANEL</p>
         <div className="stany-plik-container">
          <p>Dodaj stany </p>
          <input type="file"  id="fileUpload" onChange={ (e) => handleUploadFile(e)}/>
        </div>

         <div className="admin-container">
          <p>Admin</p>
          <input onChange={(e) =>setAdmin(e.target.value)} type="text" placeholder="login"/>
          <input onChange={(e) =>setAdminHaslo(e.target.value)} type="text" placeholder="hasło" />
          <button onClick={handleAdminLogin}>Login</button>
          
        </div>

         <div className="admin-container">
          <p>User</p>
          <input type="text" placeholder="login"/>
          <input type="text" placeholder="hasło" />
          <button>Login</button>
          
        </div>

      </div>

      
       
      <div className="panel-right-container">
              {/* <h1>Platforma do tworzenia zamówień</h1> */}

        <Koszyk koszyk={koszyk}></Koszyk>

        <Routes>
          <Route path="*" element={<Main text={text} setKoszyk={setKoszyk} stany={stany} setStany={setStany}></Main>} ></Route>
          <Route path="zamowienie" element={<Zamowienie koszyk={koszyk}></Zamowienie>}></Route>
        </Routes>
      </div>
       

     </BrowserRouter>
    </div>
  
  )
}

export default App
