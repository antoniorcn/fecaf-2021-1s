let a = 10;
let b = 20;
let resultado = a * b;

//        0  1  2  3  4
const li = [2, 4, 6, 8, 10];
li[3] = 90;
console.log(resultado);
console.log(li);
console.log(li[3]);

li.push(12);
console.log(li);
//      
if (1 === 1) { 
	var aluno1 = { nome:"João Silva", ra:"00001" }
	
}

console.log(aluno1);
console.log(aluno1.nome);

console.log(aluno1['nome']);
console.log(aluno1['ra']);

aluno1.nascimento = "04/05/2000";

aluno1['idade'] = 20; 

console.log(aluno1);