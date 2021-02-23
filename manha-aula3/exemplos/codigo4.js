class Aluno { 
    ra = "";
    nome = "";

    constructor(r, n) { 
        console.log("Instancia criada");
        this.ra = r;
        this.nome = n;
    }

    mostrar() { 
        console.log("Ra: " + this.ra + "    Nome: " + this.nome);
    }
}

let a1 = new Aluno("001", "João");
let a2 = new Aluno("002", "Maria");
let a3 = a1;
// let a4 = new Aluno(a2.ra, a2.nome);
// let a4 = Object.assign({}, a2);
let a4 = {...a2};
a4.mostrar = a2.mostrar;

a1.ra = "999";
a2.ra = "888";

a1.mostrar();
a2.mostrar();
a3.mostrar();
a4.mostrar();

process.exit;