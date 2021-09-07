function mesagem(nome) {
  return(`olar ${nome}`);
}

let soma = function (a, b) {
    return a + b;
};

let subtrair = function (a, b) {
    return a - b;
};

let dividir = function (a, b) {
    return a / b;
};
let multiplicacao = function (a, b) {
    return a * b;
};
function executa(fn,a,b){
  return fn(a, b);
}

let resultado = executa(dividir, 15, 3);

console.log(resultado);
