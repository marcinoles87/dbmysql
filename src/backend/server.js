const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "s31.cyber-folks.pl",
    user: "v55582726",
    password: "megapunkt500" ,
    database : "v55582726_viptour"
})

app.post("/" , (req , res) => {
    const sql = "INSERT INTO wydarzenia (Nazwa , Data , Opis ) VALUES ( ? , ? , ? )"
    const Nazwa = req.body.Nazwa;
    const Data = req.body.Data;
    const Opis = req.body.Opis;

    db.query(sql ,
        [Nazwa , Data , Opis] , 
        (err , result) => {
            
            if(err) {
                console.log('error')
            }else{
                res.send('values insered')
            }


        }
    )
})

app.get('/' , (req , res) => {
    const sql = "SELECT * from wydarzenia"
    db.query(sql , ( err , data) => {
        if(err) return res.json(err);
        return res.json(data)

    })
})





app.listen(8081, () => {
    console.log('listening')
})