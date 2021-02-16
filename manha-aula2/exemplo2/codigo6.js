
function soma(a, b) { 
	return a + b;
}

function multiplicacao(a, b) { 
	return a * b;
}

function elevado(a, b) { 
	return Math.pow(a, b);
}

function fazerConta(n1, n2, operacao) { 
	let resultado = operacao(n1, n2);
	return resultado;
}

const subtracao = (a, b) => {
	return a - b;
}

// const quadrado = (n) => { 
//	return n * n;
// }

const quadrado = n => n * n;

let r = fazerConta(10, 4, 
			(a, b) => {return a % b} );
			
console.log("O Resultado é : " + r);

console.log("O quadro de 2 é : " + quadrado(2));
