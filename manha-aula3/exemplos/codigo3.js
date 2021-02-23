class Aluno { 
    ra = "";
    nome = "";

    constructor(r, n) { 
        console.log("Instancia criada");
        this.ra = r;
        this.nome = n;
    }

    iniciar(r, n) { 
        this.ra = r;
        this.nome = n;
    }
    mostrar() { 
        console.log("Ra: " + this.ra + "    Nome: " + this.nome);
    }
}

let i = 20;
let a1 = new Aluno("0001", "João");
// a1.ra = "0001";
// a1.nome = "João";


let a2 = new Aluno("0002", "Maria");
// a2.ra = "0002";
// a2.nome = "Maria";

let a3 = new Aluno("0003", "Paulo");
// a3.iniciar();

a1.mostrar();
a2.mostrar();
a3.mostrar();

let a4 = new Aluno("0004", "Camila");

process.exit;