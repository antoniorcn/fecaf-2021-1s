const a1 = {
    nome: "Antonio", 
    ra: "001", 
    rg: "111111-1", 
    passeEscolar: true
};

a1.rg = "1234561-9";
console.log(a1.rg);

class Aluno { 
    nome = "";
    ra = "";
    rg = "";
    passeEscolar = false;

    mostrar() { 
        console.log(`Ra: ${this.ra}  ` + 
        `Nome: ${this.nome}  PasseEscolar: ${this.passeEscolar}`);
    }

    cancelarPasseEscolar() { 
        this.passeEscolar = false;
    }
}

const a2 = new Aluno();
a2.nome = "João";
a2.ra = "002";
a2.rg = "222222-2";
a2.passeEscolar = true;
a2.cancelarPasseEscolar();
a2.mostrar();

const a3 = new Aluno();
a3.nome = "Maria";
a3.ra = "003";
a3.rg = "3333333-3";
a3.passeEscolar = false;
a3.mostrar();

// console.log(a1);
// console.log(a2);
// console.log(a3);