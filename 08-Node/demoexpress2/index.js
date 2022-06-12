// criando  api 
const express = require('express');
const app = express();
const port = 3030;

app.get("/", function (req, res) {
   res.send("Hello World");
});

app.get("/pt", function (req, res) {
   res.send("Ola Mundo");
});

app.post("/post", function (req, res) {
   res.send({ sestatus: "ok" });
})


app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
});