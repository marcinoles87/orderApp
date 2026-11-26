
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const { data } = require('react-router-dom');

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
    
    const sql = "SELECT * from order1"
    db.query(sql , ( err , data) => {
        if(err) return res.json(err);
        return res.json(data)

    })
})



app.get('/:login' , (req ,res) =>{

    const log = req.params
    console.log(log)

    const sql = "SELECT * from order1"
      db.query(sql , ( err , data) => {
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post('/',(req , res) => {

    const Tablica = req.body.Tablica
    const json = JSON.stringify(Tablica)
    const Klient = req.body.Klient
    const Email = req.body.Email;
    const Nazwa = req.body.Nazwa;
    const Kod = req.body.Kod;

    const zam = req.body.Tablica.map( (item) =>[item.NAZWA])

    // const sql2 = `CREATE TABLE order2 (id_elementu INT PRIMARY KEY AUTO_INCREMENT, Klient VARCHAR(200) NOT NULL,tablica VARCHAR(200))`

    const sql = `INSERT INTO order1 (id_elementu,Klient,tablica) VALUES (?,?,?)`
  
    
    // db.query(sql2)

    db.query(sql,['test',Klient,[json]],
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