var express = require("express");
var apiRouterV2  = express.Router();
const knex = require("knex")(require('../knexfile').development);

const produtos = () => knex('produtos');

apiRouterV2 .get("/produtos", function (req, res, next) {
  knex('produtos').select('*').then(produtos => {
    res.status(200).json(produtos)
  }).catch(err => res.status(500).json({message:`erro ao obter produtos: ${err.messege}`}))
});

apiRouterV2 .get("/produtos/:id", function (req, res, next) {

  let id = req.params.id;
  if(id){
    knex('produtos').select('id').where('id',id).then(produtos => {
      if(produtos == null) {
      res.status(200).json(produtos);
    }
    res.status(404).json({ message: `Id do produto nao encontrado` });
    }).catch(err => res.status(500).json({message:`erro ao obter produtos: ${err.messege}`}))

  }
   
   
}); 

apiRouterV2 .post("/produtos", function (req, res, next) {
  let produto = req.body;
  let newId = Math.max(...produtos.map((o) => o.id)) + 1;

  produto.id = newId;
  produtos.push(produto);

  res
    .status(201)
    .json({ message: `Produto colocado com sucesso`, data: { id: newId } });
});

apiRouterV2 .delete("/produtos/:id", function (req, res, next) {
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

apiRouterV2 .put("/produtos/:id", function (req, res, next) {
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
module.exports = apiRouterV2  ;
