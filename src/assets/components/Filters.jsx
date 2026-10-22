
function Filters() {
  return (
    <div className='filters-container'>
        <div>
            <h2>Filters</h2>
            <input type="text" placeholder="grupa" />
            <input type="text" placeholder="produkt" />
            <input type="text" placeholder="kod" />
            <button>Zastosuj</button>
        </div>
    </div>
  )
}

export default Filters