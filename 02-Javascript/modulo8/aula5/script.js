// let ola =  ( function(nome) {
//     console.log(`Olá ${nome}`);
//
//     //invocao imediata
//
// })('Haroldo');


// //ola('Haroldo');
// ( function(nome) {
//     console.log(`Olá ${nome}`);
//
//     //invocao imediata
//
// })('Haroldo');
//Cria biblioteca
let $ = (function() {
  let  contadores = [];

    function Contador(i){
      if(contadores[i]===undefined)
        contadores[i] = 0;
      this.indice = i;
      this.incrementa = function(){
        contadores[i]++;
      };
      this.decrementa = function(){
        contadores[i]--;
        };
            this.valor = function( ) {
        return contadores[i];
      };
    }


  return function (i) {
return new Contador(i);

  };
})();

let c  = $(3);
c.incrementa();
console.log(c.valor());
c.incrementa();
console.log(c.valor());
c.decrementa();
console.log(c.valor());
c.incrementa();
console.log(c.valor());
c.decrementa();
console.log(c.valor());
c.incrementa();
console.log(c.valor());
