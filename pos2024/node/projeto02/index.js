const express = require('express');

const app = express()

app.get('/',(req,res, next) => {
  console.log(new Date().toLocaleDateString(),req.method, req.path);
  next()
})

app.get('/', (req,res)=>{
  res.send('teste')
})

app.use((req,res)=> {
  res.status (404).send('Nao achado')
})

app.listen(3000, () => {
  console.log('rodando')
})
