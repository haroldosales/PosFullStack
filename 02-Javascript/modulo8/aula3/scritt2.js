//içamento (hoisting)
fn();
c = 3;
/**
let a =1;
const b = 2;
var c ;
this.d = 4;

function fn() {
  console.log(this);
}

console.log(c);
/*     */
class Pessoa {
  constructor(n){
  this.nome = n;
}
  fn()  {
    let self = this;
    let f = function(){
    console.log(self);
  };
    f();
  }
}

let p = new Pessoa('marcos');
p.fn();

let pessoa = {
    nome: 'Marcos',
    fn: function() {
      console.log(this);
    }
}


pessoa.fn();
