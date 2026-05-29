const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "cadastrarpessoas"
});

 //CREATE 
 app.post("/cadastrar", (req, res) => {
    const sql = "INSERT INTO cadastro(name, email, password) VALUES(?)";
    const valores = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql, [valores], (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao cadastrar "});

        }

        return res.json(data);
    });
    
 });


app.listen(7006, () => {
    console.log("Conectado ao banco de dados");
})