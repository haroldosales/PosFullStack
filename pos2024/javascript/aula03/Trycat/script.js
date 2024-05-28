
// 	document.querySelector('#resultado').innerHTML = '';

// let a ;
// try{
// 	a = x;
// }catch (erro) {
// 	resultado.innerHTML = ' error achado'
// 	console.log(erro.nome); //nome de referencia
// 	console.log(error.messege); // explciaçao do error
// 	console.log(erro.stack)  //aparece tudo em uma parte s;o
// console.log('fim');

	document.querySelector('#resultado').innerHTML = '';

let a ; 
let x = 20;
try {
	if( x < 0)
			a = x;
				resultado.innerHTML = `<p> A = ${a}.</p>`

		throw new Error ("Valor nao pode ser negativo");
} catch (erro) {
	resultado.innerHTML = `<p>${erro.message}.</p>`
	console.log(erro.nome); //nome de referencia
	console.log(error.messege); // explciaçao do error
	console.log(erro.stack)  //aparece tudo em uma parte s;o
} finally{
	console.log('fim');

}
''