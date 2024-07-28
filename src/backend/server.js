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

    console.log(req.body)
    
    const sql = "INSERT INTO wydarzenia (Nazwa , Data , Opis , Adres , Nip , Cena ) VALUES ( ? , ? , ? , ? , ? , ?)"
    const Nazwa = req.body.Nazwa;
    const Data = req.body.Data;
    const Opis = req.body.Opis;
    const Nip = req.body.Nip;
    const Adres = req.body.Adres;
    const Cena = req.body.Cena
    
    
    // const Cena = req.body.Cena;

    db.query(sql , [Nazwa,Data,Opis,Nip,Adres] , 
        (err , result) => {
            console.log(result)
            if(err) {
                console.log('error')
            }else{
                res.send('values insered')
            }

        }
    )
})

app.delete("/delete/:Nazwa" , (req , res) => {

    console.log(req.body)
   
   const sql = "DELETE FROM wydarzenia WHERE Nazwa=? "
   const Nazwa = req.params.Nazwa;

   db.query(sql , Nazwa , 
       (err , result) => {
           
           if(err) {
               console.log(err)
           }else{
               res.send('succes')
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