import stany from '../json/MGL.json'



function Stany() {

    fetch('../json/MGL.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
  return (
    <div className='stany-container'>
        <div className='stany-datas'>
            {stany.map( (item,index) =>{
                return(
                    <div className='stany-data' key={index}>
                        {item.nazwa}
                        </div>
                )
            })}
        </div>

    </div>
  )
}

export default Stany
