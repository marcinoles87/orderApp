import {Link} from 'react-router-dom'

function Koszyk({koszyk}) {
  return (
    <div className="koszyk-container">
        <Link to='/zamowienie'>Koszyk{koszyk.length}</Link>

    </div>
  )
}

export default Koszyk