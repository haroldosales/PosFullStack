//codigo principal
const calc = require("./meuModulo/funcoes");


const r1 = calc.adicao(1, 1);
const r2 = calc.adicao(-123, 123123);
const r3 = calc.multiplicacao(8, 0);
const r32 = calc.multiplicacao(1239123, 12313);

const r4 = calc.divisao(123, -12);
const r42 = calc.divisao(313123, 0);
console.log("O valor da adicao:", r1);

console.log("O valor da ad 2:", r2);

console.log("O valor da multiplicacao:", r3);
console.log("O valor da multiplicacao:", r32);

console.log("O valor da divisao:", r4);
console.log("O valor da divisao:", r42);