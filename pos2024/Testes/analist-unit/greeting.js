const greet = (name) => {
    if(name.length ===0)
    {
        throw Error('Argumento nome nao pode ser vazio')
    }
    return`Olá ${name}, seja bem vindo ao curso de desenvolvimento web`
}

module.exports = greet