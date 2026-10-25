

function Zamowienie({koszyk}) {

  

  const thStyle = {
  borderBottom: "2px solid #ccc",
  padding: "8px",
  textAlign: "left",
  background: "#f5f5f5",
};

const tdStyle = {
    marginLeft: "10px",

  textAlign : 'left',
  borderBottom: "1px solid #eee",
  padding: "8px",
};

function getColor(stock) {
  if (stock === 0) return "red";
  if (stock < 10) return "orange";
  return "green";
}
  return (
    <div className="zamowienie-container">
      <h1>Zamowienie</h1>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead style={{textAlign:'center'}}>
        <tr>
          <th style={thStyle}>Grupa</th>
          <th style={thStyle}>Produkt</th>
          <th style={thStyle}>SKU</th>
          <th style={thStyle}>Ilosc</th>
          <th style={thStyle}>Stan magazynu</th>
        </tr>
      </thead>

      <tbody>
        {koszyk.map((item) => (
          <tr key={item.sku} style={{textAlign :'center'}}>
            <td style={tdStyle}>{item.GRUPA}</td>
            <td style={tdStyle}>{item.NAZWA}</td>
            <td style={tdStyle}>{item.INDEKS}</td>
            <td style={tdStyle}>1szt</td>
            <td style={{ ...tdStyle, color: getColor(item.STAN_KIL) }}>
              {item.STAN_KIL}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  




     
    </div>
  )
}

export default Zamowienie