
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const Port = '8080'

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "s31.cyber-folks.pl",
    user: "v55582726",
    password: "megapunkt500" ,
    database : "v55582726_viptour"
})

console.log(db)

app.get('/' , (req , res) => {
    
    const sql = "SELECT * from wydarzenia"
    db.query(sql , ( err , data) => {
        if(err) return res.json(err);
        return res.json(data)

    })
})

app.post('/',(req , res) => {

    const sql2 = "CREATE TABLE ElementyZamowienia (id_elementu INT PRIMARY KEY AUTO_INCREMENT, id_zamowienia INT NOT NULL,grupa VARCHAR(50) NOT NULL,indeks VARCHAR(50) NOT NULL,nazwa VARCHAR(200) NOT NULL,ilosc INT NOT NULL CHECK (ilosc > 0))"

    const sql = "INSERT INTO wydarzenia (Klient,Email,Nazwa,Kod) VALUES (?, ? , ? , ?)"
    const Klient = req.body.Klient
    const Email = req.body.Email;
    const Nazwa = req.body.Nazwa;
    const Kod = req.body.Kod;
    

    db.query(sql,[Klient,Email,Nazwa,Kod],
        (err,response) =>{
            console.log(response)
            if(err){
                console.log(err)
            }else{
                res.send('dodano dane')
            }
        }
    )
})




app.listen(Port, () => {
    console.log('listening project')
})