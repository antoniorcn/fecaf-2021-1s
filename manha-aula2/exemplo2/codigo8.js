
const aluno1 = {nome: "Antonio", ra: "000001"}
const aluno2 = {nome: "João", ra: "000002"}

// Referencia
// const aluno3 = aluno1;

// Copia
// const aluno3 = {};
// aluno3.ra = aluno1.ra;
// aluno3.nome = aluno1.nome;

const aluno3 = {...aluno1};

aluno1.ra = "000011";

console.log(aluno1);
console.log(aluno3);


impares = [1, 3, 5, 7, 9, 11];
novosImpares = [...impares];
novosImpares.push(13);
console.log(impares);
console.log(novosImpares);


