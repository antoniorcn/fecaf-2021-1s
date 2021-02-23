let c1 = [1, 2, 3, 4, 5, 6];

// let c2 = [];
// for (let i = 0; i < 6; i++) { 
//     let r = c1[i] * 2;
//     c2.push(r);
// }

// function duplica(n1) { 
//     return n1 * 2;
// }
// let c2 = c1.map(duplica);

// let c2 = c1.map( (n1) => {return n1*2});

let c2 = c1.map( n1 => n1 * 2 );

// let c3 = c1.filter( (n1) => { 
//     if (n1 % 2 == 1) {
//         return true;
//     } else { 
//         return false;
//     }  
// });

let c3 = c1.filter( n1 => n1 % 2 ); // impares
// let c3 = c1.filter( n1 => !(n1 % 2)); // pares

console.log(c1);
console.log(c2);
console.log(c3);