// criando  api 
const express = require('express');
const app = express();
const port = 3000;

const logMiddleeware = function (req, res, next) {
   console.log("Api recebeu alguma coisa");

   next();
};

app.use(express.static("./site"));

app.use(logMiddleeware);

app.get("/", function (req, res) {
   console.log("Hello Wordl");
   res.send("Hello World");
});


app.get("/pt", function (req, res) {
   res.send("Ola Mundo");
});



app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
});