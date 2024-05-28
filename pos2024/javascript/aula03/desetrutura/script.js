
// let numeros = [1,2,3,4];
// let maisNumero = [...numeros,5,6];

// console.log(maisNumero);

// let  ob = { nome: 'jos', idade:25};
// let ob2 = ob;
// ob.nome = 'silva';
// console.log(ob2.nome);



let  ob = { nome: 'jos', idade:25};
let ob2 = ob;
let clone1 = {...ob};

ob.nome = 'Maria';
console.log(clone1.nome);
console.log(ob.nome)