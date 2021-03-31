const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const pg = require('pg');

const port = process.env.PORT || config.get('server.port');

const pool = new pg.Pool(
    {
        connectionString: "postgres://fivrtpgwuangyi:c81fab4e020e53629101c422750d6d7e881a1b33a130d28df2a3f437eaeb2303@ec2-3-233-43-103.compute-1.amazonaws.com:5432/d1mjgmpk8o2peb",
        ssl: { 
            rejectUnauthorized: false
        }
    }
);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', port);

app.route('/reset').get( (req, res) => { 
    let query = "DROP TABLE IF EXISTS pedidos; ";
    query += "CREATE TABLE pedidos (";
    query += " cliente char(100), ";
    query += " sabor char(50), ";
    query += " quantidade int, ";
    query += " tamanho char(25) ";
    query += ");";

    pool.query(query, (err, dbres) => { 
        console.log("Executando reset de banco de dados");
        if (err) { 
            res.status(500).send(err);
        } else { 
            res.status(200).send("Banco de dados resetado");
        }
    })
});


app.route('/pedidos').get( (req, res)=>{
    let qry = "SELECT * from pedidos;";
    pool.query(qry, (err, dbres) => { 
        if (err) { 
            res.status(500).send(err);
        } else { 
            res.status(200).json(dbres.rows);
        }
    });
});

app.route('/pedido/adicionar').post( (req, res)=> { 
    let qry = "INSERT INTO pedidos ";
    qry += "(cliente, sabor, quantidade, tamanho) "
    qry += ` VALUES ('${req.body.cliente}', '${req.body.sabor}',`;
    qry += ` ${req.body.quantidade}, '${req.body.tamanho}');`;
    pool.query(qry, (err, dbres) => { 
        if (err) { 
            res.status(500).send(err);
        } else { 
            res.status(200).send("Ok");
        }
    });
})

app.listen(port, () => { 
    console.log("Servidor está iniciado na porta ", port);
})