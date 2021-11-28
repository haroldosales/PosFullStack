//função construtora

function Forma(x, y) {
  this.x = x;
  this.y = y;
}


let f1 = new Forma(10, 15);

console.log(f1);


let Forma2 = {
  x: 10,
  y: 15
}

console.log(Forma2);
