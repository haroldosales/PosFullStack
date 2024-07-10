const express = require('express');

const app = express()

// app.use((req, res) => {
//   console.log(new Date().toLocaleDateString(),req.method, req.path);

//   next()

// })

// app.get('/',(req,res, next) => {
//   console.log(new Date().toLocaleDateString(),req.method, req.path);
//   next()
// })

// app.get('/', (req,res)=>{
//   res.send('teste')
// })

// app.use((req,res)=> {
//   res.status (404).send('Nao achado')
// })
app.use(express.json())


app.use('/static',express.static('public'))

app.post('/users', (req, res ) => {
  const name = req.body
  console.log(name)
  res.send('informacao veio' + name.nome)
})

app.listen(3000, () => {
  console.log('rodando')
})
