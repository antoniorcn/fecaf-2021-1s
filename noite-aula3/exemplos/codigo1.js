function somar(n1, n2) {
    let soma = n1 + n2;
    return soma;
}
 
function multiplicar(n1, n2) { 
    let resposta = n1 * n2;
    return resposta;
}

const dividir = (n1, n2) => {
    let resposta = n1 / n2;
    return resposta;
} 

function calculadora( n1, n2, operacao ) { 
    const r = operacao(n1, n2)
    return r;
}

let r1 = somar(15, 16);
console.log("R1: ", r1);

let r2 = multiplicar(3, 4);
console.log("R2: ", r2);

let r3 = dividir(50, 7);
console.log("R3: ", r3);

let r4 = calculadora(40, 20, multiplicar);
console.log("R4: ", r4);

let r5 = calculadora(100, 20, (n1, n2) => {
    const r = n1 - n2;
    return r; });
console.log("R5: ", r5);

// const quadrado = (n1) => { 
//     return n1 * n1;
// }

const quadrado = n1 => n1 * n1;

let r6 = quadrado(25);
console.log("R6: ", r6);