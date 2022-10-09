const greet = (name) => {


  if (name.length == 0) {
    throw Error('Nao pode nome vazio')
  }



  return `Ola $(name), bem vindo ao curso de desenvolvimento web`

}

module.exports = greet


