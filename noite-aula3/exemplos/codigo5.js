const a1 = { 
    nome: "João",
    ra: "001"
}

// const a2 = a1;

// const a2 = {};
// a2.nome = a1.nome;
// a2.ra = a1.ra;

// const a2 = Object.assign({}, a1);
const a2 = {...a1};

a1.ra = "015";

console.log(a1);
console.log(a2);


let arr1 = [2, 3, 4, 5, 6];
// const arr2 = arr1;

// const arr2 = Object.assign([], arr1);

const arr2 = [...arr1];   // Spread

arr2[0] = -1
console.log(arr1);
console.log(arr2);



