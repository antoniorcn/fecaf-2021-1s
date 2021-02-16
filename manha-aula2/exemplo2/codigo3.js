let nome = "admin";
let perfil = "professor";

if (nome === "admin" || perfil === "professor") { 
	console.log("Permissao");
} else { 
	console.log("Não tem permissão");
}

if (nome === "admin" && perfil === "professor") { 
	console.log("Você é um professor administrador");
}