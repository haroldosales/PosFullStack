let forma = {
  x: 10,
  y: 15
};
let retangulo =  Object.create(forma);
  retangulo.largura = 100;
  retangulo.altura=  50;

forma.cor = 'azul';
console.log(forma);
console.log(retangulo);
console.log(retangulo.x, retangulo.y);
