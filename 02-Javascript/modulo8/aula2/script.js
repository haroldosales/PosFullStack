s//closure 1
/* function criarContador() {
    let n = 0;
    return function() {
          console.log(n++);
    }
}

let contador1 = criarContador();
contador1();
contador1();
contador1();
contador1(); */
//closure 2
/*
function digaOla(idioma){
    return function(nome){
      switch (idioma) {
        case 'es': console.log(`Hola ${nome}`);
              break;
        case 'en':  console.log(`Hello ${nome}`);
        break;
        default: console.log(`oi ${nome}`);
        break;
      }
    };
}
let ola = digaOla('pt');
ola('Jose');
ola('Maria'); */
//contador  sofisticado
function criaContador() {
  let n = 0;

  function altera(v) {
    n += v;
  };
  return {
    incrementa: function() {
      altera(1);
    },
    descrementa: function() {
      altera(-1);
    },
    valor: function() {
      return n;
    },
  };
}


let contador1 = criaContador();
contador1.incrementa();
//contador1.descrementa();
console.log(contador1.valor());
contador1.descrementa();
//contador1.descrementa();
console.log(contador1.valor());
contador1.incrementa();
//contador1.descrementa();
console.log(contador1.valor());
