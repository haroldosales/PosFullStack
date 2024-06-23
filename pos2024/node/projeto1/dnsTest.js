const { log } = require('console');
const { Resolver} = require('dns');
const resolver = new Resolver();

// Define o servidor a ser utilizado
resolver.setServers(['8.8.8.8']);

//Realizar a tradução de um nome de dominio para um IP  
resolver.resolve4('pucminas.br', (err, addresses) => {
    if (err)
        console.log(`Error: ${err.message}`);
    else
    console.log(`IP:` + addresses[0]);
})