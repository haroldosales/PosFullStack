 let funcionario = {
	prenome:'jose',
	sobrenome:'cour',
	salario:200,
	get nomeCompleto(){
		return `${this.prenome} ${this.sobrenome}`;
	},
	set nomeCompleto(nc) {
		[this.prenome, this.sobrenome] = nc.split(' ');
	},

    set novoSalario(v){
    	if (v < this.salario) 
    		throw new Error('Novo salario nao ' + ' pode ser menor que o atual');
    	else
    		this.salario = v;
    },	

};
funcionario.novoSalario = 20;
console.log(funcionario);

