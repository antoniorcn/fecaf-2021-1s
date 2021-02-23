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

// let ra = a1.ra;
// let nome = a1.nome;
let {ra, nome} = a1;
console.log("Ra: ", ra);
console.log("Nome: ", nome);