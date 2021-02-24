// Programação Funcional
                 
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// function mapExecute(n) { 
//     return n * 2;
// }
// const novosNumeros = numeros.map(mapExecute);

// const novosNumeros = numeros.map((n) => {return n*2});
const novosNumeros = numeros.map(n => n*3); // [0, 3, 6, ...]

console.log(numeros);
console.log(novosNumeros);


// const numerosImpares = numeros.filter((n) => { 
//     if (n % 2 == 1) { 
//         return true;
//     } else { 
//         return false;
//     }
// }); // [1, 3, 5, 7, 9]

const numerosImpares = numeros.filter( n => n % 2 == 1);

console.log(numerosImpares);

