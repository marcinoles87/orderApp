

function App() {

  const handleUploadFile = (e) =>{

    console.log(e)
    e.preventDefault()

    const file = e.target.files[0]
    console.log(file)

     let fr = new FileReader()

     fr.readAsText(file)

     fr.onload = () =>{

      const content = document.getElementById('output')


      content.textContent = fr.result
     }
    


  

  }

  return (
    <div className='app-container'>
      <h1>Platforma do tworzenia zamówień</h1>

        <div>
          <p>Dodaj najnowsze stany magazynu</p>
          <input type="file"  id="fileUpload" onChange={handleUploadFile}/>
        </div>

        <div>
          <p>Login Admin</p>
        </div>

        <div>
          <p>Login User</p>
        </div>

        <div>
          <p>Stany</p>
          <p id="output"></p>
        </div>

     
    </div>
  )
}

export default App
