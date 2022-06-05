//Modulo file system
const fs = require("fs");

fs.mkdir("./teste", function () {
    console.log("Criei o diretorio teste");
});

fs.writeFile("./teste/abc.txt", "Ola tudo bem", function () {
    console.log("Criando arquivo no diretorio teste com arquivo txt");
});

fs.readFile("./teste/abc.txt", function (err, data){
    console.log("O meu arquivo possuir: ", data.toString());
});
