//maneira que usar classe
let joao = {
  nome:'João',
  idade: 35
};

 let joana = {};

 for (var chave in joao) {
   joana[chave] = joao[chave];
 }

joana.nome = 'Maria';
joana.sobrenome = 'Santos';
console.log(joao);
console.log(joana);
