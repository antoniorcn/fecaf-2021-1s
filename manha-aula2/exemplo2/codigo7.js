// const obj1 = {prop1: "Valor 1", prop2: "Valor 2" }
const aluno1 = {nome: "Antonio", ra: "000001"}
const aluno2 = {nome: "João", ra: "000002"}


class Aluno { 
	nome = '';
	ra = '';
	
	mostrar() { 
		console.log("Aluno RA: ", this.ra, "  Nome: ", this.nome, "\n");
	}
}

aluno3 = new Aluno();
aluno4 = new Aluno();

aluno3.nome = "Maria";
aluno3.ra = "000003";

aluno4.nome = "Priscila";
aluno4.ra = "000004";

aluno3.mostrar();
aluno4.mostrar();