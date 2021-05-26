const express = require('express');
const pg = require('pg');

const port = process.env.PORT || 80;

const pool = new pg.Pool({
    connectionString: "postgres://wklqboxhiujkqu:95ff490d44993c0c2eb8ea325f15fa2208e5be67116120cadc5793c5927f4c7a@ec2-50-17-255-120.compute-1.amazonaws.com:5432/deu8ln2nmctnm",
    ssl: { 
        rejectUnauthorized: false,
    }
});

const app = express();
app.use(express.json());
app.set('port', port);

app.route('/reset').get( (req, res) => { 
    let query = "DROP TABLE IF EXISTS contatos;";
    query += "CREATE TABLE contatos (";
    query += "    nome VARCHAR(100),";
    query += "    telefone VARCHAR(30));";

    pool.query(query, (err, dbres)=> {
        if (err) { 
            res.status(500).send(err);
        } else { 
            res.status(200).send("Banco de dados resetado");
        }
    })
});

app.route('/contatos/adicionar').post( (req, res) => { 
    let qry = 'INSERT INTO contatos (nome, telefone) VALUES ($1, $2);';

    pool.query(qry, [req.body.nome, req.body.telefone], (err, dbres)=> {
        if (err) { 
            res.status(500).send(err)
        } else { 
            res.status(200).send("Objeto adicionado com sucesso");
        }
    });
})

app.route('/contatos').get( (req, res) => { 
    let qry = 'SELECT * FROM contatos;'
    pool.query(qry, (err, dbres) => { 
        if (err) { 
            res.status(500).send(err);
        } else { 
            res.status(200).json(dbres.rows);
        }
    })
})

app.listen(port, ()=> {
    console.log("Servidor de contatos ativo");
});