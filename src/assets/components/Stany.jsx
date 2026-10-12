import React from 'react'
import stany from '../components/Stany.jsx'

function Stany
() {
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
