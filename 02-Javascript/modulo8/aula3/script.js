class Pessoa {
  constructor(n){
  this.nome = n;
}
  fn(n)  {
    let self = this;
    //funçao calBack usando classe
    setTimeout(function()
    {
      self.nome = n;
      console.log(2, self);
    },1000);
  }
}

let p = new Pessoa('marcos');
p.fn('Pedro');
