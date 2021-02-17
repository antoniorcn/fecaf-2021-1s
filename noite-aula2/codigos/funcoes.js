
function cabecalho(nomePrograma, autor) { 
    console.log("******************************");
    console.log("Nome do programa: " + nomePrograma);
    console.log("Desenvolvido por: " + autor);
    console.log("******************************");
}


function somar(n1, n2) { 
    let resultado = n1 + n2;
    console.log("Resultado: ", resultado);
    return resultado;
}


let r = somar(10, 5) + 7;
console.log("R: ", r);
somar(45, 67);

// cabecalho("App2", "João");
// cabecalho("App3", "Maria");