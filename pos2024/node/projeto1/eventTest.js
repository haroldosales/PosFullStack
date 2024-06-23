//Importa o modulo eventos
const events = require ('events')

//criar um gerenciador ede eventos
const eventMgmt = new events.EventEmitter();

eventMgmt.on('bomdia', (data) => {
    console.log(`recebi um bon dia de: ${data}`);
})

// incluir um subscriber ao evento

eventMgmt.addListener('ola', (data) => {
    console.log(`rAconteceu: ${data}`);
})

eventMgmt.emit('bomdia', 'Haroldo')

eventMgmt.emit('ola','Ola para voce')