function soma() {
let valores = [...arguments];
console.log(arguments instanceof Array);
console.log(valores instanceof Array);

return valores.reduce(
	(total , n ) => (total += n)
	);
}
console.log(soma(1,2,3,4));








// // let numeros = [1,2,3,4];
// // let maisNumero = [...numeros,5,6];

// // console.log(maisNumero);

// // let  ob = { nome: 'jos', idade:25};
// // let ob2 = ob;
// // ob.nome = 'silva';
// // console.log(ob2.nome);



// // let  ob = { nome: 'jos', idade:25};
// // let ob2 = ob;
// // let clone1 = {...ob};

// // ob.nome = 'Maria';
// // console.log(clone1.nome);
// // console.log(ob.nome)

// let ob1 = {nome: 'jose couves', idade: 25};
// let ob2 = ob1;
// let clone1 = {...ob1};
// ob1.nome = 'maia';
// console.log(ob2.nome);
// console.log(clone1.nome);

// let mat = {matricula: 1234, curso: 'web'};
// let aluno = {...ob1, ...mat};
// console.log(aluno)

