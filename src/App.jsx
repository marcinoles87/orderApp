import { useState,useEffect } from "react"
import {  BrowserRouter,  Link,  Route, Routes } from "react-router-dom"
import '../src/App.css'
import axios from "axios"

import Zamowienie from "./assets/components/Zamowienie"
import Koszyk from "./assets/components/Koszyk"
import Main from "./assets/components/Main"
import Users from "./assets/users/Users"
import Admin from "./assets/components/Admin"


function App() {


  const [admin,setAdmin] = useState('')
  const [adminHaslo,setAdminHaslo] = useState('')
  const [login,setLogin] = useState('')
  const [loginPass,setLoginPass] = useState(false)
  const [text,setText] = useState('')
  const [koszyk,setKoszyk] = useState([])
  const [stany,setStany] = useState([])
  const [filtered,setFiltered] = useState([])
  const [zamowienia,setZamowienia] = useState([])

  
   useEffect( () => {
    axios.get('http://localhost:8080')
    
    .then( res => {
      console.log(res.data)
      setZamowienia(res.data)
    } )
    
    
    .catch( err => console.log(err))
  },[])

 
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
    if(admin==='m500' & adminHaslo==='m500pass' ){
      alert('dane poprawne moze dodac stany')
      document.querySelector('.stany-plik-container').classList.add('visible')
      setLoginPass(true)
    }else{
      alert('zle dane')
    }
  }

  const handleLogin = () =>{

    if(login ==='M4'){
      console.log('m4')
      setStany(stany.filter( item => item.GRUPA ==='3H' || item.GRUPA ==='1G' ))

      document.querySelector('#inputLogin').value = ''
    }
  }


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
          <Link to={loginPass ? 'admin' : '/'} onClick={handleAdminLogin}>Login</Link>
          
        </div>

         <div className="admin-container">
          <p>User</p>
          <input id="inputLogin" type="text" placeholder="login" onChange={ (e) =>setLogin(e.target.value)}/>
          <input id="inputLoginPass" type="text" placeholder="hasło" onChange={ (e) =>setLoginPass(e.target.value)}/>
          <Link to='user' onClick={handleLogin}>Login</Link>
          
        </div>

      </div>

       
      <div className="panel-right-container">
              {/* <h1>Platforma do tworzenia zamówień</h1> */}

        <Koszyk koszyk={koszyk}></Koszyk>

        <Routes>
          <Route path="*" element={<Main text={text} setKoszyk={setKoszyk} stany={stany} setStany={setStany} filtered={filtered} setFiltered={setFiltered}></Main>} ></Route>
          <Route path="zamowienie" element={<Zamowienie koszyk={koszyk}></Zamowienie>}></Route>
          <Route path="user" element={<Users login={login} stany={stany} setStany={setStany} setKoszyk={setKoszyk}></Users>}></Route>
          <Route path="admin" element={<Admin zamowienia={zamowienia}></Admin>}/>
        </Routes>
      </div>
       

     </BrowserRouter>
    </div>
  
  )
}

export default App
