//função construtora

class Forma {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  move(dx, dy){
    this.x += dx;
    this.y += dy;
  }
};



class Retangulo extends Forma{
  constructor (x, y, l, a, n) {
    super(x, y);
    this.largura = l;
    this.altura = a;
}

}



 let r1 = new Retangulo(10, 15, 100, 50);

 r1.move(15,15);
 console.log(r1);
//
// Forma.prototype.move = function(dx, dy) {
//
// };
// Retangulo.prototype = Object.create(Forma.prototype);
// Retangulo.prototype.constructor = Retangulo;
//f1.move(15, 15);
// console.log(f1);
//console.log(r1);
