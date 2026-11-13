
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
    const sql = "INSERT INTO wydarzenia (Nazwa , Data , Opis , Adres , Nip ,Cena ) VALUES (?, ? , ? , ? , ? , ?)"
    const Nazwa = req.body.Nazwa;
    const Data = req.body.Data;
    const Opis = req.body.Opis;
    const Adres = req.body.Adres;
    const Nip = req.body.Nip;
    const Cena = req.body.Cena;

    db.query(sql,[Nazwa,Data,Opis,Adres,Nip,Cena],
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