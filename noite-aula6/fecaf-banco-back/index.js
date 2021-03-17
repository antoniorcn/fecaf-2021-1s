const express = require('express');
const path = require('path');
const config = require('config');

const port = process.env.PORT || config.get('server.port');
const lancamentos = [
    { data: '2021-03-10',
      descricao: 'pagamento',
      valor: 2500.00
    },
    { data: '2021-03-15',
      descricao: 'gasolina',
      valor: -100.00
    },
    { data: '2021-03-16',
      descricao: 'mercado',
      valor: -200.00
    },
    { data: '2021-03-17',
    descricao: 'taxi',
    valor: -50.00
  }
  ];

const app = express();

app.set('port', port);

app.route('/extrato').get(
    (req, res) => { 
        res.status(200).json(lancamentos);
    }
)

app.listen(port, ()=> { 
    console.log("Servidor iniciado na porta " + port);
})
console.log("Serviço iniciado")