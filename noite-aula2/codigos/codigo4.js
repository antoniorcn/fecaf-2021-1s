let alunoA = {nome: "João", ra: "11111"};
let alunoB = {nome: "Maria", ra: "22222"};

let sala1 = {   disciplina: "Matematica",
                professor: "Pedro",
                alunos: [alunoA, alunoB]
            };

//                 aluno1: alunoA,
//                aluno2: alunoB,
//                aluno3: null,
//                aluno4: null
let professores = ["Pedro", "Antonio", "Claudia"];
let i = Math.floor(Math.random() * 3);
sala1.professor = professores[i];

console.log(sala1);
