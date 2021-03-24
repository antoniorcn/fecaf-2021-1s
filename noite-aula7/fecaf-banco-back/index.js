const pg = require('pg');
const express = require('express');
const config = require('config');
const path = require('path');
const bodyParser = require('body-parser');  // middleware
const port = process.env.PORT || config.get('server.port');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', port);

const pool = new pg.Pool({
    //                                usuario                                senha                                                     host                  porta    database
    connectionString: 'postgres://hosdinjflcxwwo:d1011e07e66e9b3d02fb73cd511d85e52e3829de8278168c59b3039059577109@ec2-54-211-176-156.compute-1.amazonaws.com:5432/dbh6ue3ida3sii',
    ssl: { 
        rejectUnauthorized: false
    }
});


app.route('/reset').get( (req, res) => {
    let dropCreateTable = "";
    dropCreateTable += "DROP TABLE IF EXISTS lancamentos; ";
    dropCreateTable += "CREATE TABLE lancamentos (";
    dropCreateTable += "data char(12), ";
    dropCreateTable += "descricao char(50), ";
    dropCreateTable += "valor decimal(5, 2) ";
    dropCreateTable += ");";

    pool.query(dropCreateTable, (err, dbres) => { 
        console.log("Error: ", err);
        console.log(dbres);
        res.status(200).send("Banco de dados foi resetado")
    });
});

app.route('/extrato').get( (req, res) => {
    let qry = "SELECT * FROM lancamentos;";
    pool.query(qry, (err, dbres) => { 
        console.log("Error: ", err);
        res.status(200).json(dbres.rows);
    });
});

app.route('/lancamento').post( (req, res) => {
    let qry = "INSERT INTO lancamentos (data, descricao, valor) VALUES ";
    qry += `('${req.body.data}', '${req.body.descricao}', ${req.body.valor});`;
    pool.query(qry, (err, dbres) => { 
        res.status(200).send("Ok");
    });
});

app.listen(port, ()=> { 
    console.log("Servidor iniciado na porta: ", port);
})