var alunoId = 0;
class Aluno { 
    id = 0;
    nome = "";
    ra = "";
    rg = "";
    passeEscolar = false;

    constructor(nome, ra, rg, passe) {
        this.id = alunoId;
        this.nome = nome;
        this.ra = ra; 
        this.rg = rg;
        this.passeEscolar = passe;
        console.log("Instancia criada");
        alunoId++;
    }

    mostrar() { 
        console.log(`Id: ${this.id}   Ra: ${this.ra}  ` + 
        `Nome: ${this.nome}  PasseEscolar: ${this.passeEscolar}`);
    }

    cancelarPasseEscolar() { 
        this.passeEscolar = false;
    }

    // iniciar(nome, ra, rg, passe) {
    //     this.nome = nome;
    //     this.ra = ra; 
    //     this.rg = rg;
    //     this.passeEscolar = passe;
    // }
}

let a1 = new Aluno("João", "002", "222222-2", true);

let a2 = new Aluno("Maria", "003", "333333-3", false);

a1.mostrar();
a2.mostrar();
