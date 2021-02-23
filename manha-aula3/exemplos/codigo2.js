function soma(n1, n2) { 
    let r = n1 + n2;
    return r;
}

function multiplicar(n1, n2) { 
    let r = n1 * n2;
    return r;
}

function calcular( n1, n2, operacao ) { 
    let r = operacao(n1, n2);
    return r;
}

// function subtrair(n1, n2) { 
//     let r = n1 - n2;
//     return r;
// }

// let r1 = soma(23, 47);
// let r2 = multiplicar(4, 6);
let op = (n1, n2) => {let r = n1 * n2; return r;};
let v1 = op(45, 78);
let r1 = calcular(23, 7, op);

console.log("R1: ", r1);


let quadrado = (n1) => {return n1 * n1;};
let quadrado2 = n1 => n1 * n1;

console.log("Q1: ", quadrado(5));
console.log("Q2: ", quadrado(7));


// console.log("R2: ", r2);
// let v1 = soma(20, 15);
// let v2 = 4;
// let r2 = v1 - v2;

// console.log("V1: ", v1);
// console.log("V2: ", v2);
// console.log("R2: ", r2);