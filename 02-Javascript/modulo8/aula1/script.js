//getters, seeters
let funcionario = {
  prenome: 'Jose',
  sobrenome: 'Couves',
  salario: 3500,
  nascimento: new Date( 1993, 10, 3),

  get nomeCompleto() {
    return `${this.prenome} ${this.sobrenome}`;
  },
set nomeCompleto(nc){
      [this.prenome, this.sobrenome] = nc.split(' ');
},
set novoSalario(v){
  if(v < this.salario)
      throw new Error("Salario nao pode menor do que atual");
  else
  this.salario = v;
},
get idade(){
    let ano = (new Date()).getFullYear();
  return ano - this.nascimento.getFullYear();
}
};

funcionario.nomeCompleto = 'Maria Souza'
funcionario.novoSalario = 4000;
console.log(funcionario);
console.log(funcionario.idade);
