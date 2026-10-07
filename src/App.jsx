

function App() {

  const handleUploadFile = () =>{
    
    const file = document.getElementById('fileUpload')
    const output = document.getElementById('output')

    file.addEventListener('change', () =>{

         let fr = new FileReader()

         fr.onload = function () {

          output.textContent = fr.result


         }


    })



   


  }

  return (
    <div className='app-container'>
      <h1>Platforma do tworzenia zamówień</h1>

        <div>
          <p>Dodaj najnowsze stany magazynu</p>
          <input type="file"  id="fileUpload"/>
          <button onClick={handleUploadFile}>Upload File</button>
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
