var express = require("express");
var apiRouterV2  = express.Router();
const knex = require("knex")(require('../knexfile').development);

const produtos = () => knex('produtos');

apiRouterV2 .get("/produtos", function (req, res, next) {
  knex('produtos').select('*').then(produtos => {
    res.status(200).json(produtos)
  }).catch(err => res.status(500).json({message:`erro ao obter produtos: ${err.messege}`}))
});

apiRouterV2.get("/produtos/:id", function (req, res, next) {
       
   let id = req.params.id;
   if(id) {
    idInt = Number.parseInt(id);
    knex('produtos').select('*').where({id: idInt}).then(produtos => {
    if(!produtos.length) {
      res.status(404).json({message: 'produto nao enccontrado'})
      return 
    }
      let produto = produtos[0]
      res.status(200).json(produto);
    }).catch(err => res.status(500).json({message:`erro ao obter produtos: ${err.messege}`}));

   }
   else{
    res.status(404).json({message: 'produto nao enccontrado'})

   }
  // fiz sozinho
  // let id = req.params.id;
  // if(id){
  //   knex('produtos').select('id').where('id',id).then(produtos => {
  //     if(produtos != id) {
  //     res.status(200).json(produtos);
  //   } else {
  //   res.status(404).json({ message: `Produto nao encontrado` });
  // }
  //   }).catch(err => res.status(500).json({message:`erro ao obter produtos: ${err.messege}`}))

    
  // }
   
}); 

apiRouterV2.post("/produtos", function (req, res, next) {
  let produto = req.body;
   knex('produtos').insert(produto, ['id']).then(produtos =>{
    if(!produtos.length){
      res.status(400).json({message: 'produto nao inserido '})

    }else {
      let id = produtos[0];
      res.status(201).json({message: 'produto criado com sucesso', data:{id}});
    }
   }).catch(err => res.status(500).json({message:`erro ao obter produtos: ${err.messege}`}))




});

apiRouterV2 .delete("/produtos/:id", function (req, res, next) {
  let id = req.params.id;
  if(id) {
    idInt = Number.parseInt(id);
    knex('produtos').where({id: idInt}).del().then(result => {
      res.status(200).json({message: 'foi com Deus'})
   }).catch(err => res.status(500).json({message: "erro ao excluir" + err.messege }));
  }
});

apiRouterV2 .put("/produtos/:id", function (req, res, next) {
  let id = req.params.id;
  let  produto = req.body;
  if (id) {
    let idInt = Number.parseInt(id);

    knex('produtos')
          .where({id: idInt})
          .update(produto)
          .then(result => {
                    res.status(200).json({message: ` produto alterado com sucesso`,
                                          data: {  produto }})
      }).catch(err => res.status(500).json({message: "erro ao atualizar produto" + err.messege }));
 
  } else {
    res.status(4004).json({ message: `Produto nao encontrado` });
  }

});
module.exports = apiRouterV2  ;
