const express = require("express");
const mysql = require('mysql');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pawtitas"
})

app.post('/Register',(req,res) => {
    const sql = "INSERT INTO usuarios (`RUT`,`Nombre`,`Apellidos`,`Correo`,`Contraseñas`) VALUES (?)";
    const values = [
        req.body.rut,
        req.body.nombre,
        req.body.apellidos,
        req.body.email,
        req.body.contraseña
    ]
    
    db.query(sql,[values], (err,data)=>{
        if(err){
            return res.json("Error");
        }
        console.log(values.req.body.rut)
        return res.json(data);
        
    })
})

app.listen(8081, ()=> {
    console.log("esperando...")
})