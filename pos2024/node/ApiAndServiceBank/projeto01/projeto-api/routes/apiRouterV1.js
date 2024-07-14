var express = require("express");
var apiRouterV1 = express.Router();

var produtos = [
  { id: 1, descricao: "blusa", marca: "Nike", preco: 49.0 },
  { id: 2, descricao: "calça", marca: "leis ", preco: 89.0 },
  { id: 3, descricao: "short", marca: "Nike", preco: 99.0 },
  { id: 4, descricao: "tenis", marca: "Nike", preco: 490.0 },
  { id: 5, descricao: "meia", marca: "Nike desh", preco: 40.0 },
  { id: 6, descricao: "regada V", marca: "Nike sa", preco: 49.0 },
  { id: 7, descricao: "calçca jeans", marca: "Nike", preco: 99.0 },
  { id: 8, descricao: "pijma", marca: "tes", preco: 29.0 },
  { id: 9, descricao: "cueca", marca: "Hgm", preco: 59.0 },
  { id: 10, descricao: "Camisa", marca: "Ral", preco: 29.0 },
];

apiRouterV1.get("/produtos", function (req, res, next) {
  res.json(produtos);
});

apiRouterV1.get("/produtos/:id", function (req, res, next) {
  let id = req.params.id;
  if (id) {
    let idInt = Number.parseInt(id);
    let idx = produtos.findIndex((o) => o.id === idInt);
    if (idx > -1) {
      res.json(produtos[idx]);
    } else {
      res.status(4004).json({ message: `Produto nao encontrado` });
    }
  } else {
    res.status(4004).json({ message: `Produto nao encontrado` });
  }
});

apiRouterV1.post("/produtos", function (req, res, next) {
  let produto = req.body;
  let newId = Math.max(...produtos.map((o) => o.id)) + 1;

  produto.id = newId;
  produtos.push(produto);

  res
    .status(201)
    .json({ message: `Produto colocado com sucesso`, data: { id: newId } });
});

apiRouterV1.delete("/produtos/:id", function (req, res, next) {
  let id = req.params.id;
  if (id) {
    let idInt = Number.parseInt(id);
    let idx = produtos.findIndex((o) => o.id === idInt);
    if (idx > -1) {
   produtos.splice(idx, 1)
   res.status(200).json(  {message: ` excluido com sucesso`})
    } else {
      res.status(4004).json({ message: `Produto nao encontrado` });
    }
  } else {
    res.status(4004).json({ message: `Produto nao encontrado` });
  }
});

apiRouterV1.put("/produtos/:id", function (req, res, next) {
  let id = req.params.id;
   produto = req.body
  if (id) {
    let idInt = Number.parseInt(id);
    let idx = produtos.findIndex((o) => o.id === idInt);
    if (idx > -1) {
   produtos[idx].descricao = produto.descricao
   produtos[idx].marca = produto.marca
   produtos[idx].preco = produtos.preco

   res.status(200).json({message: ` produto alterado com sucesso`,
                           data: { produto: produtos[idx]}})
    } else {
      res.status(4004).json({ message: `Produto nao encontrado` });
    }
  } else {
    res.status(4004).json({ message: `Produto nao encontrado` });
  }
});
module.exports = apiRouterV1;
