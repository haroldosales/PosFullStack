
let numero = 10;
fnMetade(numero).then(
  (resp) => console.log(` A metade de ${numero} é ${resp}`),
  (erro) => console.log(erro)
)

function fnMetade(n) {
  return new Promise( function (resolve, reject) {
    if (n % 2 == 0) resolve(n /2);
    else reject('numero náo é par');

  });
};
