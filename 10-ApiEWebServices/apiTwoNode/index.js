const express = new require('express')
const app = express()

const port = 3000

app.get('/', (req, res) =>{
    res.send('Ola tudo bem')
})

app.post('/', (req, res) =>{
    res.send('Ola tudo show')
})

app.put('/put', (req, res) =>{
    res.send('Ola massa')
})

app.delete('/', (req, res) =>{
    res.send('Ola Ola')
})


app.listen(port, () => {
    console.log("exemplo app ouvindo at localhsot")
})